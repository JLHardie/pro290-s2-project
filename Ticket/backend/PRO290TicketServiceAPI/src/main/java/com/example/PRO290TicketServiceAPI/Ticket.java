package com.example.PRO290TicketServiceAPI;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.data.annotation.Id;

public class Ticket {
    @Id
    private String ticketId;
    private String customerId;
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

    public String getCustomerId() {
        return customerId;
    }
    public void setCustomerId(String customerId) {
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

    public String getTicketId() {
        return ticketId;
    }
    public void setTicketId(String ticketId) {
        this.ticketId = ticketId;
    }
}
