package com.example.bookstorebackend.controller;

import com.example.bookstorebackend.entity.ForKids;
import com.example.bookstorebackend.model.ForKidsModel;
import com.example.bookstorebackend.service.ForKidsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("forKids")
public class ForKidsController {

    @Autowired
    private ForKidsService forKidsService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<ForKids> findAll(){
        return forKidsService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public ForKids findForKidsById(@PathVariable("id") String id){
        return this.forKidsService.findForKidsById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<ForKids> findAllByName(@PathVariable("name") String name){
        return  forKidsService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public ForKids insert(@RequestBody ForKidsModel model){
        return forKidsService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.forKidsService.deleteById(id);
    }

    @GetMapping("myfor-kids/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<ForKids> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return forKidsService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public ForKids update(@RequestBody ForKidsModel model){
        return forKidsService.update(model);
    }
}
