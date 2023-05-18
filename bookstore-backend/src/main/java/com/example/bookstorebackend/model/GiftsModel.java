package com.example.bookstorebackend.model;

import lombok.Data;

@Data
public class GiftsModel {
    private String id;
    private String name;
    private String manufacturer;
    private double price;
    private String description;
    private String image;
    private String seller_username;
}
