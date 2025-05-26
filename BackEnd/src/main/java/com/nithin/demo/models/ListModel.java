package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ListModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int listId;

    private String data;     // field should be lowercase by convention
    private boolean status;
    private Date date = new Date();

}
