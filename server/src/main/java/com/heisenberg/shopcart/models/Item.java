package com.heisenberg.shopcart.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */

@Entity
@Table(name="shop_items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Item{
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private double price;

    public double getPrice() {
        return price;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Item [id="
                + id
                + ", name="
                + name
                + ", price="
                + price + "]";
    }
}
