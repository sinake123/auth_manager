package com.auth.modules.sys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.modules.sys.dao.AuthUserDao;
import com.auth.modules.sys.entity.AuthUser;
import com.auth.modules.sys.service.AuthUserService;
@Service("authUserService")
public class AuthUserServiceImpl implements AuthUserService {

	@Autowired
	private AuthUserDao authUserDao;
	
	public AuthUser findAuthUserByUserName(String userName) {
		return authUserDao.findAuthUserByUserName(userName);
	}
	
	public List<AuthUser> findAuthUserList() {
		return authUserDao.selectAll();
	}

	public int insert(AuthUser authUser) {
		return authUserDao.insert(authUser);
	}

}
