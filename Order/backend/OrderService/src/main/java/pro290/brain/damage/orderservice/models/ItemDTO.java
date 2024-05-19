/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:45 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.models;
 */
package pro290.brain.damage.orderservice.models;

import java.util.UUID;



public class ItemDTO {

    private UUID itemId;
    private String title;
    private String description;
    private float price;
    private String category;



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
