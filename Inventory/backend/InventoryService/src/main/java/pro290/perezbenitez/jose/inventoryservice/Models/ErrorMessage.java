/**
 * @author jperezbenitez
 * @createdOn 5/2/2024 at 10:59 AM
 * @projectName InventoryService
 * @packageName pro290.perezbenitez.jose.inventoryservice.Models;
 */
package pro290.perezbenitez.jose.inventoryservice.Models;

public class ErrorMessage {
    private boolean success;
    private String message;

    public ErrorMessage(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public ErrorMessage() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
