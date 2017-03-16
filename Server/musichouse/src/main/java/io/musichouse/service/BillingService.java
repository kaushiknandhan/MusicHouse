package io.musichouse.service;

import java.util.List;

import io.musichouse.entity.Billing;
import io.musichouse.exception.NoBillWithIdFound;

public interface BillingService {

	public List<Billing> getBills();

	public Billing getCurrentBill(String billId) throws NoBillWithIdFound;

	public Billing checkOut(Billing billing);

	

}
