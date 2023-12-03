package com.example.yourjourneybackend.Entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Data
@Document(collection = "users")
@Getter
@Setter
public class User {
    @Id
    private String id;
 

   
    private List<CartItem> cart;

    public User(String id) {
        this.id = id;
        
        // Set other fields if needed
    }
    

     public User(String id ,List a) {
        this.id = id;
        
        this.cart=a;
        // Set other fields if needed
    }
    
}
