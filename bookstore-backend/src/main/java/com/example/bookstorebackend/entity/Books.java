package com.example.bookstorebackend.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "books")
public class Books {
    @Id
    private String id;
    @Field("book")
    private String book;
    @Field("name")
    private String name;
    @Field("type")
    private String type;
    @Field("author")
    private String author;
    @Field("publisher")
    private String publisher;
    @Field("price")
    private double price;
    @Field("description")
    private String description;
    @Field("image")
    private String image;
    @Field("seller_username")
    private String seller_username;


}
