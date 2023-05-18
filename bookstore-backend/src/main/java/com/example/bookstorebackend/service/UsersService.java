package com.example.bookstorebackend.service;

import com.example.bookstorebackend.entity.Users;
import com.example.bookstorebackend.model.UsersModel;
import com.example.bookstorebackend.repository.IUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UsersService implements IUsersService, UserDetailsService {
    @Autowired
    private IUsersRepository usersRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private AutoMapperService autoMapperService;


    @Override
    public Users findByUsername(String username){

        return usersRepository.findByUsername(username);
    }

    @Override
    public Users insert(UsersModel model){

        model.setEmail(validateEmail(model.getEmail()));
        model.setPassword(validatePassword(model.getPassword()));
        model.setUsername(validateUsername(model.getUsername()));

        if (model.getPassword() != null) {
            model.setPassword(bCryptPasswordEncoder.encode(model.getPassword()));
        }

        if (model.getEmail() == null || model.getUsername() == null || model.getPassword() == null){
            return null;
        }else {
            return usersRepository.insert(autoMapperService.map(model, Users.class));
        }
    }


    @Override
    public Users update(UsersModel model){
        Users user = usersRepository.findByUsername(model.getUsername());

        user.setAddress(model.getAddress());
        user.setCity(model.getCity());

        this.usersRepository.save(user);

        return autoMapperService.map(model, Users.class);
    }

    public String validateEmail(String email){
        Pattern pattern = Pattern.compile("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(email);
        boolean matchFound = matcher.find();

        Users user = usersRepository.findByEmail(email);

        if(matchFound && user == null) {
            return email;
        } else {
            return null;
        }
    }

    public String validatePassword(String password){
        if (password.length() < 8){
            return null;
        }else
            return password;
    }

    public String validateUsername(String username){
        Users user = usersRepository.findByUsername(username);

        if(user == null){
            return username;
        }else{
            return null;
        }
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return findByUsername(s);
    }
}
