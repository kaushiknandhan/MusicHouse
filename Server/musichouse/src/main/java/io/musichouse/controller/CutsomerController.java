package io.musichouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.musichouse.entity.Customer;
import io.musichouse.service.CustomerService;

@RestController
@RequestMapping(path = "customers")
public class CutsomerController {
	@Autowired
	private CustomerService customerService;

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Customer> getAllCustomers() {
		List<Customer> existingCustomers = customerService.getAllCustomers();
		return existingCustomers;
	}

	@RequestMapping(path = "/mostordered", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Customer> getTopShippingAddress() {
		List<Customer> customersList = customerService.getTopShippingAddress();
		return customersList;
	}
}
