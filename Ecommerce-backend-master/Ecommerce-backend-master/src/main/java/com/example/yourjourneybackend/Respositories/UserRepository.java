package com.example.yourjourneybackend.Respositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.yourjourneybackend.Entities.User;

public interface UserRepository extends MongoRepository<User, String> {
    
}
