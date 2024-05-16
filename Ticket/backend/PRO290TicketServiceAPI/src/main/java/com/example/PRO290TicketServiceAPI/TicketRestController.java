package com.example.PRO290TicketServiceAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/")
public class TicketRestController {

    @GetMapping("/test")
    @ResponseStatus(code = HttpStatus.I_AM_A_TEAPOT)
    public String test() {
        return "Successful test from TicketRestAPI";
    }

    @Autowired
    TicketRepo repo;

    @GetMapping("/")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Ticket> getTickets() {
        return repo.findAll();
    }

    @GetMapping("/{ticketId}")
    @ResponseStatus(code = HttpStatus.OK)
    public Ticket getTicket(@PathVariable UUID ticketId) {
        return repo.findById(ticketId).get();
    }

    @GetMapping("/customer/{customerId}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Ticket> getTicketsByCustomer(@PathVariable UUID customerId) {
        return repo.findByCustomerId(customerId);
    }

    @PostMapping("/")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public Ticket createTicket(@RequestBody Ticket ticket) {
        ticket.setTicketId(UUID.randomUUID());
        ticket.setOpenDate(LocalDate.now());
        return repo.save(ticket);
    }

    @PutMapping("/{ticketId}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public Ticket updateTicket(@PathVariable UUID ticketId, @RequestBody Ticket ticket) {
        if (ticket.getTicketId().equals(ticketId)) {
            return repo.save(ticket);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{ticketId}")
    @ResponseStatus(code = HttpStatus.OK)
    public void deleteTicket(@PathVariable UUID ticketId) {
        repo.deleteById(ticketId);
    }
}
