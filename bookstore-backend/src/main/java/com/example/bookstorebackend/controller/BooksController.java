package com.example.bookstorebackend.controller;

import com.example.bookstorebackend.entity.Books;
import com.example.bookstorebackend.model.BooksModel;
import com.example.bookstorebackend.service.BooksService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("books")
public class BooksController {

    @Autowired
    private BooksService booksService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<Books> findAll(){
        return booksService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public Books findBooksById(@PathVariable("id") String id){
        return this.booksService.findBooksById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<Books> findAllByName(@PathVariable("name") String name){
        return booksService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Books insert(@RequestBody BooksModel model){
        return booksService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.booksService.deleteById(id);
    }

    @GetMapping("mybooks/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<Books> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return booksService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Books update(@RequestBody BooksModel model){
        return booksService.update(model);
    }
}
