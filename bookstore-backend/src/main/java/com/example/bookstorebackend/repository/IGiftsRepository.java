package com.example.bookstorebackend.repository;

import com.example.bookstorebackend.entity.Gifts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface IGiftsRepository extends MongoRepository<Gifts, String> {
    Gifts findGiftsById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<Gifts> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<Gifts> findAllByName(String name);

}
