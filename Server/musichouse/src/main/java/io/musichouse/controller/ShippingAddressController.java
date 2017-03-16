package io.musichouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.musichouse.entity.ShippingAddress;
import io.musichouse.service.ShippingAddressService;

@RestController
@RequestMapping("/shippingaddress")
public class ShippingAddressController {

	@Autowired
	private ShippingAddressService shippingAddressService;

	@RequestMapping(method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<ShippingAddress> getAllAddresses() {
		List<ShippingAddress> allAddresses = shippingAddressService.getAllAddresses();
		return allAddresses;
	}

}
