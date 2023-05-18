package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.Books;
import com.example.bookstorebackend.model.BooksModel;

import java.util.List;

public interface IBooksService {
    List<Books> findAll();
    Books findBooksById(String id);
    List<Books> findAllByName(String name);
    Books insert(BooksModel model);
    void deleteById(String id);
    List<Books> findAllBySeller_username(String seller_username);
    Books update(BooksModel model);
}
