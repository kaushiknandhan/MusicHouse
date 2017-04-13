package io.musichouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.musichouse.entity.Billing;
import io.musichouse.exception.NoBillWithIdFound;
import io.musichouse.service.BillingService;

@RestController
@RequestMapping(path = "/billings")
public class BillingController {

	@Autowired
	private BillingService billingService;

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Billing> getBills() {
		List<Billing> allBills = billingService.getBills();
		return allBills;
	}

	@RequestMapping(path = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Billing getCurrentBill(@PathVariable(value = "id") String billId) throws NoBillWithIdFound {
		Billing existingBill = billingService.getCurrentBill(billId);
		return existingBill;
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Billing checkOut(@RequestBody Billing billing) {
		System.out.println("Billing controller");
		System.out.println(billing);
		Billing finalBill = billingService.checkOut(billing);
		return finalBill;
	}
	
}
