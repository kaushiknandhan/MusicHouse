package io.musichouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.musichouse.entity.Product;
import io.musichouse.exception.ProductNotFoundException;
import io.musichouse.service.ProductService;

@RestController
@RequestMapping(path="/products")
public class ProductController {
	@Autowired
	private ProductService productService;

	@RequestMapping(method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Product> getProducts(){
		System.out.println("product controler");
		List<Product> productList = productService.getProducts();
		return productList;
	}
	
	@RequestMapping(path="{id}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Product findOne(@PathVariable(value="id") String productId) throws ProductNotFoundException{
		Product product = productService.findOne(productId);
		return product;
	}
	@RequestMapping(method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE,consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Product createProduct(@RequestBody Product product){
		Product newProduct = productService.createProduct(product);
		return newProduct;
	}
	@RequestMapping(value="{id}",method=RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_UTF8_VALUE,consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Product upadteProduct(@RequestBody Product product, @PathVariable(value="id") String productId) throws ProductNotFoundException{
		Product updatedProduct = productService.updateProduct(product,productId);
		return  updatedProduct;
	}
	// Avoid Deletion
//	@RequestMapping(value="{id}",method=RequestMethod.DELETE)
//	public void deleteProduct(@PathVariable(value="id") String productId) throws ProductNotFoundException{
//		productService.deleteProduct(productId);
//	}

}
