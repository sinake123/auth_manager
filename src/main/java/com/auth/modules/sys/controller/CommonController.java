package com.auth.modules.sys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/common")
public class CommonController {

	@RequestMapping("/main")
	public String main(){
		return "/main";
	}
}
