/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 6:02 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.dal;
 */
package pro290.brain.damage.orderservice.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import pro290.brain.damage.orderservice.models.Order;

import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {


}
