package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private String messageText;
    private LocalDateTime datePosted;

    public Message() {}

    public Message(String userName, String messageText, LocalDateTime datePosted) {
        this.userName = userName;
        this.messageText = messageText;
        this.datePosted = datePosted;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getMessageText() {
        return messageText;
    }

    public LocalDateTime getDatePosted() {
        return datePosted;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public void setDatePosted(LocalDateTime datePosted) {
        this.datePosted = datePosted;
    }
}
