package com.auth.dao;

import java.io.Serializable;

import tk.mybatis.mapper.common.BaseMapper;

import com.auth.entity.BaseEntity;

public interface MyBatisBaseDao<T extends BaseEntity<E>,E extends Serializable> extends BaseMapper<T>{

	
}
