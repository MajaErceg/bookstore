package com.example.bookstorebackend.repository;

import com.example.bookstorebackend.entity.ArtisticAccessories;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface IArtisticAccessoriesRepository extends MongoRepository<ArtisticAccessories, String> {
    ArtisticAccessories findArtisticAccessoriesById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<ArtisticAccessories> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<ArtisticAccessories> findAllByName(String name);
}
