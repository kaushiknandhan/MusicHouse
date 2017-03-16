package io.musichouse.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.musichouse.entity.Billing;

@Repository
public class BillingRepositoryImpl implements BillingRepository {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Billing> getBills() {
		TypedQuery<Billing> query = em.createQuery("select b from Billing b", Billing.class);
		List<Billing> allBills = query.getResultList();
		return allBills;
	}

	@Override
	public Billing getCurrentBill(String billId) {
		return em.find(Billing.class, billId);
	}

	@Override
	public Billing checkOut(Billing billing) {
		em.persist(billing);
		return billing;
	}
}
