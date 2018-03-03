package com.auth.modules.sys.controller;

import java.util.List;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.auth.common.Result;
import com.auth.modules.sys.entity.AuthUser;
import com.auth.modules.sys.service.AuthUserService;
import com.auth.shiro.util.ShiroUtils;

@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private AuthUserService authUserService;
	
	@RequestMapping("/login_user")
	@ResponseBody
	public AuthUser getAuthUser(){
		return ShiroUtils.getCurrAuthUser();
	}
	
	@RequestMapping("/insert")
	@ResponseBody
	public Result insert(AuthUser authUser){
		System.out.println("----------------------------");
		System.out.println(authUser.getName()+authUser.getPassword());
		String password = authUser.getPassword();
		String salt = RandomStringUtils.randomAlphanumeric(20);
		ByteSource source = ByteSource.Util.bytes(salt);
		Object obj = new SimpleHash("MD5", password, source, 12);
		authUser.setPassword(obj.toString());
		int r = authUserService.insert(authUser);
		if(r==0){
			return Result.err("新增失败");
		}
		return Result.ok();
	}
	
	
	@RequestMapping("/list")
	@ResponseBody
	public List<AuthUser> findAuthUserList(){
		return authUserService.findAuthUserList();
	}
	
	@RequestMapping("/index")
	public String userIndex(){
		return "user";
	}
	
	public static void main(String[] args) {
		ByteSource source = ByteSource.Util.bytes("5c29d95359773eee6daa48cb6fe75f89");
		Object obj = new SimpleHash("MD5", "admin", source, 12);
		System.out.println(obj.toString());
	}
}
