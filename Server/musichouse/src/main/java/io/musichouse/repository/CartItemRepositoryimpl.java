package io.musichouse.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import org.springframework.stereotype.Repository;
import io.musichouse.entity.CartItem;
@Repository
public class CartItemRepositoryimpl implements CartItemRepository{

	@PersistenceContext
	private EntityManager em;
	@Override
	public CartItem createCartItem(CartItem cartItem) {
		System.out.println(cartItem.getProduct());
		em.persist(cartItem);
		return cartItem;
	}
	@Override
	public List<CartItem> getAllCartItems() {
		TypedQuery<CartItem> query = em.createQuery("select c from CartItem c order by time desc",CartItem.class);
		List<CartItem> cartItemsList = query.getResultList();
		return cartItemsList;
	}
	@Override
	public List<CartItem> getTopFiveItems() {
		TypedQuery<CartItem> query = em.createQuery("select c from CartItem c group by c.product.productId order by count(c) desc",CartItem.class);
		query.setMaxResults(5);
		List<CartItem> topFiveIems = query.getResultList();
		return topFiveIems;
	}
	@Override
	public List<CartItem> getMostSoldItems() {
		TypedQuery<CartItem> query = em.createQuery("select c from CartItem c group by c.product.productId order by sum(c.quantity) desc",CartItem.class);
		query.setMaxResults(3);
		 List<CartItem> MostSoldItems = query.getResultList();
		return MostSoldItems;
	}
	@Override
	public CartItem findOne(String cartId) {		
		return em.find(CartItem.class, cartId);
	}

}
