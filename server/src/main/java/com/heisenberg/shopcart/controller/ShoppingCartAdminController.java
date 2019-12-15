package com.heisenberg.shopcart.controller;

import com.heisenberg.shopcart.models.Item;
import com.heisenberg.shopcart.resources.JSONConverter;
import com.heisenberg.shopcart.service.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */

@RestController
@RequestMapping(path = "/shoppingcart/admin/home")
@CrossOrigin(origins = "http://localhost:3000")
public class ShoppingCartAdminController {

    @Autowired
    private ItemsService itemsService;

    @GetMapping
    public String home(){
        return JSONConverter.toJSON("Welcome!");
    }

    @PostMapping(path = "/additem")
    public void addItem(@RequestBody Item item){
        itemsService.addItem(item);
    }
    @GetMapping(path="/getitems")
    public List<Item> getAll(){
        return itemsService.getAll();
    }
}
