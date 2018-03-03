package com.auth.common.aop;

import java.lang.reflect.Method;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.auth.common.annotation.SysLog;
import com.auth.modules.log.entity.AuthLog;
import com.auth.modules.log.service.SysLogService;
import com.auth.modules.sys.entity.AuthUser;
import com.auth.shiro.util.ShiroUtils;

@Aspect
@Component
public class LogAop {

	@Autowired
	private SysLogService sysLogService;
	
	@Pointcut("@annotation(com.auth.common.annotation.SysLog)")
	public void logPointCut(){
		
	}
	
	@After("logPointCut()")
	public void afterLog(JoinPoint point) throws NoSuchMethodException, SecurityException{
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder
				.getRequestAttributes()).getRequest();
		String ip = request.getRemoteAddr();
		String className=point.getTarget().getClass().getName();
        String methodName=point.getSignature().getName();
        Object[] args=point.getArgs();
        String params = null;
        StringBuffer param = new StringBuffer();
        if(args!=null&&args.length>0){
        	for (Object obj :args) {
				param.append(String.valueOf(obj));
				params = param.toString();
			}
        }
        Class<?> classTarget=point.getTarget().getClass();
        Class<?>[] par=((MethodSignature) point.getSignature()).getParameterTypes();
        Method objMethod=classTarget.getMethod(methodName, par);
        SysLog sysLog = objMethod.getAnnotation(SysLog.class);
        AuthLog authLog = new AuthLog();
		AuthUser authUser = ShiroUtils.getCurrAuthUser();
		String opName = sysLog.operation().name();
		String menthodName = className+"."+methodName;
		if(sysLog!=null){
//			System.out.println(className+"."+methodName);
//			System.out.println(opName);
//			System.out.println(authUser.getName());
//			System.out.println(ip);
//			System.out.println(args);
			authLog.setOpUserName(authUser.getName());
			authLog.setOpMethod(menthodName);
			authLog.setOpParam(params);
			authLog.setOpName(opName);
			authLog.setOpIp(ip);
			authLog.setOpDate(new Date());
			authLog.setOpStatus(1);
			sysLogService.save(authLog);
		}
	}
}
