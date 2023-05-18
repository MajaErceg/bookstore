package com.example.bookstorebackend.model;

import lombok.Data;

@Data
public class ForKidsModel {
    private String id;
    private String kids;
    private String name;
    private String manufacturer;
    private double price;
    private String description;
    private String image;
    private String seller_username;
}
