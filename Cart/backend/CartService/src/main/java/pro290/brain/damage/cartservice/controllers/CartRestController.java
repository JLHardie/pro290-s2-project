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
import org.springframework.web.bind.annotation.*;
import pro290.brain.damage.cartservice.models.*;

import java.util.LinkedList;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class CartRestController {
    @Autowired
    private RedisTemplate<String, Cart> redisTemplate;


    @GetMapping(path = "/test")
    public String test(){
        System.out.println("HIT TEST");
        return "test successful";
    }

    @PostMapping(path = "/new")
    public Cart CreateCart(@RequestBody Item item){
        String cartId = UUID.randomUUID().toString();
        Cart cart = new Cart(cartId);
        cart.getItems().add(item);
        redisTemplate.opsForValue().set(cartId, cart);
        return cart;
    }

    @PostMapping(path = "/{cartId}")
    public void AddItemToCart(HttpServletResponse resp, @PathVariable String cartId, @RequestBody Item item){
        Cart cart = redisTemplate.opsForValue().get(cartId);
        if (cart == null) {
            resp.setStatus(404);
            return;
        }
        cart.getItems().add(item);
        redisTemplate.opsForValue().set(cartId, cart);
    }

    @DeleteMapping(path = "/{cartId}/{itemId}")
    public void DeleteItemFromCartById(HttpServletResponse resp, @PathVariable String cartId, @PathVariable UUID itemId){
        Cart cart = redisTemplate.opsForValue().get(cartId);
        if (cart == null) {
            resp.setStatus(404);
            return;
        }
        RemoveItemsFromCartById(cart.getItems(), itemId);
        redisTemplate.opsForValue().set(cartId, cart);
    }

    public void RemoveItemsFromCartById(LinkedList<Item> items, UUID itemId){
        for (int i = items.size() - 1; i >= 0; i--) {
            if (items.get(i).getItemId() == itemId){
                items.remove(i);
            }
        }
    }


}
