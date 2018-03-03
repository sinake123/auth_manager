package com.auth.entity;

import java.io.Serializable;

public interface BaseEntity<E> extends Serializable{

	public E getId();
	
	public void setId(E id);
}
