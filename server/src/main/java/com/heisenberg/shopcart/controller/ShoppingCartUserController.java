package com.heisenberg.shopcart.controller;

import com.heisenberg.shopcart.models.Item;
import com.heisenberg.shopcart.models.PurchasedItemCompact;
import com.heisenberg.shopcart.models.Receipt;
import com.heisenberg.shopcart.models.SelectedItems;
import com.heisenberg.shopcart.resources.JSONConverter;
import com.heisenberg.shopcart.service.ItemsService;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */

@RestController
@RequestMapping(path = "shoppingcart/user/home")
@CrossOrigin(origins = "*")
public class ShoppingCartUserController {

    @Autowired
    private ItemsService itemsService;

    @GetMapping(path = "/getitems")
    public List<Item> getItems(){
        return itemsService.getAll();
    }

    @PostMapping(path = "/checkout")
    public String generateReceipt(@RequestBody SelectedItems items){
        return JSONConverter.toJSON(itemsService.generateReceipt(items.getSelected()));
    }
}
