package com.example.yourjourneybackend.Entities;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Component
@Document(collection = "Cart")
public class CartItem {

    private int id;
    private String name;

    private int price;
    private String img;
    private String desc;
    private String condition;

  


}


