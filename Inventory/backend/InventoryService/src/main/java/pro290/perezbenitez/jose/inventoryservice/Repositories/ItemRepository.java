package pro290.perezbenitez.jose.inventoryservice.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import pro290.perezbenitez.jose.inventoryservice.Models.Item;

import java.util.UUID;

public interface ItemRepository extends MongoRepository<Item, UUID> {
}
