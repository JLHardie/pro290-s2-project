/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:45 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.models;
 */
package pro290.brain.damage.orderservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;

@Entity(name = "Items")
public class Item {
    // A composite primary key with the item id and the order id, I got from chatGPT
    @EmbeddedId
    private ItemId itemId;

    @ManyToOne
    @MapsId("placedOn")  // This tells JPA to map the placedOn field of the composite key
    @JoinColumn(name = "placedOn")
    @JsonIgnore
    @Nullable
    private Order placedOn;
    private String title;
    private String description;
    private float price;
    private String category;

    public Order getPlacedOn() {
        return placedOn;
    }

    public void setPlacedOn(Order order) {
        this.placedOn = order;
    }

    public ItemId getItemId() {
        return itemId;
    }

    public void setItemId(ItemId itemId) {
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
