package com.auth.modules.menu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.auth.modules.menu.entity.AuthMenuBo;
import com.auth.modules.menu.service.AuthMenuService;

@Controller
@RequestMapping("/menu")
public class MenuController {

	@Autowired
	private AuthMenuService authMenuService;
	
	@RequestMapping("/list")
	@ResponseBody
	public List<AuthMenuBo> findAllMean(){
		return authMenuService.findAllMenu();
	}
}
