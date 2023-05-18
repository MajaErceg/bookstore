package com.example.bookstorebackend.repository;

import com.example.bookstorebackend.entity.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface IOrdersRepository extends MongoRepository<Orders, String> {
    List<Orders> findAllByUsername(String username);
}
