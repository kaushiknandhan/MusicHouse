package io.musichouse.repository;

import java.util.List;

import io.musichouse.entity.ShippingAddress;

public interface ShippingAddressRepository {

	public ShippingAddress createShippingAdress(ShippingAddress currentShippingAddress);

	public List<ShippingAddress> getAllAddresses();
}
