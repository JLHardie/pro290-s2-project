/**
 * @author jperezbenitez
 * @createdOn 5/6/2024 at 12:26 PM
 * @projectName UserService
 * @packageName pro290.brain.damage.userservice.models;
 */
package pro290.brain.damage.orderservice.models;


public class ApiResponse {
    private boolean success;
    private String message;
    private Object body;

    public ApiResponse(boolean success, String message, Object body) {
        this.success = success;
        this.message = message;
        this.body = body;
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

    public Object getBody() {
        return body;
    }

    public void setBody(Object body) {
        this.body = body;
    }
}