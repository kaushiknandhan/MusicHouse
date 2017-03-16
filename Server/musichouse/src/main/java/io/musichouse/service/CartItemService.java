package io.musichouse.service;

import java.util.List;

import io.musichouse.entity.CartItem;

public interface CartItemService {

	public List<CartItem> getAllCartItems();

	public List<CartItem> getTopFiveItems();

	public List<CartItem> getMostSoldItems();

}
