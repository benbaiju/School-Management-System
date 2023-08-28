package com.example.demo.Controller;

import com.example.demo.Models.User;
import com.example.demo.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Apicontrollers {
    @Autowired
    private UserRepo userRepo;
    @GetMapping(value="/")
    public String getPage(){
        return "Welcome";
    }

    @GetMapping(value="/users")
    public List<User> getUser(){
        return userRepo.findAll();
    }

    @CrossOrigin
    @PostMapping(value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> saveUser(@RequestBody User user) {
        userRepo.save(user);
        return ResponseEntity.ok("{\"message\": \"User saved successfully\"}"); // Return a response message
    }
//    @PostMapping(value="/save")
//    public void saveUser(@RequestBody User user){
//        userRepo.save(user);
//        //return "Saved...";
//    }

    @PutMapping(value="update/{id}")
    public String updateUser(@PathVariable long id,@RequestBody User user){
        User updatedUser= userRepo.findById(id).get();
        updatedUser.setSuffix(user.getSuffix());
        updatedUser.setFirstname(user.getFirstname());
        updatedUser.setMiddlename(user.getMiddlename());
        updatedUser.setLastname(user.getLastname());
        //updatedUser.setSelectedDate(user.getSelectedDate());
        updatedUser.setNumber(user.getNumber());
        updatedUser.setEmail(user.getEmail());
        updatedUser.setAddress(user.getAddress());
        updatedUser.setCity(user.getCity());
        updatedUser.setState(user.getState());
        updatedUser.setZip(user.getZip());
        updatedUser.setComments(user.getComments());
        userRepo.save(updatedUser);
        return "updated";
    }
    @DeleteMapping (value="delete/{id}")
    public String deleteUser(@PathVariable long id){
        User updatedUser= userRepo.findById(id).get();
        userRepo.delete(updatedUser);
        return "Deleted";
    }

}
