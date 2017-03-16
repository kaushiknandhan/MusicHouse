package io.musichouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.musichouse.entity.ShippingAddress;
import io.musichouse.repository.ShippingAddressRepository;

@Service
@Transactional
public class ShippingAddressServiceImpl implements ShippingAddressService {
	@Autowired
	private ShippingAddressRepository shippingAddressRepository; 

	@Override
	public List<ShippingAddress> getAllAddresses() {
		List<ShippingAddress> allAddresses = shippingAddressRepository.getAllAddresses();
		return allAddresses;
	}

}
