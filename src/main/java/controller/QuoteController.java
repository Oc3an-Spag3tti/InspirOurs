package controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api/quotes")
public class QuoteController {

    private static final List<String> QUOTES = List.of(
            "Ne baisse jamais les bras, le succès est proche !",
            "L'échec est juste une leçon déguisée.",
            "Tu es plus fort que tu ne le penses.",
            "Un pas à la fois, mais continue d'avancer."
    );

    private final Random random = new Random();

    @GetMapping
    public String getRandomQuote() {
        int index = random.nextInt(QUOTES.size());
        return QUOTES.get(index);
    }
}
