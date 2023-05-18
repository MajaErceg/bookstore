package com.example.bookstorebackend.model;

import lombok.Data;

import java.util.List;

@Data
public class OrdersModel {
    private String id;
    private String username;
    private String city;
    private String address;
    private String payment;
    private double price;
    private List<Object> items;
}
