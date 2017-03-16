package io.musichouse.repository;

import java.util.List;

import io.musichouse.entity.CartItem;

public interface CartItemRepository {

	public CartItem createCartItem(CartItem cartItem);

	public List<CartItem> getAllCartItems();

	public List<CartItem> getTopFiveItems();

	public List<CartItem> getMostSoldItems();

}
