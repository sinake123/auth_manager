package com.auth.modules.log.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.auth.entity.BaseEntity;

@Table(name="auth_act_log")
public class AuthLog implements BaseEntity<Long> {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(name="op_user")
	private String opUserName;
	private String opName;
	private String opMethod;
	private String opParam;
	private String opIp;
	private int opStatus;
	private Date opDate;
	
	
	public String getOpMethod() {
		return opMethod;
	}

	public void setOpMethod(String opMethod) {
		this.opMethod = opMethod;
	}

	public String getOpParam() {
		return opParam;
	}

	public void setOpParam(String opParam) {
		this.opParam = opParam;
	}

	public String getOpIp() {
		return opIp;
	}

	public void setOpIp(String opIp) {
		this.opIp = opIp;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOpUserName() {
		return opUserName;
	}

	public void setOpUserName(String opUserName) {
		this.opUserName = opUserName;
	}

	public String getOpName() {
		return opName;
	}

	public void setOpName(String opName) {
		this.opName = opName;
	}

	public int getOpStatus() {
		return opStatus;
	}

	public void setOpStatus(int opStatus) {
		this.opStatus = opStatus;
	}

	public Date getOpDate() {
		return opDate;
	}

	public void setOpDate(Date opDate) {
		this.opDate = opDate;
	}
}
