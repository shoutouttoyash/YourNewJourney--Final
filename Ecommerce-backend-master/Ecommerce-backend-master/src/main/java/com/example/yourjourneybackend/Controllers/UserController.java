package com.example.yourjourneybackend.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.yourjourneybackend.Entities.CartItem;
import com.example.yourjourneybackend.Entities.User;
import com.example.yourjourneybackend.Services.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userservice;

    @GetMapping("/user")
    public ResponseEntity<User> giveUser() {
        userservice.addUser("2", List.of());

        return ResponseEntity.status(HttpStatus.OK).body(new User("5"));
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable String id ) {
        System.out.println(id);
          Optional<User> a= userservice.getUser(id);
          if (a.isPresent() == false){
           userservice.addUser(id, List.of());
            Optional<User> B= userservice.getUser(id);
             return ResponseEntity.status(HttpStatus.OK).body(B.get());
        
        }
            User output= a.get();
        return ResponseEntity.status(HttpStatus.OK).body(output);
    }
    
    @PostMapping ("/addUser/{id}")
    public ResponseEntity  <String> addUser(@PathVariable String id ){
            userservice.addUser(id, null);
            return  ResponseEntity.status(HttpStatus.CREATED).body("User Created");

    }


    @PostMapping("/user/cart/{id}")
    public ResponseEntity <User> addCart(@PathVariable String id , @RequestBody List<CartItem> userCart) {

        System.out.println( userCart);
           User a =  userservice.updateUser(id, userCart);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(a);

    }

}
