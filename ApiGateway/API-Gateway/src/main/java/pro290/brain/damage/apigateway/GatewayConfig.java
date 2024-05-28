/**
 * @author jperezbenitez
 * @createdOn 5/23/2024 at 4:55 PM
 * @projectName API-Gateway
 * @packageName pro290.brain.damage.apigateway;
 */
package pro290.brain.damage.apigateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.util.pattern.PathPatternParser;

import java.util.Arrays;
import java.util.List;

@Configuration
public class GatewayConfig {

    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOriginPatterns(List.of("*"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "DELETE", "PUT", "PATCH"));
        config.setAllowedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(new PathPatternParser());
        source.registerCorsConfiguration("/**", config);

        return new CorsWebFilter(source);
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
