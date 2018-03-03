package com.auth.modules.sys.entity;

import com.auth.entity.BaseEntity;

public class AuthPer implements BaseEntity<Long>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	
	private String perName;
	
	private String perUrl;

	public Long getId() {
		// TODO Auto-generated method stub
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPerName() {
		return perName;
	}

	public void setPerName(String perName) {
		this.perName = perName;
	}

	public String getPerUrl() {
		return perUrl;
	}

	public void setPerUrl(String perUrl) {
		this.perUrl = perUrl;
	}
	
	
}
