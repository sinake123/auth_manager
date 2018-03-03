//生成菜单
var menuItem = Vue.extend({
	name: 'menu-item',
	props:{item:{}},
	template:[
	          '<li>',
	          '<a :href="\'#\'+item.url">',
	          '<i v-if="item.icon != null" :class="item.icon"></i>',
	          '<span>{{item.name}}</span>',
	          '<i v-if="item.chilren!=null&&item.chilren.length !== 0" class="fa fa-angle-left pull-right"></i>',
	          '</a>',
	          '<ul v-if="item.chilren!=null&&item.chilren.length !== 0" class="treeview-menu">',
	          '<menu-item :item="item" v-for="item in item.chilren"></menu-item>',
	          '</ul>',
	          '</li>'
	          ].join('')
});
//iframe自适应
$(window).on('resize', function() {
	var $content = $('.content');
	$content.height($(this).height() - 120);
	$content.find('iframe').each(function() {
		$(this).height($content.height());
	});
}).resize();

//注册菜单组件
Vue.component('menuItem',menuItem);

var vm = new Vue({
	el:'#rrapp',
	data:{
		user:{},
		menuList:{},
		main:"common/main",
		password:'',
		newPassword:'',
		navTitle:"控制台"
	},
	methods: {
		getMenuList: function (event) {
			$.getJSON("menu/list?_"+$.now(), function(r){
				console.log(r);
				vm.menuList = r;
			});
		},
		getUser: function(){
			$.getJSON("user/login_user?_"+$.now(), function(r){
				vm.user = r;
			});
		},
		updatePassword: function(){
			layer.open({
				type: 1,
				skin: 'layui-layer-molv',
				title: "修改密码",
				area: ['550px', '270px'],
				shadeClose: false,
				content: jQuery("#passwordLayer"),
				btn: ['修改','取消'],
				btn1: function (index) {
					var data = "password="+vm.password+"&newPassword="+vm.newPassword;
					$.ajax({
						type: "POST",
						url: "sys/user/password",
						data: data,
						dataType: "json",
						success: function(result){
							if(result.code == 0){
								layer.close(index);
								layer.alert('修改成功', function(index){
									location.reload();
								});
							}else{
								layer.alert(result.msg);
							}
						}
					});
				}
			});
		},
		donate: function () {
			layer.open({
				type: 2,
				title: false,
				area: ['806px', '467px'],
				closeBtn: 1,
				shadeClose: false,
				content: ['http://cdn.renren.io/donate.jpg', 'no']
			});
		}
	},
	created: function(){
		this.getMenuList();
		this.getUser();
	},
	updated: function(){
		//路由
		var router = new Router();
		routerList(router, vm.menuList);
		router.start();
	}
});



function routerList(router, menuList){
	for(var key in menuList){
		var menu = menuList[key];
		if(menu.type == 0){
			routerList(router, menu.chilren);
		}else if(menu.type == 1){
			router.add('#'+menu.url, function() {
				var url = window.location.hash;
				//替换iframe的url
				vm.main = url.replace('#', '');
//				vm.main = url;
				//导航菜单展开
				$(".treeview-menu li").removeClass("active");
				$("a[href='"+url+"']").parents("li").addClass("active");

				vm.navTitle = $("a[href='"+url+"']").text();
			});
		}
	}
}
