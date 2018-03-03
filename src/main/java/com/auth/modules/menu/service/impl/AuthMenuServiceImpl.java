package com.auth.modules.menu.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.common.annotation.SysLog;
import com.auth.common.constant.LogType;
import com.auth.modules.menu.dao.AuthMenuDao;
import com.auth.modules.menu.entity.AuthMenuBo;
import com.auth.modules.menu.service.AuthMenuService;

@Service("authMenuService")
public class AuthMenuServiceImpl implements AuthMenuService {

	@Autowired
	private AuthMenuDao authMenuDao;

	public Set<String> getPersByUser(Long userId) {
		return authMenuDao.getPersByUser(userId);
	}
	
	@SysLog(operation=LogType.SELECT)
	public List<AuthMenuBo> findAllMenu() {
		List<AuthMenuBo> leafList = authMenuDao.findAllMenuLeaves();
		Map<Long,AuthMenuBo> allMenu = authMenuDao.findAllMenu();
		Map<Long,AuthMenuBo> map = new HashMap<Long, AuthMenuBo>();
		List<AuthMenuBo> list = new ArrayList<AuthMenuBo>();
		if(leafList!=null&&!leafList.isEmpty()){
			for (AuthMenuBo leaf : leafList) {
				getMenuTree(leaf,allMenu,map, list);
			}
		}
		return list;
	}


	private void getMenuTree(AuthMenuBo leaf,Map<Long,AuthMenuBo> allMenu,Map<Long,AuthMenuBo> map,List<AuthMenuBo> list){

		Long parentId = leaf.getParentId();
		AuthMenuBo parent = allMenu.get(parentId);
		if(parent!=null){
			if(map.get(parentId)!=null){
				map.get(parentId).getChilren().add(leaf);
			}else{
				List<AuthMenuBo> boList = new ArrayList<AuthMenuBo>();
				boList.add(leaf);
				parent.setChilren(boList);
				map.put(parentId, parent);
				getMenuTree(parent,allMenu,map, list);
			}
		}else{
			list.add(leaf);
		}
	}
}
