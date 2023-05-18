package com.example.bookstorebackend.model;

import lombok.Data;

@Data
public class BooksModel {
    private String id;
    private String book;
    private String name;
    private String type;
    private String author;
    private String publisher;
    private double price;
    private String description;
    private String image;
    private String seller_username;
}
