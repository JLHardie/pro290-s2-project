/**
 * @author jperezbenitez
 * @createdOn 5/3/2024 at 3:21 PM
 * @projectName CartService
 * @packageName pro290.brain.damage.cartservice.controllers;
 */
package pro290.brain.damage.cartservice.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pro290.brain.damage.cartservice.models.*;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("")
public class CartRestController {
    @Autowired
    private RedisTemplate<String, Cart> redisTemplate;


    @GetMapping(path = "/test")
    public String test() {
        System.out.println("HIT TEST");
        return "test successful";
    }

    @PostMapping(path = "/new")
    public ApiResponse CreateCart(@RequestBody Item item) {
        String cartId = UUID.randomUUID().toString();
        Cart cart = new Cart(cartId);
        cart.getItems().add(item);
        redisTemplate.opsForValue().set(cartId, cart);
        return new ApiResponse(true, "New cart created and item was added.", cart);
    }

    @PostMapping(path = "/{cartId}")
    public ApiResponse AddItemToCart(HttpServletResponse resp, @PathVariable String cartId, @RequestBody Item item) {
        Cart cart = redisTemplate.opsForValue().get(cartId);
        if (cart == null) {
            resp.setStatus(404);
            return new ApiResponse(false, "No cart found", null);
        }
        cart.getItems().add(item);
        redisTemplate.opsForValue().set(cartId, cart);
        return new ApiResponse(true, "Item added to cart", cart);
    }

    @GetMapping(path = "/{cartId}")
    public ApiResponse GetCartById(HttpServletResponse resp, @PathVariable String cartId){
        Cart cart = redisTemplate.opsForValue().get(cartId);
        if (cart == null) {
            resp.setStatus(404);
            return new ApiResponse(false, "No cart found", null);
        }
        return new ApiResponse(true, "ok", cart);
    }

    @DeleteMapping(path = "/{cartId}/{itemId}")
    public void DeleteItemFromCartById(HttpServletResponse resp, @PathVariable String cartId, @PathVariable UUID itemId) {
        Cart cart = redisTemplate.opsForValue().get(cartId);
        if (cart == null) {
            resp.setStatus(404);
            return;
        }
        RemoveItemsFromCartById(cart.getItems(), itemId);
        redisTemplate.opsForValue().set(cartId, cart);
    }

    public void RemoveItemsFromCartById(LinkedList<Item> items, UUID itemId) {
        for (int i = items.size() - 1; i >= 0; i--) {
            if (items.get(i).getItemId().equals(itemId)) {
                items.remove(i);
            }
        }
    }

    @DeleteMapping(path = "/{cartId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void DeleteCartById(@PathVariable String cartId) {
        redisTemplate.delete(cartId);
    }

    @PatchMapping(path = "/{cartId}/{itemId}/add/{increment}")
    public ApiResponse IncrementItemInCart(HttpServletResponse resp, @PathVariable String cartId, @PathVariable UUID itemId, @PathVariable int increment) {
        HashMap<Integer, Object> storage = new HashMap<>();
        ApiResponse response = GetCartAndItem(resp, storage, cartId, itemId);
        if (response != null) return response;
        Cart cart = (Cart)storage.get(0);
        Item item = (Item)storage.get(1);
        AddItemToCart(cart, item, increment);
        redisTemplate.opsForValue().set(cartId, cart);
        return new ApiResponse(true, "Successfully Increment", cart);
    }

    public void AddItemToCart(Cart cart, Item item, int increment) {
        
        for (int count = 0; count < increment; count++) {
            cart.getItems().add(item);
        }
    }

    @PatchMapping(path = "/{cartId}/{itemId}/delete/{decrement}")
    public ApiResponse DecrementItemInCart(HttpServletResponse resp, @PathVariable String cartId, @PathVariable UUID itemId, @PathVariable int decrement) {
        HashMap<Integer, Object> storage = new HashMap<>();
        ApiResponse response = GetCartAndItem(resp, storage, cartId, itemId);
        if (response != null) return response;
        Cart cart = (Cart)storage.get(0);
        Item item = (Item)storage.get(1);
        RemoveItemFromCart(cart, item, decrement);
        redisTemplate.opsForValue().set(cartId, cart);
        return new ApiResponse(true, "Successfully decremented", cart);
    }

    public ApiResponse GetCartAndItem(HttpServletResponse resp, HashMap<Integer, Object> storage, String cartId, UUID itemId){
        Cart cart = redisTemplate.opsForValue().get(cartId);
        if (cart == null) {
            resp.setStatus(404);
            return new ApiResponse(false, "No cart found", null);
        }
        storage.put(0, cart);
        List<Item> items = cart.getItems();
        Item item = items.stream().filter(i -> i.getItemId().equals(itemId)).findFirst().orElse(null);
        if (item == null) {
            resp.setStatus(404);
            return new ApiResponse(false, "No item with this itemId found in the cart.", null);
        }
        storage.put(1, item);
        return null;
    }


    public void RemoveItemFromCart(Cart cart, Item item, int decrement){
        decrement = decrement < 0 ? decrement * -1 : decrement;
        int removed = 0;
        LinkedList<Item> items = cart.getItems();
        for (int index = items.size() - 1; index >= 0 && removed != decrement; index--) {
            if (items.get(index).getItemId().equals(item.getItemId())){
                items.remove(index);
                removed++;
            }
        }
    }


}
