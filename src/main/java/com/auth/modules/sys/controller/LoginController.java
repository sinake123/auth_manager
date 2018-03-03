package com.auth.modules.sys.controller;

import java.util.Map;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.auth.common.Result;
import com.auth.shiro.util.ShiroUtils;

@Controller
public class LoginController {


	@RequestMapping("/login_validate")
	@ResponseBody
	public Result loginValidate(@RequestParam Map<String,Object> param){
		String username = (String) param.get("username");
		String password = (String) param.get("password");
		String remember = (String) param.get("remeberMe");
		if(remember==null||"null".equals(remember)||"".equals(remember.trim())){
			remember = "false";
		}
		boolean checked = Boolean.valueOf(remember);
		try{
			Subject subject = ShiroUtils.getSubject();
			UsernamePasswordToken token = new UsernamePasswordToken(username, password, checked);
			subject.login(token);
		}catch (UnknownAccountException e) {
			return Result.err(e.getMessage());
		}catch (IncorrectCredentialsException e) {
			return Result.err("账号或密码不正确");
		}catch (LockedAccountException e) {
			return Result.err("账号已被锁定,请联系管理员");
		}catch (AuthenticationException e) {
			return Result.err("账户验证失败");
		}
		return Result.ok();
	}

	@RequestMapping("/login")
	public String login(){
		return "/home/login";
	}
	@RequestMapping("/index")
	public String loginSuccess(){
		return "/index";
	}
}
