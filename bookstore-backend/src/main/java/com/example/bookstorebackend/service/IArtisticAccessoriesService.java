package com.example.bookstorebackend.service;



import com.example.bookstorebackend.entity.ArtisticAccessories;
import com.example.bookstorebackend.model.ArtisticAccessoriesModel;

import java.util.List;

public interface IArtisticAccessoriesService {
    List<ArtisticAccessories> findAll();
    ArtisticAccessories findArtisticAccessoriesById(String id);
    List<ArtisticAccessories> findAllByName(String name);
    ArtisticAccessories insert(ArtisticAccessoriesModel model);
    void deleteById(String id);
    List<ArtisticAccessories> findAllBySeller_username(String seller_username);
    ArtisticAccessories update(ArtisticAccessoriesModel model);
}
