/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:22 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.models;
 */
package pro290.brain.damage.orderservice.models;

import java.util.ArrayList;
import java.util.List;

public class OrderCreationDTO {
    public Payment payment;
    public List<ItemDTO> items;

    public OrderCreationDTO() {
    }

    public OrderCreationDTO(Payment payment, List<ItemDTO> items) {
        this.payment = payment;
        this.items = items;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public List<ItemDTO> getItems() {
        return items;
    }

    public void setItems(List<ItemDTO> items) {
        this.items = items;
    }

    public List<Item> GetListOfItems(Order order){
        List<Item> newItems = new ArrayList<>();
        for (int index = 0; index < this.items.size(); index++){
            Item item = new Item();
            ItemDTO currentItem = this.items.get(index);
            ItemId itemIdObj = new ItemId(currentItem.getItemId(), order.getOrderId());
            item.setItemId(itemIdObj);
            item.setPlacedOn(order);
            item.setCategory(currentItem.getCategory());
            item.setDescription(currentItem.getDescription());

            item.setTitle(currentItem.getTitle());
            item.setPrice(currentItem.getPrice());
            newItems.add(item);
        }
        return newItems;
    }
}
