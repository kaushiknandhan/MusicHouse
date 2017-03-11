package io.musichouse.service;

import java.util.List;

import io.musichouse.entity.Product;
import io.musichouse.exception.UserNotFoundException;

public interface ProductService {
	public List<Product> getProducts();

	public Product findOne(String productId) throws UserNotFoundException;

	public Product createProduct(Product product);

	public Product updateProduct(Product product, String productId) throws UserNotFoundException;

	public void deleteProduct(String productId) throws UserNotFoundException;
}
