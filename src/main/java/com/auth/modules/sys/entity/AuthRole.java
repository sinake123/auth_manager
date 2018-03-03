package com.auth.modules.sys.entity;

import com.auth.entity.BaseEntity;

/**
 * @author c_yuanbowen
 *
 */
public class AuthRole implements BaseEntity<Long>{


	private static final long serialVersionUID = 5527915274506593335L;

	private Long id;
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	private String roleName;

	private String desc;
	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}



}
