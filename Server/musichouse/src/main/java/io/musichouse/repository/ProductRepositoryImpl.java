package io.musichouse.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.musichouse.entity.Product;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Product> getProducts() {
		TypedQuery<Product> query = em.createQuery("select p from Product p order by productName ASC", Product.class);
		List<Product> productList = query.getResultList();
		return productList;
	}

	@Override
	public Product findOne(String productId) {

		return em.find(Product.class, productId);
	}

	@Override
	public Product createProduct(Product product) {
		em.persist(product);
		return product;
	}

	@Override
	public Product updateProduct(Product product) {
		em.merge(product);
		return product;
	}

	@Override
	public void deleteProduct(Product product) {
		em.remove(product);
	}

	@Override
	public Product findOneProduct(String existingProductId) {
		return em.find(Product.class, existingProductId);
	}

	@Override
	public List<Product> getProducts(String category) {
		TypedQuery<Product> query = em.createQuery("select p from Product p where p.productType = :ptype",Product.class);
		query.setParameter("ptype", category);
		List<Product> getProducts = query.getResultList();
		return getProducts;		
	}

}
