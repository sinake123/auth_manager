package com.auth.modules.log.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.modules.log.dao.AuthLogDao;
import com.auth.modules.log.entity.AuthLog;
import com.auth.modules.log.service.SysLogService;

@Service
public class SysLogServiceImpl implements SysLogService {

	@Autowired
	private AuthLogDao authLogDao;
	
	public int save(AuthLog authLog) {
		return authLogDao.insert(authLog);
	}

}
