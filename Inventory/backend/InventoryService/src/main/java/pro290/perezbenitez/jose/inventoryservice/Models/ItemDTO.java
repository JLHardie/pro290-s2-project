/**
 * @author jperezbenitez
 * @createdOn 5/2/2024 at 10:29 AM
 * @projectName InventoryService
 * @packageName pro290.perezbenitez.jose.inventoryservice;
 */
package pro290.perezbenitez.jose.inventoryservice.Models;

public class ItemDTO {
    private String title;
    private String description;
    private float price;
    private String category;

    public ItemDTO() {
    }

    public ItemDTO(String title, String description, float price, String category) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
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
