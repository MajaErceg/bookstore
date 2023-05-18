package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.Gifts;
import com.example.bookstorebackend.model.GiftsModel;

import java.util.List;

public interface IGiftsService {
    List<Gifts> findAll();
    Gifts findGiftsById(String id);
    List<Gifts> findAllByName(String name);
    Gifts insert(GiftsModel model);
    void deleteById(String id);
    List<Gifts> findAllBySeller_username(String seller_username);
    Gifts update(GiftsModel model);
}
