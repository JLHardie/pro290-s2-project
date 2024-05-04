package pro290.brain.damage.cartservice.models;

import java.io.Serializable;
import java.util.LinkedList;


/**
 * @author jperezbenitez
 * @createdOn 5/3/2024 at 3:14 PM
 * @projectName CartService
 * @packageName PACKAGE_NAME;
 */

public class Cart implements Serializable {
    private String cartId;
    private LinkedList<Item> items = new LinkedList<>();

    public Cart() {
    }

    public Cart(String cartId) {
        this.cartId = cartId;
    }

    public Cart(String cartId, LinkedList<Item> items) {
        this.cartId = cartId;
        this.items = items;
    }
    public String getCartId() {
        return cartId;
    }

    public void setCartId(String cartId) {
        this.cartId = cartId;
    }

    public LinkedList<Item> getItems() {
        return items;
    }

    public void setItems(LinkedList<Item> items) {
        this.items = items;
    }

}
