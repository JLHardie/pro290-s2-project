package com.example.PRO290TicketServiceAPI;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface TicketRepo extends MongoRepository<Ticket, String> {
    List<Ticket> findByCustomerId(String customerId);
}
