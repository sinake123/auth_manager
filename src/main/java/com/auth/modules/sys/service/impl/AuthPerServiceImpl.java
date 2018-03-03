package com.auth.modules.sys.service.impl;

import java.util.Set;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.modules.sys.dao.AuthPerDao;
import com.auth.modules.sys.service.AuthPerService;

@Service("authPerService")
public class AuthPerServiceImpl implements AuthPerService {
	@Autowired
	private AuthPerDao authPerDao;
	
	public Set<String> findAllAuthPerByUser(@Param("userId")Long userId) {
		return authPerDao.findAllAuthPerByUser(userId);
	}

}
