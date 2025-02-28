package com.example.demo.controller;


import com.example.demo.model.Message;
import com.example.demo.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/messages")
public class MessageController {

    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    // POST-запрос для сохранения сообщения
    @PostMapping
    public Message postMessage(@RequestBody Message message) {
        return messageService.saveMessage(message.getUserName(), message.getMessageText());
    }

    // GET-запрос для получения всех сообщений
    @GetMapping
    public List<Message> getMessages() {
        return messageService.getAllMessages();
    }
}