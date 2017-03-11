package io.musichouse.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Entity
@Table
@Data
public class Product {
	
	@Id
	@GenericGenerator(name = "myuuid", strategy = "uuid2")
	@GeneratedValue(generator = "myuuid")
	private String productId;
	private String productName;
	private String productType;
	private String productDescription;
	private String productPrice;
	private String productCondition;
	private String productManufacturer;
	private String productImage;
}