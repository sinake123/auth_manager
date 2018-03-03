package com.auth.modules.sys.dao;

import java.util.Set;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.auth.common.annotation.MybatisRepository;
import com.auth.dao.MyBatisBaseDao;
import com.auth.modules.sys.entity.AuthRole;

@MybatisRepository
public interface AuthRoleDao extends MyBatisBaseDao<AuthRole, Long> {

	@Select("select r.r_name from auth_user u,auth_role r,auth_user_role ur where r.id=ur.r_id and u.id=ur.u_id and ur.u_id=#{userId}")
	Set<String> findAllRolesByUser(@Param("userId")Long userId);
}
