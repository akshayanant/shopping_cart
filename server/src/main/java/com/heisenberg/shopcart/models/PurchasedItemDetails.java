package com.heisenberg.shopcart.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */
public class PurchasedItemDetails {
    private Item item;
    private int quantity;
    private double netPrice;

    public PurchasedItemDetails(Item item,int quantity) {
        this.item = item;
        this.quantity = quantity;
        this.netPrice = item.getPrice()*quantity;
    }

    public double getNetPrice() {
        return netPrice;
    }

    public Item getItem() {
        return item;
    }

    public int getQuantity() {
        return quantity;
    }

    @Override
    public String toString() {
        return "PurchasedItemDetails [item="
                + item
                + ", quantity="
                + quantity
                + ", netPrice="
                + netPrice + "]";
    }
}