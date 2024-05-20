package org.example.pro290mailingserviceapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String from;

    public void sendEmail(EmailDetails emailDetails) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(from);
        message.setTo(emailDetails.getRecipient());
        message.setSubject(emailDetails.getSubject());
        message.setText(emailDetails.getBody());

        mailSender.send(message);
    }
}
