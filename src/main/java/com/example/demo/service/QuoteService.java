package com.example.demo.service;

import com.example.demo.model.Quote;
import com.example.demo.repository.QuoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class QuoteService {

    private final QuoteRepository quoteRepository;
    private final Random random = new Random();

    public QuoteService(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    public String getRandomQuote() {
        List<Quote> quotes = quoteRepository.findAll();
        if (quotes.isEmpty()) {
            return "Quotes not found!";
        }
        int randomIndex = random.nextInt(quotes.size());
        return quotes.get(randomIndex).getText();
    }
}
