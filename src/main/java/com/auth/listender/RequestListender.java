package com.auth.listender;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.http.HttpServletRequest;

public class RequestListender implements ServletRequestListener {

	public void requestDestroyed(ServletRequestEvent event) {
		String uri = ((HttpServletRequest) event.getServletRequest()).getRequestURI();
		event.getServletContext().log(uri+"响应初始化...");
	}

	public void requestInitialized(ServletRequestEvent event) {
		String uri = ((HttpServletRequest) event.getServletRequest()).getRequestURI();
		event.getServletContext().log(uri+"响应销毁...");
	}

	
}
