package com.auth.shiro.filter;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;

public class LoginFormAuthenticationFilter extends FormAuthenticationFilter {

	@Override
	protected void setFailureAttribute(ServletRequest request,
			AuthenticationException ae) {
//		super.setFailureAttribute(request, ae);
		String className = ae.getClass().getName();
		request.setAttribute(getFailureKeyAttribute(), className);
	}
	
	@Override
	protected boolean onAccessDenied(ServletRequest request,
			ServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		return super.onAccessDenied(request, response);
	}
}
