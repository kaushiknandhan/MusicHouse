package io.musichouse.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.musichouse.entity.ShippingAddress;

@Repository
public class ShippingAddressRepositoryImpl implements ShippingAddressRepository{

	@PersistenceContext
	private EntityManager em;

	@Override
	public ShippingAddress createShippingAdress(ShippingAddress currentShippingAddress) {
		em.persist(currentShippingAddress);
		return currentShippingAddress;
	}

	@Override
	public List<ShippingAddress> getAllAddresses() {
		TypedQuery<ShippingAddress> query = em.createQuery("select s from ShippingAddress s",ShippingAddress.class);
		List<ShippingAddress> getAllAddresses = query.getResultList();
		return getAllAddresses;
	}
	
	
}
