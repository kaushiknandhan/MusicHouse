package io.musichouse.service;

import java.util.List;

import io.musichouse.entity.Customer;

public interface CustomerService {

	public List<Customer> getAllCustomers();

	public List<Customer> getTopShippingAddress();

}
