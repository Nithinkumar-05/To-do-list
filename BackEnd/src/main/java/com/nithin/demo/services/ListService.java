package com.example.demo.services;

import com.example.demo.models.ListModel;
import com.example.demo.repositories.ListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ListService {

    @Autowired
    ListRepo repo;

    public List<ListModel> getList(){
        return repo.findAll();
    }

    public ListModel getListById(int listId){
        return repo.findById(listId).orElse(new ListModel());
    }

    public ListModel addItem(ListModel l){
        if(l.getDate() == null){
            l.setDate(new Date());
        }
        return repo.save(l);
    }

    public ListModel updateItem(ListModel l){
        return repo.save(l);
    }

    public boolean deleteItem(int listId){
        try {
            if (repo.existsById(listId)) {
                repo.deleteById(listId);
                return true;
            }
            return false; // Item not found
        } catch (Exception e) {
            return false;
        }
    }
}