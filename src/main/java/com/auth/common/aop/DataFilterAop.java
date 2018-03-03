package com.auth.common.aop;

import java.util.Map;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class DataFilterAop {

	
	@Pointcut("@annotation(com.auth.common.annotation.DataFilter)")
	public void dataPointCut(){
		
	}
	
	@Before("dataPointCut()")
	public void dataFilter(JoinPoint point){
		System.out.println("-----------------");
		Object[] objs = point.getArgs();
		for (Object object : objs) {
			System.out.println("param"+object);
		}
		Object param = objs[0];
		if(param!=null&&param instanceof Map){
			Map<?, ?> map = (Map<?, ?>) param;
			for(Object o :map.values()){
				System.out.println(o);
			}
			
		}
	}
}
