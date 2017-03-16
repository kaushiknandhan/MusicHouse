package io.musichouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.musichouse.entity.Customer;
import io.musichouse.repository.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public List<Customer> getAllCustomers() {
		List<Customer> existingCustomers = customerRepository.getAllCustomers();
		return existingCustomers;
	}

	@Override
	public List<Customer> getTopShippingAddress() {
		List<Customer> customersList = customerRepository.getTopShippingAddress();
		return customersList;
	}

}
