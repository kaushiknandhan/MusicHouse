package io.musichouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.musichouse.entity.CartItem;
import io.musichouse.service.CartItemService;

@RestController
@RequestMapping(path="/cartitems")
public class CartItemController {
	@Autowired
	private CartItemService cartItemService;
	
	@RequestMapping(method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<CartItem> getAllCartItems(){
		List<CartItem> cartList = cartItemService.getAllCartItems();
		return cartList;
	}
	@RequestMapping(path="/topitems",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<CartItem> getTopFiveItems(){
		List<CartItem> topFiveIems = cartItemService.getTopFiveItems();
		return topFiveIems;
	}
	@RequestMapping(path="/mostsolditems",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<CartItem> getMostSoldItems(){
		List<CartItem> mostSoldItems = cartItemService.getMostSoldItems();
		return mostSoldItems;
	}
	@RequestMapping(path="{id}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public CartItem getMostSoldItems(@PathVariable(name="id") String cartId){
		CartItem cartItem = cartItemService.findOne(cartId);
		return cartItem;
	}
	

}
