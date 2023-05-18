package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.ForKids;
import com.example.bookstorebackend.model.ForKidsModel;
import com.example.bookstorebackend.repository.IForKidsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForKidsService implements IForKidsService{
    @Autowired
    private IForKidsRepository forKidsRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<ForKids> findAll() {
        return forKidsRepository.findAll();
    }

    @Override
    public ForKids findForKidsById(String id) {
        return forKidsRepository.findForKidsById(id);
    }

    @Override
    public List<ForKids> findAllByName(String name) {
        return forKidsRepository.findAllByName(name);
    }

    @Override
    public ForKids insert(ForKidsModel model) {
        return forKidsRepository.insert(autoMapperService.map(model, ForKids.class));
    }

    @Override
    public void deleteById(String id) {
    this.forKidsRepository.deleteById(id);
    }

    @Override
    public List<ForKids> findAllBySeller_username(String seller_username) {
        return forKidsRepository.findAllBySeller_username(seller_username);
    }

    @Override
    public ForKids update(ForKidsModel model) {
        ForKids forKids = forKidsRepository.findForKidsById(model.getId());

        forKids.setKids(model.getKids());
        forKids.setName(model.getName());
        forKids.setManufacturer(model.getManufacturer());
        forKids.setPrice(model.getPrice());
        forKids.setDescription(model.getDescription());
        forKids.setImage(model.getImage());

        this.forKidsRepository.save(forKids);

        return autoMapperService.map(model,ForKids.class);
    }
}
