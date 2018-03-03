package test;

import org.springframework.web.bind.annotation.RequestMethod;

public class Test {

	public static void main(String[] args) {
		String a = RequestMethod.PATCH.name();
		System.out.println(a);
	}
}
