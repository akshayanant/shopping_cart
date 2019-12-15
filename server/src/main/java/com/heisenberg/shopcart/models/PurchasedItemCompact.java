package com.heisenberg.shopcart.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */
public class PurchasedItemCompact {
    private int id;
    private int quantity;

    public PurchasedItemCompact(@JsonProperty("id") int id, @JsonProperty("quantity") int quantity) {
        this.id = id;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public int getQuantity() {
        return quantity;
    }
}
