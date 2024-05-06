/**
 * @author jperezbenitez
 * @createdOn 5/6/2024 at 12:04 PM
 * @projectName UserService
 * @packageName pro290.brain.damage.userservice;
 */
package pro290.brain.damage.userservice.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pro290.brain.damage.userservice.dal.UserRepository;
import pro290.brain.damage.userservice.models.*;

import java.util.UUID;

@RestController
@RequestMapping(path = "/")
public class UserRestController {

    @Autowired
    UserRepository userRepo;
    @Autowired
    public PasswordEncoder passwordEncoder;

    @GetMapping(path = "/test")
    @ResponseStatus(HttpStatus.I_AM_A_TEAPOT)
    public String Test() {
        return "this is a test, you are in a test, you are the test";
    }

    @PostMapping(path = "")
    public ApiResponse CreateUser(HttpServletResponse resp, @RequestBody Users user) {
        try {
            Users found = userRepo.findByUsername(user.getUsername());
            if (found != null) {
                resp.setStatus(409);
                return new ApiResponse(false, "Username already exists.", null);
            }
            found = userRepo.findByEmail(user.getEmail());
            if (found != null) {
                resp.setStatus(409);
                return new ApiResponse(false, "Email already exists.", null);
            }
            user.setUserId(UUID.randomUUID());
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepo.save(user);
            resp.setStatus(201);
            return new ApiResponse(true, "User created.", user);
        } catch (Exception e) {
            resp.setStatus(500);
            return new ApiResponse(false, "Failed to access database.", null);
        }
    }

    @GetMapping(path = "/{userId}")
    public ApiResponse GetById(HttpServletResponse resp, @PathVariable UUID userId) {
        try {
            Users user = userRepo.findById(userId).orElse(null);
            if (user == null) {
                resp.setStatus(404);
                return new ApiResponse(false, "No user found with that id.", null);
            }
            resp.setStatus(200);
            return new ApiResponse(true, "User found.", user);
        } catch (Exception e) {
            resp.setStatus(500);
            return new ApiResponse(false, "Failed to access database.", null);
        }
    }


    @GetMapping(path = "/username/{username}")
    public Users GetByUsername(@PathVariable String username) {
        return userRepo.findByUsername(username);
    }

    @PutMapping(path = "/{userId}")
    public ApiResponse UpdateUserById(HttpServletResponse resp, @PathVariable UUID userId, @RequestBody Users replacement) {
        try {
            Users found = userRepo.findById(userId).orElse(null);
            if (found == null) {
                resp.setStatus(404);
                return new ApiResponse(false, "No user found with that id.", null);
            }
            replacement.setUserId(userId);
            replacement.setPassword(found.getPassword());
            userRepo.save(replacement);
            resp.setStatus(204);
            return null;
        } catch (Exception e) {
            resp.setStatus(500);
            return new ApiResponse(false, "Failed to access database.", null);
        }
    }

    @DeleteMapping(path = "/{userId}")
    public ApiResponse DeleteUserById(HttpServletResponse resp, @PathVariable UUID userId) {
        try {
            Users found = userRepo.findById(userId).orElse(null);
            if (found == null) {
                resp.setStatus(404);
                return new ApiResponse(false, "No user found with that id.", null);
            }
            userRepo.deleteById(userId);
            resp.setStatus(204);
            return null;
        } catch (Exception e) {
            resp.setStatus(500);
            return new ApiResponse(false, "Failed to access database.", null);
        }
    }
}
