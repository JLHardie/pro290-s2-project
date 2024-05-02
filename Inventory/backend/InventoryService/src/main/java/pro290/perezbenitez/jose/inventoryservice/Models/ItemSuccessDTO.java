/**
 * @author jperezbenitez
 * @createdOn 5/2/2024 at 10:33 AM
 * @projectName InventoryService
 * @packageName pro290.perezbenitez.jose.inventoryservice;
 */
package pro290.perezbenitez.jose.inventoryservice.Models;

import java.util.UUID;

public class ItemSuccessDTO {
    private boolean success;
    private String message;
    private Object itemId;


    public ItemSuccessDTO(boolean success, String message, UUID itemGuid) {
        setSuccess(success);
        setMessage(message);
        setItemId(itemGuid);
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setItemId(UUID itemId) {
        this.itemId = itemId;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public Object getItemId() {
        return itemId;
    }
}
