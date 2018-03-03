package com.auth.shiro.util;

import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Component;
/**
 * html 页面的shiro验证
 * @author c_yuanbowen
 *
 */
@Component
public class ShiroTag {

	public boolean hasPermission(String permission){
		Subject subject = ShiroUtils.getSubject();
		return subject!=null&&subject.isPermitted(permission);
	}
}
