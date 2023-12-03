package com.example.yourjourneybackend.Services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.yourjourneybackend.Entities.CartItem;
import com.example.yourjourneybackend.Entities.User;
import com.example.yourjourneybackend.Respositories.UserRepository;

@Component
public class UserService {
    @Autowired
    private UserRepository userrepo;


    public Optional<User> getUser(String id){

        return  userrepo.findById(id);
    }

    public String addUser( String id,  List<CartItem> CartItem){

        userrepo.insert( new User(id,CartItem));

        return "user creatd";
    }


    public User updateUser(String id,  List<CartItem> CartItem){

        Optional <User> optionalUser = userrepo.findById(id);

        if (optionalUser.isPresent()) {
            User userToUpdate = optionalUser.get();

            // Update the fields that need to be changed
           
            userToUpdate.setCart(CartItem);
            // Update other fields as needed

            // Save the updated user back to the repository
            return userrepo.save(userToUpdate);

        } else {
            // Handle case when user with given ID doesn't exist
            // You may throw an exception, return null, or handle it as needed
            return null;
        }
    }



    
}
