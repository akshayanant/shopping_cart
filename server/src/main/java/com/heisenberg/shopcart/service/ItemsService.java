package com.heisenberg.shopcart.service;

import com.heisenberg.shopcart.dao.ItemsRepository;
import com.heisenberg.shopcart.models.Item;
import com.heisenberg.shopcart.models.PurchasedItemCompact;
import com.heisenberg.shopcart.models.PurchasedItemDetails;
import com.heisenberg.shopcart.models.Receipt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */

@Service
public class ItemsService{

    @Autowired
    private ItemsRepository itemsRepository;

    public void addItem(Item item){
        itemsRepository.save(item);
    }

    public List<Item> getAll(){
        return (List<Item>) itemsRepository.findAll();
    }

    public Receipt generateReceipt(List<PurchasedItemCompact> items){
        Receipt receipt = new Receipt();
        for(PurchasedItemCompact itemCompact:items){
            Optional<Item> item = itemsRepository.findById(itemCompact.getId());
            item.ifPresent(item1 ->
                    receipt.addItem(
                            new PurchasedItemDetails(item1, itemCompact.getQuantity())));
        }
        return receipt;
    }
}
