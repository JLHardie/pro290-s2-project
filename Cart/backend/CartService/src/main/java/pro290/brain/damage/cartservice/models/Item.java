/**
 * @author jperezbenitez
 * @createdOn 5/3/2024 at 3:15 PM
 * @projectName CartService
 * @packageName pro290.brain.damage.cartservice.models;
 */
package pro290.brain.damage.cartservice.models;

import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.util.UUID;

public class Item implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private UUID itemId;
    private String title;
    private String description;
    private float price;
    private String category;

    public Item() {
    }

    public Item(UUID itemId, String title, String description, float price, String category) {
        this.itemId = itemId;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    public UUID getItemId() {
        return itemId;
    }

    public void setItemId(UUID itemId) {
        this.itemId = itemId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
