/**
 * @author jperezbenitez
 * @createdOn 5/16/2024 at 5:22 PM
 * @projectName OrderService
 * @packageName pro290.brain.damage.orderservice.controllers;
 */
package pro290.brain.damage.orderservice.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pro290.brain.damage.orderservice.dal.ItemRepositoryImplementation;
import pro290.brain.damage.orderservice.dal.OrderRepository;
import pro290.brain.damage.orderservice.models.ApiResponse;
import pro290.brain.damage.orderservice.models.Item;
import pro290.brain.damage.orderservice.models.Order;
import pro290.brain.damage.orderservice.models.OrderCreationDTO;

import java.time.LocalDate;
import java.util.List;
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
    public ApiResponse CreateOrder(HttpServletResponse resp, @PathVariable UUID userId, @RequestBody OrderCreationDTO orderDTO){
        if (LocalDate.now().isBefore(orderDTO.payment.getExpirationDate())) {
            Order order = new Order();
            UUID orderId = UUID.randomUUID();
            order.setOrderId(orderId);
            order.setUserId(userId);
            List<Item> items = orderDTO.GetListOfItems(order);
//            order.setItems(items);
            order.setCreateDate(LocalDate.now());
            itemRepository.AddListOfItems(items, order);
            resp.setStatus(201);
            return new ApiResponse(true, "Order created.", order);
        }
        resp.setStatus(409);
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

    @GetMapping("/user/{userId}")
    public ApiResponse GetOrdersByUserId(HttpServletResponse http, @PathVariable UUID userId){
        List<Order> orders = orderRepository.findByUserId(userId);
        if (orders == null || orders.isEmpty()){
            http.setStatus(404);
            return new ApiResponse(false, "no orders found.", orders);
        }
        return new ApiResponse(true, "Orders found.", orders);
    }

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public ApiResponse GetAllOrders(){
        List<Order> orders = orderRepository.findAll();
        return new ApiResponse(true, "All orders found", orders);
    }
}
