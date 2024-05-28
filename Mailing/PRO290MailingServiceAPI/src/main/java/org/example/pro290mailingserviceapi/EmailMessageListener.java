package org.example.pro290mailingserviceapi;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;

@Component
public class EmailMessageListener {

    private static final Logger log = LoggerFactory.getLogger(EmailMessageListener.class);
    @Autowired
    EmailService emailService;

    @Autowired
    ObjectMapper objectMapper;

    public void receiveMessage(String message) {
        try {
            EmailDetails ed = objectMapper.readValue(message, EmailDetails.class);
            emailService.sendEmail(ed);
        } catch (IOException e) {
            log.error(e.getMessage());
        }
    }
}
