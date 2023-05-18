package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.ArtisticAccessories;
import com.example.bookstorebackend.model.ArtisticAccessoriesModel;
import com.example.bookstorebackend.repository.IArtisticAccessoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtisticAccessoriesService implements IArtisticAccessoriesService{
    @Autowired
    private IArtisticAccessoriesRepository artisticAccessoriesRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<ArtisticAccessories> findAll() {
        return artisticAccessoriesRepository.findAll();
    }

    @Override
    public ArtisticAccessories findArtisticAccessoriesById(String id) {
        return artisticAccessoriesRepository.findArtisticAccessoriesById(id);
    }

    @Override
    public List<ArtisticAccessories> findAllByName(String name) {
        return artisticAccessoriesRepository.findAllByName(name);
    }

    @Override
    public ArtisticAccessories insert(ArtisticAccessoriesModel model) {
        return artisticAccessoriesRepository.insert(autoMapperService.map(model, ArtisticAccessories.class));
    }

    @Override
    public void deleteById(String id) {
        this.artisticAccessoriesRepository.deleteById(id);
    }

    @Override
    public List<ArtisticAccessories> findAllBySeller_username(String seller_username) {
        return artisticAccessoriesRepository.findAllBySeller_username(seller_username);
    }

    @Override
    public ArtisticAccessories update(ArtisticAccessoriesModel model) {
        ArtisticAccessories artisticAccessories = artisticAccessoriesRepository.findArtisticAccessoriesById(model.getId());

        artisticAccessories.setAccessory(model.getAccessory());
        artisticAccessories.setName(model.getName());
        artisticAccessories.setManufacturer(model.getManufacturer());
        artisticAccessories.setPrice(model.getPrice());
        artisticAccessories.setDescription(model.getDescription());
        artisticAccessories.setImage(model.getImage());

        return autoMapperService.map(model, ArtisticAccessories.class);
    }


}
