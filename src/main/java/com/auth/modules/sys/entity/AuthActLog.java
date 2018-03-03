package com.auth.modules.sys.entity;

import java.util.Date;

import com.auth.entity.BaseEntity;

public class AuthActLog implements BaseEntity<Long> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	
	private String actUser;
	
	private Date actDate;
	
	private String actAction;
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getActUser() {
		return actUser;
	}

	public void setActUser(String actUser) {
		this.actUser = actUser;
	}

	public Date getActDate() {
		return actDate;
	}

	public void setActDate(Date actDate) {
		this.actDate = actDate;
	}

	public String getActAction() {
		return actAction;
	}

	public void setActAction(String actAction) {
		this.actAction = actAction;
	}

	
}
