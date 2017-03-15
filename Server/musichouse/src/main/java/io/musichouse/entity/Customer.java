package io.musichouse.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Data
@Entity
@Table
public class Customer {	
	@Id
	@GenericGenerator(name="myuuid",strategy="uuid2")
	@GeneratedValue(generator="myuuid")
	private String customerId;
	private String customerName;
	private String customerEmail;
	private String customerMobile;
	private String createDate;
	@OneToOne
	private ShippingAddress shippingAddress;

}
