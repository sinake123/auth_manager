package com.auth.common;

import java.util.HashMap;

public class Result extends HashMap<String, Object>{

	private static final long serialVersionUID = 1L;

	public Result() {
		put("code", 0);
	}

	public static Result err(int code,String message){
		return error(code, message);
	}

	public static Result err(String message){
		return err(500,message);
	}
	
	public static Result error(int code,String message){
		Result result = new Result();
		result.put("code", code);
		result.put("message", message);
		return result;
	}
	public static Result ok(){
		return new Result();
	}
}
