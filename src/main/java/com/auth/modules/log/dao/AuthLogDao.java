package com.auth.modules.log.dao;

import com.auth.common.annotation.MybatisRepository;
import com.auth.dao.MyBatisBaseDao;
import com.auth.modules.log.entity.AuthLog;

@MybatisRepository
public interface AuthLogDao extends MyBatisBaseDao<AuthLog, Long> {

	
}
