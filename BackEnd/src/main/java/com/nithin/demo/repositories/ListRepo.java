package com.example.demo.repositories;

import com.example.demo.models.ListModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRepo extends JpaRepository<ListModel,Integer> {


}
