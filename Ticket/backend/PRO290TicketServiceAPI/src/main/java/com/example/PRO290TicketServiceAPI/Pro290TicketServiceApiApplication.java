package com.example.PRO290TicketServiceAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class Pro290TicketServiceApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(Pro290TicketServiceApiApplication.class, args);
	}

}
