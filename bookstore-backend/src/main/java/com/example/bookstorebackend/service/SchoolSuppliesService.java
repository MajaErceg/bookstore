package com.example.bookstorebackend.service;


import com.example.bookstorebackend.entity.SchoolSupplies;
import com.example.bookstorebackend.model.SchoolSuppliesModel;
import com.example.bookstorebackend.repository.ISchoolSuppliesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolSuppliesService implements ISchoolSuppliesService {
    @Autowired
    private ISchoolSuppliesRepository schoolSuppliesRepository ;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<SchoolSupplies> findAll() {

        return schoolSuppliesRepository.findAll();
    }

    @Override
    public SchoolSupplies findSchoolSuppliesById(String id) {
        return schoolSuppliesRepository.findSchoolSuppliesById(id);
    }

    @Override
    public List<SchoolSupplies> findAllByName(String name) {

        return schoolSuppliesRepository.findAllByName(name);
    }

    @Override
    public SchoolSupplies insert(SchoolSuppliesModel model) {
        return schoolSuppliesRepository.insert(autoMapperService.map(model, SchoolSupplies.class));
    }

    @Override
    public void deleteById(String id) {
        this.schoolSuppliesRepository.deleteById(id);
    }

    @Override
    public List<SchoolSupplies> findAllBySeller_username(String seller_username) {
        return schoolSuppliesRepository.findAllBySeller_username(seller_username);
    }

    @Override
    public SchoolSupplies update(SchoolSuppliesModel model) {
        SchoolSupplies schoolSupplies = schoolSuppliesRepository.findSchoolSuppliesById(model.getId());

        schoolSupplies.setSchool_supplies(model.getSchool_supplies());
        schoolSupplies.setName(model.getName());
        schoolSupplies.setManufacturer(model.getManufacturer());
        schoolSupplies.setPrice(model.getPrice());
        schoolSupplies.setDescription(model.getDescription());
        schoolSupplies.setImage(model.getImage());

        return autoMapperService.map(model, SchoolSupplies.class);
    }


}
