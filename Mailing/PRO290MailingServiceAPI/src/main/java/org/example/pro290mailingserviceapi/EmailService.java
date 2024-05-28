package org.example.pro290mailingserviceapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailService.class);
    @Autowired
    JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String from;
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    public void produceEmailMessage(EmailDetails ed) {
//        Map<String, String> message = new HashMap<>();
//        message.put("recipient", ed.getRecipient());
//        message.put("subject", ed.getSubject());
//        message.put("body", ed.getBody());
        log.info("Sending Email");
        try {
            String strMessage = objectMapper.writeValueAsString(ed);
            rabbitTemplate.convertAndSend(Pro290MailingServiceApiApplication.topicExchangeName,
                    "foo.bar.baz", strMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendEmail(EmailDetails emailDetails) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(from);
        message.setTo(emailDetails.getRecipient());
        message.setSubject(emailDetails.getSubject());
        message.setText(emailDetails.getBody());

        mailSender.send(message);
    }
}
