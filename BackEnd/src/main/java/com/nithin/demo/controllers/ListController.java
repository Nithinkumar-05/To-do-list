package com.example.demo.controllers;

import com.example.demo.models.ListModel;
import com.example.demo.services.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ListController {
    @Autowired
    ListService service;

    @GetMapping("/items")
    public ResponseEntity<List<ListModel>> getAllItems(){
        try {
            List<ListModel> items = service.getList();
            return ResponseEntity.ok(items);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/items/{listId}")
    public ResponseEntity<ListModel> getItemById(@PathVariable int listId){
        try {
            ListModel item = service.getListById(listId);
            if (item.getListId() == 0) { 
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(item);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/items")
    public ResponseEntity<ListModel> addItem(@RequestBody ListModel l){
        try {
            ListModel savedItem = service.addItem(l);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedItem);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping("/items")
    public ResponseEntity<ListModel> updateItem(@RequestBody ListModel l){
        try {
            ListModel updatedItem = service.updateItem(l);
            return ResponseEntity.ok(updatedItem);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/items/{listId}")
    public ResponseEntity<Void> deleteItem(@PathVariable int listId){
        try {
            boolean deleted = service.deleteItem(listId);
            if (deleted) {
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}