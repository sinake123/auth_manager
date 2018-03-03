package com.auth.modules.sys.entity;

import com.auth.entity.BaseEntity;

public class AuthUser implements BaseEntity<Long>{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	private String name;
	
	private String password;
	
	private String salt;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}
	
}
