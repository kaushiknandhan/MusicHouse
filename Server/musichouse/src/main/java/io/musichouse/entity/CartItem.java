package io.musichouse.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Entity
@Table
@Data
public class CartItem {
	@Id
	@GenericGenerator(name="myuuid",strategy="uuid2")
	@GeneratedValue(generator="myuuid")
	private String cartItemId;
	@ManyToOne(cascade={CascadeType.DETACH,CascadeType.REFRESH},fetch=FetchType.EAGER)
	private Product product;
	private String TotalPrice;
	private String quantity;
	private String time;	
}
