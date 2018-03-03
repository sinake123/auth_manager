package com.auth.modules.sys.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.modules.sys.dao.AuthRoleDao;
import com.auth.modules.sys.service.AuthRoleService;

@Service("authRoleService")
public class AuthRoleServiceImpl implements AuthRoleService {

	@Autowired
	private AuthRoleDao authRoleDao;
	
	public Set<String> findAllRolesByUser(Long userId) {
		return authRoleDao.findAllRolesByUser(userId);
	}

}
