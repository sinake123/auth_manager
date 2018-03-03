package com.auth.modules.menu.dao;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;

import com.auth.common.annotation.MybatisRepository;
import com.auth.dao.MyBatisBaseDao;
import com.auth.modules.menu.entity.AuthMenu;
import com.auth.modules.menu.entity.AuthMenuBo;

@MybatisRepository
public interface AuthMenuDao extends MyBatisBaseDao<AuthMenu, Long> {

	@Select("select m.per from auth_menu m,auth_role r,auth_user u,auth_user_role ur,auth_role_menu rm "
			+ "where ur.u_id=u.id and ur.r_id=r.id and rm.r_id=r.id and rm.m_id=m.id and u.id=#{userId}")
	public Set<String> getPersByUser(Long userId);
	
	@Select("select m.* from auth_menu m where m.type=1")
	@ResultMap("authMenuBo")
	public List<AuthMenuBo> findAllMenuLeaves();
	
	@Select("select m.id,m.* from auth_menu m where m.type!=2")
	@MapKey("id")
	@ResultMap("authMenuBo")
	public Map<Long,AuthMenuBo> findAllMenu();
	
	@Select("select m.* from auth_menu m where m.parent_id=#{parentId} and m.type!=2")
	public List<AuthMenu> findAllChilrenByParentId(Long parentId);
}
