package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.Books;
import com.example.bookstorebackend.model.BooksModel;
import com.example.bookstorebackend.repository.IBooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksService implements IBooksService {

    @Autowired
    private IBooksRepository booksRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<Books> findAll() {
        return booksRepository.findAll();
    }

    @Override
    public Books findBooksById(String id) {

        return booksRepository.findBooksById(id);
    }

    @Override
    public List<Books> findAllByName(String name) {

        return booksRepository.findAllByName(name);
    }

    @Override
    public Books insert(BooksModel model) {

        return booksRepository.insert(autoMapperService.map(model, Books.class));
    }

    @Override
    public void deleteById(String id) {
        this.booksRepository.deleteById(id);
    }

    @Override
    public List<Books> findAllBySeller_username(String seller_username) {
        return booksRepository.findAllBySeller_username(seller_username);
    }

    @Override
    public Books update(BooksModel model) {

        Books book = booksRepository.findBooksById(model.getId());

        book.setBook(model.getBook());
        book.setType(model.getType());
        book.setName(model.getName());
        book.setAuthor(model.getAuthor());
        book.setPublisher(model.getPublisher());
        book.setPrice(model.getPrice());
        book.setDescription(model.getDescription());
        book.setImage(model.getImage());

        this.booksRepository.save(book);
        return autoMapperService.map(model,Books.class);
    }
}
