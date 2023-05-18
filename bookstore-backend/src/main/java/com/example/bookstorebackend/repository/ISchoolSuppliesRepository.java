package com.example.bookstorebackend.repository;


import com.example.bookstorebackend.entity.SchoolSupplies;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ISchoolSuppliesRepository extends MongoRepository<SchoolSupplies, String> {
    SchoolSupplies findSchoolSuppliesById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<SchoolSupplies> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<SchoolSupplies> findAllByName(String name);
}
