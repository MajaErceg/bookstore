package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.Gifts;
import com.example.bookstorebackend.model.GiftsModel;
import com.example.bookstorebackend.repository.IGiftsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GiftsService implements IGiftsService {

    @Autowired
    private IGiftsRepository giftsRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<Gifts> findAll() {
        return giftsRepository.findAll();
    }

    @Override
    public Gifts findGiftsById(String id) {
        return giftsRepository.findGiftsById(id);
    }

    @Override
    public List<Gifts> findAllByName(String name) {

        return giftsRepository.findAllByName(name);
    }

    @Override
    public Gifts insert(GiftsModel model) {
        return giftsRepository.insert(autoMapperService.map(model,Gifts.class));
    }

    @Override
    public void deleteById(String id) {
        this.giftsRepository.deleteById(id);
    }

    @Override
    public List<Gifts> findAllBySeller_username(String seller_username) {
        return giftsRepository.findAllBySeller_username(seller_username);
    }

    @Override
    public Gifts update(GiftsModel model) {
        Gifts gift = giftsRepository.findGiftsById(model.getId());
        gift.setName(model.getName());
        gift.setManufacturer(model.getManufacturer());
        gift.setPrice(model.getPrice());
        gift.setDescription(model.getDescription());
        gift.setImage(model.getImage());

        this.giftsRepository.save(gift);

        return autoMapperService.map(model,Gifts.class);
    }
}
