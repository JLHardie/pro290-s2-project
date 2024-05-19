/**
 * @author jperezbenitez
 * @createdOn 5/18/2024 at 9:29 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.models;
 */
package pro290.brain.damage.orderservice.models;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

public class ItemId implements Serializable {

    private UUID itemId;
    private UUID placedOn;

    // Default constructor
    public ItemId() {}

    // Constructor
    public ItemId(UUID itemId, UUID placedOn) {
        this.itemId = itemId;
        this.placedOn = placedOn;
    }

    // Getters and setters
    public UUID getItemId() {
        return itemId;
    }

    public void setItemId(UUID itemId) {
        this.itemId = itemId;
    }

    public UUID getPlacedOn() {
        return placedOn;
    }

    public void setPlacedOn(UUID placedOn) {
        this.placedOn = placedOn;
    }

    // Override equals and hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemId itemId1 = (ItemId) o;
        return Objects.equals(itemId, itemId1.itemId) && Objects.equals(placedOn, itemId1.placedOn);
    }

    @Override
    public int hashCode() {
        return Objects.hash(itemId, placedOn);
    }
}
