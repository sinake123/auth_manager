package com.auth.shiro.util;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;

import com.auth.modules.sys.entity.AuthUser;

public class ShiroUtils {

	public static Subject getSubject(){
		return SecurityUtils.getSubject();
	}
	
	public static AuthUser getCurrAuthUser(){
		return (AuthUser) getSubject().getPrincipal();
	}
}
