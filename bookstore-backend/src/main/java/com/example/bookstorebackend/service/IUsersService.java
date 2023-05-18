package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.Users;
import com.example.bookstorebackend.model.UsersModel;

public interface IUsersService {
    Users insert(UsersModel model);
    Users update(UsersModel model);
    Users findByUsername(String username);



}
