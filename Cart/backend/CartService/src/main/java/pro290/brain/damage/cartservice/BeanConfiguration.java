/**
 * @author jperezbenitez
 * @createdOn 5/3/2024 at 3:13 PM
 * @projectName CartService
 * @packageName pro290.brain.damage.cartservice;
 */
package pro290.brain.damage.cartservice;


import org.springframework.boot.autoconfigure.data.redis.RedisProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import pro290.brain.damage.cartservice.models.Cart;

@Configuration
@EnableConfigurationProperties(RedisProperties.class)
@EnableRedisRepositories
public class BeanConfiguration {

    @Bean
    public RedisTemplate<String, Cart> redisTemplate(RedisConnectionFactory connectionFactory) {
        RedisTemplate<String, Cart> template = new RedisTemplate<>();
        template.setConnectionFactory(connectionFactory);
        // Add some specific configuration here. Key serializers, etc.
        //System.out.println("i am here");
        return template;
    }
}
