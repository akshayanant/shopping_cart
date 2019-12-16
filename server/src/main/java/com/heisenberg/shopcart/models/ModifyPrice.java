package com.heisenberg.shopcart.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Akshay Hegde on 12/15/2019.
 */
public class ModifyPrice {
    private int id;
    private double price;

    public ModifyPrice(@JsonProperty("id") int id,
                       @JsonProperty("price") double price) {
        this.id = id;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public double getPrice() {
        return price;
    }
}
