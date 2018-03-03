package com.auth.shiro.realm;

import java.util.HashSet;
import java.util.Set;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;

import com.auth.modules.menu.service.AuthMenuService;
import com.auth.modules.sys.entity.AuthUser;
import com.auth.modules.sys.service.AuthPerService;
import com.auth.modules.sys.service.AuthRoleService;
import com.auth.modules.sys.service.AuthUserService;

public class ShiroDbRealm extends AuthorizingRealm {
	
	private AuthRoleService authRoleService;
	private AuthPerService authPerService;
	private AuthUserService authUserService;
	private AuthMenuService authMenuService;
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(
			PrincipalCollection principals) {
		Long userId = ((AuthUser) getAvailablePrincipal(principals)).getId();
		Set<String> authRoleList = authRoleService.findAllRolesByUser(userId);
//		Set<String> authPerList = authPerService.findAllAuthPerByUser(userId);
		Set<String> authPers = authMenuService.getPersByUser(userId);
		Set<String> authPerSet = new HashSet<String>();
		if(authPers!=null&&!authPers.isEmpty()){
			for (String per : authPers) {
				if(per!=null&&!"".equals(per.trim())){
					authPerSet.add(per);
				}
			}
		}
		SimpleAuthorizationInfo simpleInfo = new SimpleAuthorizationInfo();
		simpleInfo.setRoles(authRoleList);
		simpleInfo.setStringPermissions(authPerSet);
		return simpleInfo;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(
			AuthenticationToken token) throws AuthenticationException {
		UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) token;
		String userName = usernamePasswordToken.getUsername();
		AuthUser authUser = authUserService.findAuthUserByUserName(userName);
		if(authUser==null){
			return null;
		}
		ByteSource credentialsSalt = ByteSource.Util.bytes(authUser.getSalt());
		SimpleAuthenticationInfo simpleInfo = 
				new SimpleAuthenticationInfo(
						authUser,
						authUser.getPassword(), 
						credentialsSalt,
						this.getName());
		return simpleInfo;
	}

	public AuthRoleService getAuthRoleService() {
		return authRoleService;
	}

	public void setAuthRoleService(AuthRoleService authRoleService) {
		this.authRoleService = authRoleService;
	}

	public AuthPerService getAuthPerService() {
		return authPerService;
	}

	public void setAuthPerService(AuthPerService authPerService) {
		this.authPerService = authPerService;
	}

	public AuthUserService getAuthUserService() {
		return authUserService;
	}

	public void setAuthUserService(AuthUserService authUserService) {
		this.authUserService = authUserService;
	}

	public AuthMenuService getAuthMenuService() {
		return authMenuService;
	}

	public void setAuthMenuService(AuthMenuService authMenuService) {
		this.authMenuService = authMenuService;
	}
}
