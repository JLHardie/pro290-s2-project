package org.example.pro290mailingserviceapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "")
public class EmailRestController {
    @Autowired
    private EmailService emailService;

    @GetMapping("/test")
    public String test() {
        return "This is a test from the emailing service";
    }

    @PostMapping("")
    public void sendEmail(@RequestBody EmailDetails emailDetails) {
        emailService.sendEmail(emailDetails);
    }
}
