package com.example.PRO290TicketServiceAPI;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.data.annotation.Id;

public class Ticket {
    @Id
    private UUID ticketId;
    private UUID customerId;
    private String issue;
    private String status;
    private String notes = "";
    private LocalDate openDate;

    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }

    public UUID getCustomerId() {
        return customerId;
    }
    public void setCustomerId(UUID customerId) {
        this.customerId = customerId;
    }

    public String getIssue() {
        return issue;
    }
    public void setIssue(String issue) {
        this.issue = issue;
    }

    public LocalDate getOpenDate() {
        return openDate;
    }
    public void setOpenDate(LocalDate openDate) {
        this.openDate = openDate;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public UUID getTicketId() {
        return ticketId;
    }
    public void setTicketId(UUID ticketId) {
        this.ticketId = ticketId;
    }
}
