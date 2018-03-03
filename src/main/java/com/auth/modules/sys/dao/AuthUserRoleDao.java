package com.auth.modules.sys.dao;

import com.auth.common.annotation.MybatisRepository;
import com.auth.dao.MyBatisBaseDao;
import com.auth.modules.sys.entity.AuthUserRole;

@MybatisRepository
public interface AuthUserRoleDao extends MyBatisBaseDao<AuthUserRole,Long> {

}
