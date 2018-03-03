package com.auth.modules.menu.service;

import java.util.List;
import java.util.Set;

import com.auth.modules.menu.entity.AuthMenuBo;

public interface AuthMenuService {

	public Set<String> getPersByUser(Long userId);
	
	public List<AuthMenuBo> findAllMenu();
}
