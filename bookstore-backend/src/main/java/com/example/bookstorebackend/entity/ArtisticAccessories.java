package com.example.bookstorebackend.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "artistic_accessories")

public class ArtisticAccessories {
    @Id
    private String id;
    @Field("accessory")
    private String accessory;
    @Field("name")
    private String name;
    @Field("manufacturer")
    private String manufacturer;
    @Field("price")
    private double price;
    @Field("description")
    private String description;
    @Field("image")
    private String image;
    @Field("seller_username")
    private String seller_username;
}
