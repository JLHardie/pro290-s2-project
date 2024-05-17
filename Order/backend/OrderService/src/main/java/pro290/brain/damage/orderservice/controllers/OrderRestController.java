/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:22 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.controllers;
 */
package pro290.brain.damage.orderservice.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pro290.brain.damage.orderservice.dal.ItemRepository;
import pro290.brain.damage.orderservice.dal.ItemRepositoryImplementation;
import pro290.brain.damage.orderservice.dal.OrderRepository;
import pro290.brain.damage.orderservice.models.ApiResponse;
import pro290.brain.damage.orderservice.models.Order;
import pro290.brain.damage.orderservice.models.OrderCreationDTO;

import java.time.LocalDate;
import java.util.UUID;

@RestController
@RequestMapping(path = "")
public class OrderRestController {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ItemRepositoryImplementation itemRepository;

    @GetMapping("/test")
    public String test() {
        return "This is a test.";
    }

    @PostMapping(path = "/{userId}")
    public ApiResponse CreateOrder(@PathVariable UUID userId, @RequestBody OrderCreationDTO orderDTO){
        if (LocalDate.now().isBefore(orderDTO.payment.getExpirationDate())) {
            Order order = new Order();
            order.setOrderId(UUID.randomUUID());
            order.setUserId(userId);
            order.setItems(orderDTO.getItems());
            order.setCreateDate(LocalDate.now());
            itemRepository.AddListOfItems(orderDTO.getItems(), order);
            return new ApiResponse(true, "Order created.", order);
        }
        return new ApiResponse(false, "Payment expired.", null);
    }

    @GetMapping(path = "/{orderId}")
    public ApiResponse GetOrderById(HttpServletResponse resp, @PathVariable UUID orderId){
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order == null){
            resp.setStatus(404);
            return new ApiResponse(false, "No order found with that id.", null);
        }
        return new ApiResponse(true, "Order found.", order);
    }
}
