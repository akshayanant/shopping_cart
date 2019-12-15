package com.heisenberg.shopcart.dao;

import com.heisenberg.shopcart.models.Item;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */
public interface ItemsRepository extends CrudRepository<Item,Integer> {
}
