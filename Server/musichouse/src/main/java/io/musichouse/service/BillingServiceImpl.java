package io.musichouse.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.musichouse.entity.Billing;
import io.musichouse.entity.CartItem;
import io.musichouse.entity.Customer;
import io.musichouse.entity.Product;
import io.musichouse.entity.ShippingAddress;
import io.musichouse.exception.NoBillWithIdFound;
import io.musichouse.repository.BillingRepository;
import io.musichouse.repository.CartItemRepository;
import io.musichouse.repository.CustomerRepository;
import io.musichouse.repository.ProductRepository;
import io.musichouse.repository.ShippingAddressRepository;

@Service
@Transactional
public class BillingServiceImpl implements BillingService {
	@Autowired
	private BillingRepository billingRepository;
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private CartItemRepository cartItemRepository;
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private ShippingAddressRepository shippingAddressRepository;

	@Override
	public List<Billing> getBills() {
		List<Billing> allBills = billingRepository.getBills();
		return allBills;
	}

	@Override
	public Billing getCurrentBill(String billId) throws NoBillWithIdFound {
		Billing currentBill = billingRepository.getCurrentBill(billId);
		if (currentBill != null) {
			return currentBill;
		} else {
			throw new NoBillWithIdFound();
		}
	}

	@Override
	public Billing checkOut(Billing billing) {
		Customer currentCustomer = billing.getCustomer();
		Customer persistedCustomer = persistCustomer(currentCustomer);
		billing.setCustomer(persistedCustomer);
		List<CartItem> getCurrentCartList = billing.getCartItem();
		List<CartItem> persistedCartItems = persistCartItems(getCurrentCartList);
		billing.setCartItem(persistedCartItems);
		Billing finalBill = billingRepository.checkOut(billing);
		return finalBill;
	}

	private List<CartItem> persistCartItems(List<CartItem> getCurrentCartList) {
		List<CartItem> getExistingCartList = new ArrayList<CartItem>();
		for (CartItem cartItem : getCurrentCartList) {
			String existingProductId = cartItem.getProduct().getProductId();
			Product existingProduct = productRepository.findOneProduct(existingProductId);
			cartItem.setProduct(existingProduct);
			CartItem existingCartItem = cartItemRepository.createCartItem(cartItem);
			getExistingCartList.add(existingCartItem);
		}
		return getExistingCartList;
	}

	private Customer persistCustomer(Customer currentCustomer) {
		ShippingAddress currentShippingAddress = currentCustomer.getShippingAddress();
		ShippingAddress persistedShippingAddress = persistShippingAddress(currentShippingAddress);
		currentCustomer.setShippingAddress(persistedShippingAddress);
		Customer existingCustomer = customerRepository.createCustomer(currentCustomer);
		return existingCustomer;
	}

	private ShippingAddress persistShippingAddress(ShippingAddress currentShippingAddress) {
		ShippingAddress existingShippingAddress = shippingAddressRepository
				.createShippingAdress(currentShippingAddress);
		return existingShippingAddress;
	}

}
