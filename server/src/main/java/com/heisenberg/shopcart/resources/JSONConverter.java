package com.heisenberg.shopcart.resources;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Created by Akshay Hegde on 12/14/2019.
 */
public class JSONConverter {

    public static String toJSON(Object object){
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(object);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "Failed";
        }
    }
}
