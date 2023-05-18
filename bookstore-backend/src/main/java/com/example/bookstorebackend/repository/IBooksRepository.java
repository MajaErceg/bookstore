package com.example.bookstorebackend.repository;

import com.example.bookstorebackend.entity.Books;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface IBooksRepository extends MongoRepository<Books, String> {
    Books findBooksById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<Books> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<Books> findAllByName(String name);
}
