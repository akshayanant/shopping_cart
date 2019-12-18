package com.heisenberg.shopcart.models;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */
public class Receipt {
    private List<PurchasedItemDetails> purchasedItemDetails;
    private double totalAmount;

    public Receipt() {
        purchasedItemDetails = new ArrayList<>();
    }

    public void addItem(PurchasedItemDetails itemDetails){
        purchasedItemDetails.add(itemDetails);
        totalAmount +=itemDetails.getNetPrice();
    }

    public List<PurchasedItemDetails> getPurchasedItemDetails() {
        return purchasedItemDetails;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    @Override
    public String toString() {
        return "Receipt [purchasedItemDetails="
                + purchasedItemDetails
                + ", totalAmount="
                + totalAmount+"]";
    }
}
