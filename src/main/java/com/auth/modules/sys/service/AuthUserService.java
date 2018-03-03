package com.auth.modules.sys.service;

import java.util.List;

import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.auth.modules.sys.entity.AuthUser;

public interface AuthUserService {

	AuthUser findAuthUserByUserName(String userName);
	
	List<AuthUser> findAuthUserList();
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED)
	int insert(AuthUser authUser);
}
