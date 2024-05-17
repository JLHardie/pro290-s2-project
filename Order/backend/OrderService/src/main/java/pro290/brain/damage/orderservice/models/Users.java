/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:30 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.models;
 */
package pro290.brain.damage.orderservice.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class Users {

    @Id
    private UUID userId;
    private String username;
    private String password;
    private String email;

    public Users(UUID userId, String username, String password, String email) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public Users() {

    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
