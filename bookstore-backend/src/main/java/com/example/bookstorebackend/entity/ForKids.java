package com.example.bookstorebackend.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Data
@Document(collection = "for_kids")
public class ForKids {
    @Id
    private String id;
    @Field("kids")
    private String kids;
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
