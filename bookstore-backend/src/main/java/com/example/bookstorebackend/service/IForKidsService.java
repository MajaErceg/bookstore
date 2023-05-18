package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.ForKids;
import com.example.bookstorebackend.model.ForKidsModel;

import java.util.List;

public interface IForKidsService {
    List<ForKids> findAll();
    ForKids findForKidsById(String id);
    List<ForKids> findAllByName(String name);
    ForKids insert(ForKidsModel model);
    void deleteById(String id);
    List<ForKids> findAllBySeller_username(String seller_username);
    ForKids update(ForKidsModel model);
}
