/**
 * @author jperezbenitez
 * @createdOn 5/6/2024 at 12:04 PM
 * @projectName UserService
 * @packageName pro290.brain.damage.userservice;
 */
package pro290.brain.damage.userservice.models;

import java.util.UUID;
import jakarta.persistence.*;


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
