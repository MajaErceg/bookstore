package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.Orders;
import com.example.bookstorebackend.model.OrdersModel;

import java.util.List;

public interface IOrdersService {
    List<Orders> findAllByUsername(String username);
    void deleteById(String id);
    Orders insert(OrdersModel mode);
}
