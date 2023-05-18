package com.example.bookstorebackend.controller;

import com.example.bookstorebackend.entity.ArtisticAccessories;
import com.example.bookstorebackend.model.ArtisticAccessoriesModel;
import com.example.bookstorebackend.service.ArtisticAccessoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("artisticAccessories")
public class ArtisticAccessoriesController {

    @Autowired
    private ArtisticAccessoriesService artisticAccessoriesService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<ArtisticAccessories> findAll(){
        return artisticAccessoriesService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public ArtisticAccessories findArtisticAccessoriesById(@PathVariable("id") String id){
        return this.artisticAccessoriesService.findArtisticAccessoriesById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<ArtisticAccessories> findAllByName(@PathVariable("name") String name){
        return  artisticAccessoriesService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public ArtisticAccessories insert(@RequestBody ArtisticAccessoriesModel model){
        return artisticAccessoriesService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.artisticAccessoriesService.deleteById(id);
    }

    @GetMapping("myaccessories/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<ArtisticAccessories> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return artisticAccessoriesService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public ArtisticAccessories update(@RequestBody ArtisticAccessoriesModel model){
        return artisticAccessoriesService.update(model);
    }

}
