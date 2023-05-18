package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.Orders;
import com.example.bookstorebackend.entity.Users;
import com.example.bookstorebackend.model.OrdersModel;
import com.example.bookstorebackend.repository.IOrdersRepository;
import com.example.bookstorebackend.repository.IUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersService implements IOrdersService{
    @Autowired
    private IOrdersRepository ordersRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Autowired
    private IUsersRepository usersRepository;

    @Override
    public List<Orders> findAllByUsername(String username){
        return ordersRepository.findAllByUsername(username);
    }

    @Override
    public Orders insert(OrdersModel model){
        Users user = usersRepository.findAllByUsername(model.getUsername());

        model.setAddress(user.getAddress());
        model.setCity(user.getCity());

        return ordersRepository.insert(autoMapperService.map(model, Orders.class));
    }

    @Override
    public void deleteById(String id){
        this.ordersRepository.deleteById(id);
    }
}
