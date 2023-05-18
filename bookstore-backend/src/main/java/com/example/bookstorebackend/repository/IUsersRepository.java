package com.example.bookstorebackend.repository;

import com.example.bookstorebackend.entity.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IUsersRepository extends MongoRepository<Users, String> {
    Users findByUsername(String username);
    Users findByEmail(String email);

    Users findAllByUsername(String username);
}
