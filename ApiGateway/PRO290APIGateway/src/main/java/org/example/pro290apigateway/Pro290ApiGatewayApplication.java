package org.example.pro290apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@EnableDiscoveryClient
@SpringBootApplication
public class Pro290ApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(Pro290ApiGatewayApplication.class, args);
    }

    @Bean
    public RouteLocator customRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("ticketService", r -> r.path("/ticketService/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://PRO290TICKETSERVICEAPI"))
                .route("mailService", r -> r.path("/mailService/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://PRO290MAILINGSERVICEAPI"))
                .route("inventoryService", r -> r.path("/inventoryService/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://PRO290INVENTORYSERVICEAPI"))
                .route("cartService", r -> r.path("/cartService/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://PRO290CARTSERVICEAPI"))     
                .route("userService", r -> r.path("/userService/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://PRO290USERSERVICEAPI"))
                .route("orderService", r -> r.path("/orderService/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://PRO290ORDERSERVICEAPI"))
                .build();
    }

}
