package com.example.demo.controller;

import com.example.demo.service.QuoteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuoteController {

    private final QuoteService quoteService;

    public QuoteController(QuoteService quoteService) {
        this.quoteService = quoteService;
    }

    @GetMapping("/random-quote")
    public String getRandomQuote() {
        return quoteService.getRandomQuote();
    }
}