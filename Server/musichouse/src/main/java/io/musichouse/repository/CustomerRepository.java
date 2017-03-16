package io.musichouse.repository;

import java.util.List;

import io.musichouse.entity.Customer;

public interface CustomerRepository {

	public Customer createCustomer(Customer currentCustomer);

	public List<Customer> getAllCustomers();

	public List<Customer> getTopShippingAddress();

}
