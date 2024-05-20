package org.example.pro290mailingserviceapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class Pro290MailingServiceApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(Pro290MailingServiceApiApplication.class, args);
	}

}
