package pro290.brain.damage.orderservice.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import pro290.brain.damage.orderservice.models.Item;

import java.util.UUID;

public interface ItemRepository extends JpaRepository<Item, UUID> {

}
