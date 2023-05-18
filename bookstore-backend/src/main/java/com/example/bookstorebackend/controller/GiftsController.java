package com.example.bookstorebackend.controller;

import com.example.bookstorebackend.entity.Gifts;
import com.example.bookstorebackend.model.GiftsModel;
import com.example.bookstorebackend.service.GiftsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("gifts")
public class GiftsController {

    @Autowired
    private GiftsService giftsService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<Gifts> findAll(){
        return giftsService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public Gifts findGiftsById(@PathVariable("id") String id){
        return this.giftsService.findGiftsById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<Gifts> findAllByName(@PathVariable("name") String name){

        return  giftsService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Gifts insert(@RequestBody GiftsModel model){
        return giftsService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.giftsService.deleteById(id);
    }

    @GetMapping("mygifts/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<Gifts> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return giftsService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Gifts update(@RequestBody GiftsModel model){
        return giftsService.update(model);
    }
}
