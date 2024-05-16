/**
 * @author jperezbenitez
 * @createdOn 5/6/2024 at 1:56 PM
 * @projectName UserService
 * @packageName pro290.brain.damage.userservice.configurations;
 */
package pro290.brain.damage.userservice.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pro290.brain.damage.userservice.dal.UserRepository;
import pro290.brain.damage.userservice.models.Users;

import java.util.ArrayList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepo.findByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException("User not found");
        }
        return new org.springframework.security.core.userdetails
                .User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }
}
