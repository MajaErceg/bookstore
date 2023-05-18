package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.SchoolSupplies;
import com.example.bookstorebackend.model.SchoolSuppliesModel;

import java.util.List;

public interface ISchoolSuppliesService {
    List<SchoolSupplies> findAll();
    SchoolSupplies findSchoolSuppliesById(String id);
    List<SchoolSupplies> findAllByName(String name);
    SchoolSupplies insert(SchoolSuppliesModel model);
    void deleteById(String id);
    List<SchoolSupplies> findAllBySeller_username(String seller_username);
    SchoolSupplies update(SchoolSuppliesModel model);
}
