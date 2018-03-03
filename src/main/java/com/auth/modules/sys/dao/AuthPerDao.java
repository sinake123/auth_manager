package com.auth.modules.sys.dao;

import java.util.Set;

import org.apache.ibatis.annotations.Param;

import com.auth.common.annotation.MybatisRepository;
import com.auth.dao.MyBatisBaseDao;
import com.auth.modules.sys.entity.AuthPer;

@MybatisRepository
public interface AuthPerDao extends MyBatisBaseDao<AuthPer, Long> {

	Set<String> findAllAuthPerByUser(@Param("userId")Long userId);
}
