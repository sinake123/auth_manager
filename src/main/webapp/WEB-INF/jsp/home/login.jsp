<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<link rel="stylesheet" href="${ctx}/css/bootstrap.min.css">
<link rel="stylesheet" href="${ctx}/css/font-awesome.min.css">
<link rel="stylesheet" href="${ctx}/css/AdminLTE.min.css">
<link rel="stylesheet" href="${ctx}/css/all-skins.min.css">
<link rel="stylesheet" href="${ctx}/css/main.css">
</head>
<body class="hold-transition login-page">
	<div class="login-box" id="rrapp" v-cloak>
		<!-- /.login-logo -->
		<div class="login-box-body">
			<p class="login-box-msg">管理员登录</p>
			<div v-if="error" class="alert alert-danger alert-dismissible">
				<h4 style="margin-bottom: 0px;">
					<i class="fa fa-exclamation-triangle"></i> {{errorMsg}}
				</h4>
			</div>
			<div class="form-group has-feedback">
				<input type="text" class="form-control" v-model="username" value="admin"
					placeholder="账号"> <span
					class="glyphicon glyphicon-user form-control-feedback"></span>
			</div>
			<div class="form-group has-feedback">
				<input type="password" class="form-control" v-model="password"
					placeholder="密码" value="123"> <span
					class="glyphicon glyphicon-lock form-control-feedback"></span>
			</div>
			<div class="row">
				<div class="col-xs-8">
					<input type="checkbox" v-model="checked"> 记住我
					<!-- <div class="checkbox icheck"></div> -->
				</div>
				<!-- /.col -->
				<div class="col-xs-4">
					<button type="button" class="btn btn-primary btn-block btn-flat"
						@click="login">登录</button>
				</div>
				<!-- /.col -->
			</div>
			<!-- /.social-auth-links -->

		</div>
		<!-- /.login-box-body -->
	</div>
	<!-- /.login-box -->
	<script src="${ctx}/js/libs/jquery.min.js"></script>
	<script src="${ctx}/js/libs/vue.min.js"></script>
	<script src="${ctx}/js/libs/bootstrap.min.js"></script>
	<script src="${ctx}/js/libs/jquery.slimscroll.min.js"></script>
	<script src="${ctx}/js/libs/fastclick.min.js"></script>
	<script src="${ctx}/js/libs/app.js"></script>
	<script type="text/javascript">
		var vm = new Vue({
			el : '#rrapp',
			data : {
				username : '',
				password : '',
				checked : false,
				error : false,
				errorMsg : '',
			},
			beforeCreate : function() {
				if (self != top) {
					top.location.href = self.location.href;
				}
			},
			methods : {
				login : function(event) {
					$.ajax({
						url : 'login_validate',
						type : 'post',
						data : {
							'username' : vm.username,
							'password' : vm.password,
							'remeberMe': vm.checked
						},
						dataType : 'json',
						success : function(data) {
							console.log(data);
                              if(data.code==0){
                            	  window.location.href="${ctx}/index";
                              }else if(data.code==500){
                            	 vm.error=true;
                            	 vm.errorMsg = data.message;
                              }
						}
					});
				}
			}
		});
	</script>
</body>
</html>