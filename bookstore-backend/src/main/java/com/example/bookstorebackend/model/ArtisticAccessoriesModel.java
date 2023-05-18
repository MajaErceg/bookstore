package com.example.bookstorebackend.model;

import lombok.Data;

@Data
public class ArtisticAccessoriesModel {

    private String id;
    private String accessory;
    private String name;
    private String manufacturer;
    private double price;
    private String description;
    private String image;
    private String seller_username;
}
