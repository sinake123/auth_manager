package com.auth.modules.sys.dao;

import org.apache.ibatis.annotations.Select;

import com.auth.common.annotation.MybatisRepository;
import com.auth.dao.MyBatisBaseDao;
import com.auth.modules.sys.entity.AuthUser;
@MybatisRepository
public interface AuthUserDao extends MyBatisBaseDao<AuthUser, Long>{
	
	@Select("select * from auth_user where name=#{userName}")
	AuthUser findAuthUserByUserName(String userName);
}
