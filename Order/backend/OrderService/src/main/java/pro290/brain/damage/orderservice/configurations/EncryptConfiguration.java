/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:27 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.configurations;
 */
package pro290.brain.damage.orderservice.configurations;


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