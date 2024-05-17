package pro290.brain.damage.orderservice.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import pro290.brain.damage.orderservice.models.Users;

import java.util.UUID;

public interface UserRepository extends JpaRepository<Users, UUID> {

    Users findByUsername(String username);
}
