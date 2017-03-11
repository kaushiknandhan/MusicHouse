package io.musichouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.musichouse.entity.Product;
import io.musichouse.exception.UserNotFoundException;
import io.musichouse.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService{
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public List<Product> getProducts() {
		List<Product> productList = productRepository.getProducts();
		return productList;		
	}

	@Override
	public Product findOne(String productId) throws UserNotFoundException {
		Product product = productRepository.findOne(productId);
		if(product == null){
			throw new UserNotFoundException();
		}
		return product;
	}

	@Override
	public Product createProduct(Product product) {
		Product newProduct = productRepository.createProduct(product);
		return newProduct;
	}

	@Override
	public Product updateProduct(Product product, String productId) throws UserNotFoundException {
		Product existingProduct = productRepository.findOne(productId);
		if(existingProduct != null){
			Product updateProduct = productRepository.updateProduct(product);
			return updateProduct;
		}else{
			throw new UserNotFoundException();
		}
		
	}

	@Override
	public void deleteProduct(String productId) throws UserNotFoundException {
		Product existingProduct = productRepository.findOne(productId);
		if(existingProduct!= null){
			productRepository.deleteProduct(existingProduct);	
		}else{
			throw new UserNotFoundException();
		}
		
		
	}
}
