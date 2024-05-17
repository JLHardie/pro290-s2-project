/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:22 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.models;
 */
package pro290.brain.damage.orderservice.models;

import java.util.List;

public class OrderCreationDTO {
    public Payment payment;
    public List<Item> items;

    public OrderCreationDTO() {
    }

    public OrderCreationDTO(Payment payment, List<Item> items) {
        this.payment = payment;
        this.items = items;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
