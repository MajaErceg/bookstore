package com.example.bookstorebackend.repository;

import com.example.bookstorebackend.entity.ForKids;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface IForKidsRepository extends MongoRepository<ForKids, String> {
    ForKids findForKidsById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<ForKids> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<ForKids> findAllByName(String name);
}
