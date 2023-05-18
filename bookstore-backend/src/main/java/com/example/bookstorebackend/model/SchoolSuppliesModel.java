package com.example.bookstorebackend.model;

import lombok.Data;

@Data
public class SchoolSuppliesModel {
    private String id;
    private String school_supplies;
    private String name;
    private String manufacturer;
    private double price;
    private String description;
    private String image;
    private String seller_username;
}
