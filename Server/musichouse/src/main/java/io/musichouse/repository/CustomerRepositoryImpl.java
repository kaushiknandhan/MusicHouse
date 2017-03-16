package io.musichouse.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.musichouse.entity.Customer;

@Repository
public class CustomerRepositoryImpl implements CustomerRepository {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Customer createCustomer(Customer currentCustomer) {
		em.persist(currentCustomer);
		return currentCustomer;
	}

	@Override
	public List<Customer> getAllCustomers() {
		TypedQuery<Customer> query = em.createQuery("select cust from Customer cust", Customer.class);
		List<Customer> existingCustomerList = query.getResultList();
		return existingCustomerList;
	}

	@Override
	public List<Customer> getTopShippingAddress() {
		TypedQuery<Customer> query = em.createQuery(
				"select cust from Customer cust group by cust.shippingAddress.shippingId order by count(cust) desc",
				Customer.class);
		query.setMaxResults(2);
		List<Customer> existingCustomerList = query.getResultList();
		return existingCustomerList;
	}

}
