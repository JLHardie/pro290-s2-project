/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 6:44 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.dal;
 */
package pro290.brain.damage.orderservice.dal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pro290.brain.damage.orderservice.models.*;

import java.util.List;

@Service
public class ItemRepositoryImplementation {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ItemRepository itemRepository;

    public void AddListOfItems(List<Item> items, Order order){
        itemRepository.saveAll(items);
        for (Item item : items) {
            item.setPlacedOn(order);
        }
        orderRepository.save(order);
        itemRepository.saveAll(items);
    }
}
