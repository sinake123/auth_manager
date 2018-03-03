package com.auth.modules.menu.entity;

import java.util.List;

import javax.persistence.Transient;

public class AuthMenuBo extends AuthMenu{

	 
	private static final long serialVersionUID = -5254771233420335525L;
	
	@Transient
	private List<AuthMenuBo> chilren;

	public List<AuthMenuBo> getChilren() {
		return chilren;
	}

	public void setChilren(List<AuthMenuBo> chilren) {
		this.chilren = chilren;
	}
	
	
}
