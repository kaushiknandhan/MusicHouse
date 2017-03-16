package io.musichouse.repository;

import java.util.List;

import io.musichouse.entity.Billing;

public interface BillingRepository {

	public List<Billing> getBills();

	public Billing getCurrentBill(String billId);

	public Billing checkOut(Billing billing);

}
