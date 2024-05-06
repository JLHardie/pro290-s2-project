/**
 * @author jperezbenitez
 * @createdOn 5/6/2024 at 12:34 PM
 * @projectName UserService
 * @packageName pro290.brain.damage.userservice.configurations;
 */
package pro290.brain.damage.userservice.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class EncryptConfiguration {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
