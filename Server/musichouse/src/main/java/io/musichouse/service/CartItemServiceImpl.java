package io.musichouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.musichouse.entity.CartItem;
import io.musichouse.repository.CartItemRepository;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {

	@Autowired
	private CartItemRepository cartItemRepository;
	@Override
	public List<CartItem> getAllCartItems() {
		List<CartItem> getAllCarts= cartItemRepository.getAllCartItems();
		return getAllCarts;
	}
	@Override
	public List<CartItem> getTopFiveItems() {
		List<CartItem> topFiveIems = cartItemRepository.getTopFiveItems();
		return topFiveIems;
	}
	@Override
	public List<CartItem> getMostSoldItems() {
		List<CartItem> mostSoldItems = cartItemRepository.getMostSoldItems();
		return mostSoldItems;
	}
	

}
