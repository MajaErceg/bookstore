package com.example.bookstorebackend.controller;

import com.example.bookstorebackend.entity.SchoolSupplies;
import com.example.bookstorebackend.model.SchoolSuppliesModel;;
import com.example.bookstorebackend.service.SchoolSuppliesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("schoolSupplies")
public class SchoolSuppliesController {
    @Autowired
    private SchoolSuppliesService schoolSuppliesService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<SchoolSupplies> findAll(){
        return schoolSuppliesService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public SchoolSupplies findAdditionalEquipmentById(@PathVariable("id") String id){
        return this.schoolSuppliesService.findSchoolSuppliesById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<SchoolSupplies> findAllByName(@PathVariable("name") String name){
        return  schoolSuppliesService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public SchoolSupplies insert(@RequestBody SchoolSuppliesModel model){
        return schoolSuppliesService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.schoolSuppliesService.deleteById(id);
    }

    @GetMapping("mysupplies/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<SchoolSupplies> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return schoolSuppliesService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public SchoolSupplies update(@RequestBody SchoolSuppliesModel model){
        return schoolSuppliesService.update(model);
    }
}
