package com.example.bookstorebackend.service;

public interface IAutoMapperService {
    <T> T map(Object model, Class<T> entity);
}
