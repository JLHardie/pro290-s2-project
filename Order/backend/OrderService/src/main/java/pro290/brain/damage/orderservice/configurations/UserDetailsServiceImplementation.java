/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:28 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.configurations;
 */
package pro290.brain.damage.orderservice.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pro290.brain.damage.orderservice.dal.UserRepository;
import pro290.brain.damage.orderservice.models.Users;

import java.util.ArrayList;

@Service
public class UserDetailsServiceImplementation implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepository.findByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException("User not found with that username");
        }
        return new org.springframework.security.core.userdetails
                .User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }
}
