package io.musichouse.repository;

import java.util.List;

import io.musichouse.entity.Product;

public interface ProductRepository {

	public List<Product> getProducts();

	public Product findOne(String productId);

	public Product createProduct(Product product);

	public Product updateProduct(Product product);

	public void deleteProduct(Product existingProduct);

	public Product findOneProduct(String existingProductId);

	public List<Product> getProducts(String category);

}
