package com.heisenberg.shopcart.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

/**
 * Created by Akshay Hegde on 12/17/2019.
 */
public class SelectedItems {
    private List<PurchasedItemCompact> selected;

    public SelectedItems(@JsonProperty("selectedItems") List<PurchasedItemCompact> selected) {
        this.selected = selected;
    }

    public List<PurchasedItemCompact> getSelected() {
        return selected;
    }
}
