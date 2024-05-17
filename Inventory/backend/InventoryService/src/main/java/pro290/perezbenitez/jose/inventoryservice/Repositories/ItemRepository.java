package pro290.perezbenitez.jose.inventoryservice.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import pro290.perezbenitez.jose.inventoryservice.Models.Item;

import java.util.List;
import java.util.UUID;

public interface ItemRepository extends MongoRepository<Item, UUID> {
    List<Item> findByCategoryLikeIgnoreCaseOrDescriptionLikeIgnoreCaseOrTitleLikeIgnoreCase(String category, String description, String title);
}
