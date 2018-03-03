webpackJsonp([0,5,6],{

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(422);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(434)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/.npminstall/css-loader/0.28.7/css-loader/index.js!../../node_modules/.npminstall/sass-loader/6.0.6/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../node_modules/.npminstall/css-loader/0.28.7/css-loader/index.js!../../node_modules/.npminstall/sass-loader/6.0.6/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(451)

var Component = __webpack_require__(57)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(446),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['prefix', 'name'],
    methods: {
        handlerEvent: function handlerEvent() {
            this.$store.commit('setIcon', this.name);
        }
    }
});

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_vue__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icon_vue__);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            prefix: '',
            iconsAll: {
                'fa': __webpack_require__(457)
            },
            iconGroups: []
        };
    },
    props: ['type'],
    components: {
        'caf-icon': __WEBPACK_IMPORTED_MODULE_0__icon_vue___default.a
    },
    created: function created() {
        this.prefix = this.type;
        this.iconGroups = this.iconsAll[this.type] ? this.iconsAll[this.type] : [];
    }
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_number_is_integer__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_number_is_integer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_number_is_integer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_icons_icons_vue__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_icons_icons_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__component_icons_icons_vue__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    var validateCodeInput = function validateCodeInput(rule, value, callback) {
      if (_this.isParent && !_this.isEdit && value === '') {
        callback(new Error('请输入自定义编码'));
      } else {
        callback();
      }
    };
    var validateCodeSelect = function validateCodeSelect(rule, value, callback) {
      if (!_this.isParent && !_this.isEdit && value === '') {
        callback(new Error('请选择编码'));
      } else {
        callback();
      }
    };
    var checkSort = function checkSort(rule, value, callback) {
      if (value !== 0 && !value) {
        return callback(new Error('排序数不能为空'));
      }
      setTimeout(function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_number_is_integer___default()(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 0 || value > 18) {
            callback(new Error('必须在 0-100 之间'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      loading: false,
      treelist: [],
      defaultProps: {
        children: 'nodes',
        label: 'label'
      },
      dialogFormVisible: false,
      dialogIconsVisible: false,
      isEdit: false,
      currentData: null,
      activeName: 'fa',
      form: {
        isParent: true,
        menuSort: 0,
        id: '',
        code: '',
        codeInput: '',
        codeSelect: '',
        icon: '',
        label: '',
        parentId: ''
      },
      formRules: {
        'label': [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
        'menuSort': [{ validator: checkSort, trigger: 'blur' }],
        'codeInput': [{ required: true, message: '请输入自定义编码', trigger: 'blur' }],
        'codeSelect': [{ required: true, message: '请选择编码', trigger: 'change' }]
      },
      parentOptions: [],
      codeOptions: []
    };
  },

  computed: {
    checkCodeField: function checkCodeField() {
      return this.form.isParent && !this.isEdit;
    },
    isModify: function isModify() {
      // 修改按钮状态
      return this.currentData == null;
    },
    isRemove: function isRemove() {
      // 删除按钮状态
      return !(this.currentData && this.currentData.leaf);
    },
    isLeaf: function isLeaf() {
      // 新增状态，或者编辑状态下的叶子节点，可以显示父菜单下拉框
      return !this.isEdit || this.isEdit && this.currentData.leaf;
    },
    icon: function icon() {
      this.closeIconList();
      if (this.$store.state.icon != '') {
        this.form.icon = 'fa ' + this.$store.state.icon;
      }
      return this.$store.state.icon;
    }
  },
  methods: {
    /* Dialog */
    openDialog: function openDialog() {
      this.dialogFormVisible = true;
    },
    closeDialog: function closeDialog() {
      this.dialogFormVisible = false;
    },
    openIconList: function openIconList() {
      this.dialogIconsVisible = true;
    },
    closeIconList: function closeIconList() {
      this.dialogIconsVisible = false;
    },

    /* Form */
    initForm: function initForm() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$id = _ref.id,
          id = _ref$id === undefined ? '' : _ref$id,
          _ref$menuSort = _ref.menuSort,
          menuSort = _ref$menuSort === undefined ? 0 : _ref$menuSort,
          _ref$code = _ref.code,
          code = _ref$code === undefined ? '' : _ref$code,
          _ref$icon = _ref.icon,
          icon = _ref$icon === undefined ? '' : _ref$icon,
          _ref$label = _ref.label,
          label = _ref$label === undefined ? '' : _ref$label,
          _ref$parentId = _ref.parentId,
          parentId = _ref$parentId === undefined ? '' : _ref$parentId;

      var isEdit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var isParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // 清空表单数据
      this.$refs['menuForm'] && this.$refs['menuForm'].resetFields();
      this.$store.commit('setIcon', '');
      // 设置表单值
      this.isEdit = isEdit;
      this.form.isParent = isParent;
      this.form.id = id;
      this.form.menuSort = menuSort;
      this.form.codeInput = code;
      this.form.codeSelect = code;
      this.form.icon = icon;
      this.form.label = label;
      this.form.parentId = parentId;
      // 初始化下拉框选项
      this.initParent();
      this.initCode();
    },
    submitForm: function submitForm() {
      var _this2 = this;

      // 验证和提交表单
      this.$refs['menuForm'].validate(function (valid) {
        if (valid) {
          var _code = _this2.form.isParent ? _this2.form.codeInput : _this2.form.codeSelect;
          var _promise = _this2.isEdit ? __WEBPACK_IMPORTED_MODULE_1__api__["default"].menu_edit({
            id: _this2.form.id,
            menuSort: _this2.form.menuSort,
            code: _code,
            icon: _this2.form.icon,
            label: _this2.form.label,
            parentId: _this2.form.parentId
          }) : __WEBPACK_IMPORTED_MODULE_1__api__["default"].menu_add({
            code: _code,
            menuSort: _this2.form.menuSort,
            icon: _this2.form.icon,
            label: _this2.form.label,
            parentId: _this2.form.parentId
          });
          // 提交表单
          _promise.then(function (res) {
            // console.log(res);
            if (res.code == '1') {
              _this2.$message({
                type: 'success',
                message: res.message
              });
              _this2.closeDialog();
            } else {
              throw new Error(res.message);
            }
          }).then(function (res) {
            // 刷新树
            _this2.initTree();
          }).catch(function (err) {
            // error code
            _this2.$message({
              type: 'info',
              message: err.message
            });
          });
        }
      });
    },
    initParent: function initParent() {
      var _this3 = this;

      // 请求父菜单数据
      __WEBPACK_IMPORTED_MODULE_1__api__["default"].menu_options_parent().then(function (res) {
        _this3.parentOptions = res.data;
      });
    },
    initCode: function initCode() {
      var _this4 = this;

      // 请求编码数据
      __WEBPACK_IMPORTED_MODULE_1__api__["default"].menu_options_code().then(function (res) {
        _this4.codeOptions = res.data;
      });
    },

    /* Tree */
    initTree: function initTree() {
      var _this5 = this;

      // 初始化 Tree 组件
      this.loading = true;
      __WEBPACK_IMPORTED_MODULE_1__api__["default"].menu_list().then(function (res) {
        _this5.treelist = res.data;
      }).then(function () {
        _this5.loading = false;
      }).catch(function (err) {
        _this5.loading = false;
        // console.log(err)
        // 加载树失败
      });
    },
    createNode: function createNode() {
      // 创建节点
      this.isEdit = false;
      this.initForm();
      this.openDialog();
    },
    modifyNode: function modifyNode() {
      // 修改节点      
      this.isEdit = true;
      this.initForm(this.currentData, this.isEdit);
      this.openDialog();
    },
    removeNode: function removeNode() {
      var _this6 = this;

      // 删除节点
      this.$confirm('将删除该节点, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function (resConfirm) {
        if (resConfirm == 'confirm') {
          return __WEBPACK_IMPORTED_MODULE_1__api__["default"].menu_delete({
            'menuId': _this6.currentData.id
          });
        }
      }).then(function (resRemove) {
        if (resRemove.code == '1') {
          // this.$refs.tree.store.remove(this.currentData);
          _this6.initTree();
          _this6.currentData = null;
          _this6.$message({
            type: 'success',
            message: resRemove.message
          });
        } else {
          throw new Error(resRemove.message);
        }
      }).catch(function (err) {
        var message = err == 'cancel' ? '取消删除' : err.message;
        _this6.$message({
          type: 'info',
          message: message
        });
      });
    },
    setCurrentChange: function setCurrentChange(data) {
      this.currentData = data;
    },
    renderContent: function renderContent(h, _ref2) {
      var node = _ref2.node,
          data = _ref2.data,
          store = _ref2.store;
      // 渲染节点内容
      return h(
        'span',
        null,
        [node.label]
      );
      // return (
      //   <span>
      //     <span>{node.label}</span>
      //     <span style="float: right; margin-right: 20px">
      //       <el-button icon="edit" size="mini" on-click={() => this.modifyNode(store, data)}>修改</el-button>
      //       <el-button v-show={node.isLeaf} icon="delete" size="mini" on-click={() => this.removeNode(store, data)}>删除</el-button>
      //     </span>
      //   </span>);
    }
  },
  mounted: function mounted() {
    this.initTree();
  },

  components: {
    'caf-icons': __WEBPACK_IMPORTED_MODULE_2__component_icons_icons_vue___default.a
  }
});

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_default_index_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_scss__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__index_vue__);








__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib___default.a);

new __WEBPACK_IMPORTED_MODULE_2_vue__["default"]({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_3__store_index__["default"],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_5__index_vue___default.a);
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getRootPath"] = getRootPath;
/* harmony export (immutable) */ __webpack_exports__["fetch"] = fetch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_promise__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_object_define_property__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);





function getRootPath() {
    var pathName = window.location.pathname.substring(1);
    var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    if (webName == '') {
        return window.location.protocol + '//' + window.location.host + '';
    } else {
        return window.location.protocol + '//' + window.location.host + '/' + webName + '';
    }
}
function fetch() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    type = type.toUpperCase();
    var requestConfig = {
        'url': url,
        'method': type,
        'baseURL': getRootPath(),
        // 'baseURL': '/api',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    };
    if (type == 'GET') {
        data._t = new Date() * 1;
        Object.defineProperty(requestConfig, 'params', {
            enumerable: true, // 在自定义配置的时候，必须设置为可枚举
            value: data
        });
    }
    if (type == 'POST') {
        Object.defineProperty(requestConfig, 'data', {
            enumerable: true, // 在自定义配置的时候，必须设置为可枚举
            value: data
        });
    }

    for (var key in config) {
        // 扩展选项
        __WEBPACK_IMPORTED_MODULE_1__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_object_define_property___default()(requestConfig, key, {
            enumerable: true, // 在自定义配置的时候，必须设置为可枚举
            value: config[key]
        });
    }
    return new __WEBPACK_IMPORTED_MODULE_0__Users_xuzhijun_projects_works_taibao_caf_admin_node_modules_npminstall_babel_runtime_6_23_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_axios___default()(requestConfig).then(function (res) {
            if (res.status === 200) {
                resolve(res.data);
            } else if (res.status === 403) {
                throw res.status;
            }
        }).catch(function (err) {
            if (err === 403) {
                window.confirm("用户已经超时注销，请重新登录");
            } else {
                reject(err);
            }
        });
    });
}
/* harmony default export */ __webpack_exports__["default"] = ({
    resource_list: function resource_list(data) {
        // 资���列表
        return fetch('/applicationFunction/getFunctionTree', data);
    },
    resource_options_parent: function resource_options_parent(data) {
        // 资源父菜单列表
        return fetch('/applicationFunction/getFunctionParentIds', data);
    },
    resource_add: function resource_add(data) {
        return fetch('/applicationFunction/saveAddFunction', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    resource_edit: function resource_edit(data) {
        return fetch('/applicationFunction/saveEditFunction', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    resource_delete: function resource_delete(data) {
        return fetch('/applicationFunction/deleteFunction', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    menu_list: function menu_list(data) {
        return fetch('/shareCompon/getMenuTree', data);
    },
    menu_options_parent: function menu_options_parent(data) {
        return fetch('/shareCompon/getParentIds', data);
    },
    menu_options_code: function menu_options_code(data) {
        return fetch('/shareCompon/getCodes', data);
    },
    menu_add: function menu_add(data) {
        return fetch('/shareCompon/saveAddMenu', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    menu_edit: function menu_edit(data) {
        return fetch('/shareCompon/saveEditMenu', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    menu_delete: function menu_delete(data) {
        return fetch('/shareCompon/deleteMenu', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    org_list: function org_list(data) {
        return fetch('/applicationOrg/getOrgTree', data);
    },
    org_options_parent: function org_options_parent(data) {
        return fetch('/applicationOrg/getOrgParentIds', data);
    },
    org_add: function org_add(data) {
        return fetch('/applicationOrg/saveAddOrg', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    org_edit: function org_edit(data) {
        return fetch('/applicationOrg/saveEditOrg', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    org_delete: function org_delete(data) {
        return fetch('/applicationOrg/deleteOrg', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    role_role_list: function role_role_list(data) {
        return fetch('/applicationRole/getAllrole', data);
    },
    role_function_list: function role_function_list(data) {
        return fetch('/roleFunction/roleFunctionMarkList', data);
    },
    role_function_list_table: function role_function_list_table(data) {
        return fetch('/roleFunction/findFunctionListByRoleIdTable', data);
    },
    role_function_save: function role_function_save(data) {
        return fetch('/roleFunction/saveRoleAndFunction', __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data), 'POST');
    },
    role_permission_list: function role_permission_list(data) {
        return fetch('/roleFunctionPermission/getPermission', data);
    },
    role_permission_save: function role_permission_save(data) {
        return fetch('/roleFunctionPermission/savePermission', data, 'POST', {
            'headers': {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
    },
    role_function_permission_save: function role_function_permission_save(data) {
        return fetch('/roleFunctionPermission/saveRoleFunctionPermission', data, 'POST', {
            'headers': {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
    }
});

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(436) + ");\n  src: url(" + __webpack_require__(435) + "?#iefix&v=4.7.0) format(\"embedded-opentype\"), url(" + __webpack_require__(439) + ") format(\"woff2\"), url(" + __webpack_require__(440) + ") format(\"woff\"), url(" + __webpack_require__(438) + ") format(\"truetype\"), url(" + __webpack_require__(437) + "#fontawesomeregular) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.el-icon-fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/* makes the font 33% larger relative to the icon container */\n.el-icon-fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.el-icon-fa-2x {\n  font-size: 2em; }\n\n.el-icon-fa-3x {\n  font-size: 3em; }\n\n.el-icon-fa-4x {\n  font-size: 4em; }\n\n.el-icon-fa-5x {\n  font-size: 5em; }\n\n.el-icon-fa-fw {\n  width: 1.28571em;\n  text-align: center; }\n\n.el-icon-fa-ul {\n  padding-left: 0;\n  margin-left: 2.14286em;\n  list-style-type: none; }\n  .el-icon-fa-ul > li {\n    position: relative; }\n\n.el-icon-fa-li {\n  position: absolute;\n  left: -2.14286em;\n  width: 2.14286em;\n  top: 0.14286em;\n  text-align: center; }\n  .el-icon-fa-li.el-icon-fa-lg {\n    left: -1.85714em; }\n\n.el-icon-fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em; }\n\n.el-icon-fa-pull-left {\n  float: left; }\n\n.el-icon-fa-pull-right {\n  float: right; }\n\n.el-icon-fa.el-icon-fa-pull-left {\n  margin-right: .3em; }\n\n.el-icon-fa.el-icon-fa-pull-right {\n  margin-left: .3em; }\n\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right; }\n\n.pull-left {\n  float: left; }\n\n.el-icon-fa.pull-left {\n  margin-right: .3em; }\n\n.el-icon-fa.pull-right {\n  margin-left: .3em; }\n\n.el-icon-fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n\n.el-icon-fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.el-icon-fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.el-icon-fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.el-icon-fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.el-icon-fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.el-icon-fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n:root .el-icon-fa-rotate-90,\n:root .el-icon-fa-rotate-180,\n:root .el-icon-fa-rotate-270,\n:root .el-icon-fa-flip-horizontal,\n:root .el-icon-fa-flip-vertical {\n  filter: none; }\n\n.el-icon-fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n\n.el-icon-fa-stack-1x, .el-icon-fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n\n.el-icon-fa-stack-1x {\n  line-height: inherit; }\n\n.el-icon-fa-stack-2x {\n  font-size: 2em; }\n\n.el-icon-fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.el-icon-fa-glass:before {\n  content: \"\\F000\"; }\n\n.el-icon-fa-music:before {\n  content: \"\\F001\"; }\n\n.el-icon-fa-search:before {\n  content: \"\\F002\"; }\n\n.el-icon-fa-envelope-o:before {\n  content: \"\\F003\"; }\n\n.el-icon-fa-heart:before {\n  content: \"\\F004\"; }\n\n.el-icon-fa-star:before {\n  content: \"\\F005\"; }\n\n.el-icon-fa-star-o:before {\n  content: \"\\F006\"; }\n\n.el-icon-fa-user:before {\n  content: \"\\F007\"; }\n\n.el-icon-fa-film:before {\n  content: \"\\F008\"; }\n\n.el-icon-fa-th-large:before {\n  content: \"\\F009\"; }\n\n.el-icon-fa-th:before {\n  content: \"\\F00A\"; }\n\n.el-icon-fa-th-list:before {\n  content: \"\\F00B\"; }\n\n.el-icon-fa-check:before {\n  content: \"\\F00C\"; }\n\n.el-icon-fa-remove:before,\n.el-icon-fa-close:before,\n.el-icon-fa-times:before {\n  content: \"\\F00D\"; }\n\n.el-icon-fa-search-plus:before {\n  content: \"\\F00E\"; }\n\n.el-icon-fa-search-minus:before {\n  content: \"\\F010\"; }\n\n.el-icon-fa-power-off:before {\n  content: \"\\F011\"; }\n\n.el-icon-fa-signal:before {\n  content: \"\\F012\"; }\n\n.el-icon-fa-gear:before,\n.el-icon-fa-cog:before {\n  content: \"\\F013\"; }\n\n.el-icon-fa-trash-o:before {\n  content: \"\\F014\"; }\n\n.el-icon-fa-home:before {\n  content: \"\\F015\"; }\n\n.el-icon-fa-file-o:before {\n  content: \"\\F016\"; }\n\n.el-icon-fa-clock-o:before {\n  content: \"\\F017\"; }\n\n.el-icon-fa-road:before {\n  content: \"\\F018\"; }\n\n.el-icon-fa-download:before {\n  content: \"\\F019\"; }\n\n.el-icon-fa-arrow-circle-o-down:before {\n  content: \"\\F01A\"; }\n\n.el-icon-fa-arrow-circle-o-up:before {\n  content: \"\\F01B\"; }\n\n.el-icon-fa-inbox:before {\n  content: \"\\F01C\"; }\n\n.el-icon-fa-play-circle-o:before {\n  content: \"\\F01D\"; }\n\n.el-icon-fa-rotate-right:before,\n.el-icon-fa-repeat:before {\n  content: \"\\F01E\"; }\n\n.el-icon-fa-refresh:before {\n  content: \"\\F021\"; }\n\n.el-icon-fa-list-alt:before {\n  content: \"\\F022\"; }\n\n.el-icon-fa-lock:before {\n  content: \"\\F023\"; }\n\n.el-icon-fa-flag:before {\n  content: \"\\F024\"; }\n\n.el-icon-fa-headphones:before {\n  content: \"\\F025\"; }\n\n.el-icon-fa-volume-off:before {\n  content: \"\\F026\"; }\n\n.el-icon-fa-volume-down:before {\n  content: \"\\F027\"; }\n\n.el-icon-fa-volume-up:before {\n  content: \"\\F028\"; }\n\n.el-icon-fa-qrcode:before {\n  content: \"\\F029\"; }\n\n.el-icon-fa-barcode:before {\n  content: \"\\F02A\"; }\n\n.el-icon-fa-tag:before {\n  content: \"\\F02B\"; }\n\n.el-icon-fa-tags:before {\n  content: \"\\F02C\"; }\n\n.el-icon-fa-book:before {\n  content: \"\\F02D\"; }\n\n.el-icon-fa-bookmark:before {\n  content: \"\\F02E\"; }\n\n.el-icon-fa-print:before {\n  content: \"\\F02F\"; }\n\n.el-icon-fa-camera:before {\n  content: \"\\F030\"; }\n\n.el-icon-fa-font:before {\n  content: \"\\F031\"; }\n\n.el-icon-fa-bold:before {\n  content: \"\\F032\"; }\n\n.el-icon-fa-italic:before {\n  content: \"\\F033\"; }\n\n.el-icon-fa-text-height:before {\n  content: \"\\F034\"; }\n\n.el-icon-fa-text-width:before {\n  content: \"\\F035\"; }\n\n.el-icon-fa-align-left:before {\n  content: \"\\F036\"; }\n\n.el-icon-fa-align-center:before {\n  content: \"\\F037\"; }\n\n.el-icon-fa-align-right:before {\n  content: \"\\F038\"; }\n\n.el-icon-fa-align-justify:before {\n  content: \"\\F039\"; }\n\n.el-icon-fa-list:before {\n  content: \"\\F03A\"; }\n\n.el-icon-fa-dedent:before,\n.el-icon-fa-outdent:before {\n  content: \"\\F03B\"; }\n\n.el-icon-fa-indent:before {\n  content: \"\\F03C\"; }\n\n.el-icon-fa-video-camera:before {\n  content: \"\\F03D\"; }\n\n.el-icon-fa-photo:before,\n.el-icon-fa-image:before,\n.el-icon-fa-picture-o:before {\n  content: \"\\F03E\"; }\n\n.el-icon-fa-pencil:before {\n  content: \"\\F040\"; }\n\n.el-icon-fa-map-marker:before {\n  content: \"\\F041\"; }\n\n.el-icon-fa-adjust:before {\n  content: \"\\F042\"; }\n\n.el-icon-fa-tint:before {\n  content: \"\\F043\"; }\n\n.el-icon-fa-edit:before,\n.el-icon-fa-pencil-square-o:before {\n  content: \"\\F044\"; }\n\n.el-icon-fa-share-square-o:before {\n  content: \"\\F045\"; }\n\n.el-icon-fa-check-square-o:before {\n  content: \"\\F046\"; }\n\n.el-icon-fa-arrows:before {\n  content: \"\\F047\"; }\n\n.el-icon-fa-step-backward:before {\n  content: \"\\F048\"; }\n\n.el-icon-fa-fast-backward:before {\n  content: \"\\F049\"; }\n\n.el-icon-fa-backward:before {\n  content: \"\\F04A\"; }\n\n.el-icon-fa-play:before {\n  content: \"\\F04B\"; }\n\n.el-icon-fa-pause:before {\n  content: \"\\F04C\"; }\n\n.el-icon-fa-stop:before {\n  content: \"\\F04D\"; }\n\n.el-icon-fa-forward:before {\n  content: \"\\F04E\"; }\n\n.el-icon-fa-fast-forward:before {\n  content: \"\\F050\"; }\n\n.el-icon-fa-step-forward:before {\n  content: \"\\F051\"; }\n\n.el-icon-fa-eject:before {\n  content: \"\\F052\"; }\n\n.el-icon-fa-chevron-left:before {\n  content: \"\\F053\"; }\n\n.el-icon-fa-chevron-right:before {\n  content: \"\\F054\"; }\n\n.el-icon-fa-plus-circle:before {\n  content: \"\\F055\"; }\n\n.el-icon-fa-minus-circle:before {\n  content: \"\\F056\"; }\n\n.el-icon-fa-times-circle:before {\n  content: \"\\F057\"; }\n\n.el-icon-fa-check-circle:before {\n  content: \"\\F058\"; }\n\n.el-icon-fa-question-circle:before {\n  content: \"\\F059\"; }\n\n.el-icon-fa-info-circle:before {\n  content: \"\\F05A\"; }\n\n.el-icon-fa-crosshairs:before {\n  content: \"\\F05B\"; }\n\n.el-icon-fa-times-circle-o:before {\n  content: \"\\F05C\"; }\n\n.el-icon-fa-check-circle-o:before {\n  content: \"\\F05D\"; }\n\n.el-icon-fa-ban:before {\n  content: \"\\F05E\"; }\n\n.el-icon-fa-arrow-left:before {\n  content: \"\\F060\"; }\n\n.el-icon-fa-arrow-right:before {\n  content: \"\\F061\"; }\n\n.el-icon-fa-arrow-up:before {\n  content: \"\\F062\"; }\n\n.el-icon-fa-arrow-down:before {\n  content: \"\\F063\"; }\n\n.el-icon-fa-mail-forward:before,\n.el-icon-fa-share:before {\n  content: \"\\F064\"; }\n\n.el-icon-fa-expand:before {\n  content: \"\\F065\"; }\n\n.el-icon-fa-compress:before {\n  content: \"\\F066\"; }\n\n.el-icon-fa-plus:before {\n  content: \"\\F067\"; }\n\n.el-icon-fa-minus:before {\n  content: \"\\F068\"; }\n\n.el-icon-fa-asterisk:before {\n  content: \"\\F069\"; }\n\n.el-icon-fa-exclamation-circle:before {\n  content: \"\\F06A\"; }\n\n.el-icon-fa-gift:before {\n  content: \"\\F06B\"; }\n\n.el-icon-fa-leaf:before {\n  content: \"\\F06C\"; }\n\n.el-icon-fa-fire:before {\n  content: \"\\F06D\"; }\n\n.el-icon-fa-eye:before {\n  content: \"\\F06E\"; }\n\n.el-icon-fa-eye-slash:before {\n  content: \"\\F070\"; }\n\n.el-icon-fa-warning:before,\n.el-icon-fa-exclamation-triangle:before {\n  content: \"\\F071\"; }\n\n.el-icon-fa-plane:before {\n  content: \"\\F072\"; }\n\n.el-icon-fa-calendar:before {\n  content: \"\\F073\"; }\n\n.el-icon-fa-random:before {\n  content: \"\\F074\"; }\n\n.el-icon-fa-comment:before {\n  content: \"\\F075\"; }\n\n.el-icon-fa-magnet:before {\n  content: \"\\F076\"; }\n\n.el-icon-fa-chevron-up:before {\n  content: \"\\F077\"; }\n\n.el-icon-fa-chevron-down:before {\n  content: \"\\F078\"; }\n\n.el-icon-fa-retweet:before {\n  content: \"\\F079\"; }\n\n.el-icon-fa-shopping-cart:before {\n  content: \"\\F07A\"; }\n\n.el-icon-fa-folder:before {\n  content: \"\\F07B\"; }\n\n.el-icon-fa-folder-open:before {\n  content: \"\\F07C\"; }\n\n.el-icon-fa-arrows-v:before {\n  content: \"\\F07D\"; }\n\n.el-icon-fa-arrows-h:before {\n  content: \"\\F07E\"; }\n\n.el-icon-fa-bar-chart-o:before,\n.el-icon-fa-bar-chart:before {\n  content: \"\\F080\"; }\n\n.el-icon-fa-twitter-square:before {\n  content: \"\\F081\"; }\n\n.el-icon-fa-facebook-square:before {\n  content: \"\\F082\"; }\n\n.el-icon-fa-camera-retro:before {\n  content: \"\\F083\"; }\n\n.el-icon-fa-key:before {\n  content: \"\\F084\"; }\n\n.el-icon-fa-gears:before,\n.el-icon-fa-cogs:before {\n  content: \"\\F085\"; }\n\n.el-icon-fa-comments:before {\n  content: \"\\F086\"; }\n\n.el-icon-fa-thumbs-o-up:before {\n  content: \"\\F087\"; }\n\n.el-icon-fa-thumbs-o-down:before {\n  content: \"\\F088\"; }\n\n.el-icon-fa-star-half:before {\n  content: \"\\F089\"; }\n\n.el-icon-fa-heart-o:before {\n  content: \"\\F08A\"; }\n\n.el-icon-fa-sign-out:before {\n  content: \"\\F08B\"; }\n\n.el-icon-fa-linkedin-square:before {\n  content: \"\\F08C\"; }\n\n.el-icon-fa-thumb-tack:before {\n  content: \"\\F08D\"; }\n\n.el-icon-fa-external-link:before {\n  content: \"\\F08E\"; }\n\n.el-icon-fa-sign-in:before {\n  content: \"\\F090\"; }\n\n.el-icon-fa-trophy:before {\n  content: \"\\F091\"; }\n\n.el-icon-fa-github-square:before {\n  content: \"\\F092\"; }\n\n.el-icon-fa-upload:before {\n  content: \"\\F093\"; }\n\n.el-icon-fa-lemon-o:before {\n  content: \"\\F094\"; }\n\n.el-icon-fa-phone:before {\n  content: \"\\F095\"; }\n\n.el-icon-fa-square-o:before {\n  content: \"\\F096\"; }\n\n.el-icon-fa-bookmark-o:before {\n  content: \"\\F097\"; }\n\n.el-icon-fa-phone-square:before {\n  content: \"\\F098\"; }\n\n.el-icon-fa-twitter:before {\n  content: \"\\F099\"; }\n\n.el-icon-fa-facebook-f:before,\n.el-icon-fa-facebook:before {\n  content: \"\\F09A\"; }\n\n.el-icon-fa-github:before {\n  content: \"\\F09B\"; }\n\n.el-icon-fa-unlock:before {\n  content: \"\\F09C\"; }\n\n.el-icon-fa-credit-card:before {\n  content: \"\\F09D\"; }\n\n.el-icon-fa-feed:before,\n.el-icon-fa-rss:before {\n  content: \"\\F09E\"; }\n\n.el-icon-fa-hdd-o:before {\n  content: \"\\F0A0\"; }\n\n.el-icon-fa-bullhorn:before {\n  content: \"\\F0A1\"; }\n\n.el-icon-fa-bell:before {\n  content: \"\\F0F3\"; }\n\n.el-icon-fa-certificate:before {\n  content: \"\\F0A3\"; }\n\n.el-icon-fa-hand-o-right:before {\n  content: \"\\F0A4\"; }\n\n.el-icon-fa-hand-o-left:before {\n  content: \"\\F0A5\"; }\n\n.el-icon-fa-hand-o-up:before {\n  content: \"\\F0A6\"; }\n\n.el-icon-fa-hand-o-down:before {\n  content: \"\\F0A7\"; }\n\n.el-icon-fa-arrow-circle-left:before {\n  content: \"\\F0A8\"; }\n\n.el-icon-fa-arrow-circle-right:before {\n  content: \"\\F0A9\"; }\n\n.el-icon-fa-arrow-circle-up:before {\n  content: \"\\F0AA\"; }\n\n.el-icon-fa-arrow-circle-down:before {\n  content: \"\\F0AB\"; }\n\n.el-icon-fa-globe:before {\n  content: \"\\F0AC\"; }\n\n.el-icon-fa-wrench:before {\n  content: \"\\F0AD\"; }\n\n.el-icon-fa-tasks:before {\n  content: \"\\F0AE\"; }\n\n.el-icon-fa-filter:before {\n  content: \"\\F0B0\"; }\n\n.el-icon-fa-briefcase:before {\n  content: \"\\F0B1\"; }\n\n.el-icon-fa-arrows-alt:before {\n  content: \"\\F0B2\"; }\n\n.el-icon-fa-group:before,\n.el-icon-fa-users:before {\n  content: \"\\F0C0\"; }\n\n.el-icon-fa-chain:before,\n.el-icon-fa-link:before {\n  content: \"\\F0C1\"; }\n\n.el-icon-fa-cloud:before {\n  content: \"\\F0C2\"; }\n\n.el-icon-fa-flask:before {\n  content: \"\\F0C3\"; }\n\n.el-icon-fa-cut:before,\n.el-icon-fa-scissors:before {\n  content: \"\\F0C4\"; }\n\n.el-icon-fa-copy:before,\n.el-icon-fa-files-o:before {\n  content: \"\\F0C5\"; }\n\n.el-icon-fa-paperclip:before {\n  content: \"\\F0C6\"; }\n\n.el-icon-fa-save:before,\n.el-icon-fa-floppy-o:before {\n  content: \"\\F0C7\"; }\n\n.el-icon-fa-square:before {\n  content: \"\\F0C8\"; }\n\n.el-icon-fa-navicon:before,\n.el-icon-fa-reorder:before,\n.el-icon-fa-bars:before {\n  content: \"\\F0C9\"; }\n\n.el-icon-fa-list-ul:before {\n  content: \"\\F0CA\"; }\n\n.el-icon-fa-list-ol:before {\n  content: \"\\F0CB\"; }\n\n.el-icon-fa-strikethrough:before {\n  content: \"\\F0CC\"; }\n\n.el-icon-fa-underline:before {\n  content: \"\\F0CD\"; }\n\n.el-icon-fa-table:before {\n  content: \"\\F0CE\"; }\n\n.el-icon-fa-magic:before {\n  content: \"\\F0D0\"; }\n\n.el-icon-fa-truck:before {\n  content: \"\\F0D1\"; }\n\n.el-icon-fa-pinterest:before {\n  content: \"\\F0D2\"; }\n\n.el-icon-fa-pinterest-square:before {\n  content: \"\\F0D3\"; }\n\n.el-icon-fa-google-plus-square:before {\n  content: \"\\F0D4\"; }\n\n.el-icon-fa-google-plus:before {\n  content: \"\\F0D5\"; }\n\n.el-icon-fa-money:before {\n  content: \"\\F0D6\"; }\n\n.el-icon-fa-caret-down:before {\n  content: \"\\F0D7\"; }\n\n.el-icon-fa-caret-up:before {\n  content: \"\\F0D8\"; }\n\n.el-icon-fa-caret-left:before {\n  content: \"\\F0D9\"; }\n\n.el-icon-fa-caret-right:before {\n  content: \"\\F0DA\"; }\n\n.el-icon-fa-columns:before {\n  content: \"\\F0DB\"; }\n\n.el-icon-fa-unsorted:before,\n.el-icon-fa-sort:before {\n  content: \"\\F0DC\"; }\n\n.el-icon-fa-sort-down:before,\n.el-icon-fa-sort-desc:before {\n  content: \"\\F0DD\"; }\n\n.el-icon-fa-sort-up:before,\n.el-icon-fa-sort-asc:before {\n  content: \"\\F0DE\"; }\n\n.el-icon-fa-envelope:before {\n  content: \"\\F0E0\"; }\n\n.el-icon-fa-linkedin:before {\n  content: \"\\F0E1\"; }\n\n.el-icon-fa-rotate-left:before,\n.el-icon-fa-undo:before {\n  content: \"\\F0E2\"; }\n\n.el-icon-fa-legal:before,\n.el-icon-fa-gavel:before {\n  content: \"\\F0E3\"; }\n\n.el-icon-fa-dashboard:before,\n.el-icon-fa-tachometer:before {\n  content: \"\\F0E4\"; }\n\n.el-icon-fa-comment-o:before {\n  content: \"\\F0E5\"; }\n\n.el-icon-fa-comments-o:before {\n  content: \"\\F0E6\"; }\n\n.el-icon-fa-flash:before,\n.el-icon-fa-bolt:before {\n  content: \"\\F0E7\"; }\n\n.el-icon-fa-sitemap:before {\n  content: \"\\F0E8\"; }\n\n.el-icon-fa-umbrella:before {\n  content: \"\\F0E9\"; }\n\n.el-icon-fa-paste:before,\n.el-icon-fa-clipboard:before {\n  content: \"\\F0EA\"; }\n\n.el-icon-fa-lightbulb-o:before {\n  content: \"\\F0EB\"; }\n\n.el-icon-fa-exchange:before {\n  content: \"\\F0EC\"; }\n\n.el-icon-fa-cloud-download:before {\n  content: \"\\F0ED\"; }\n\n.el-icon-fa-cloud-upload:before {\n  content: \"\\F0EE\"; }\n\n.el-icon-fa-user-md:before {\n  content: \"\\F0F0\"; }\n\n.el-icon-fa-stethoscope:before {\n  content: \"\\F0F1\"; }\n\n.el-icon-fa-suitcase:before {\n  content: \"\\F0F2\"; }\n\n.el-icon-fa-bell-o:before {\n  content: \"\\F0A2\"; }\n\n.el-icon-fa-coffee:before {\n  content: \"\\F0F4\"; }\n\n.el-icon-fa-cutlery:before {\n  content: \"\\F0F5\"; }\n\n.el-icon-fa-file-text-o:before {\n  content: \"\\F0F6\"; }\n\n.el-icon-fa-building-o:before {\n  content: \"\\F0F7\"; }\n\n.el-icon-fa-hospital-o:before {\n  content: \"\\F0F8\"; }\n\n.el-icon-fa-ambulance:before {\n  content: \"\\F0F9\"; }\n\n.el-icon-fa-medkit:before {\n  content: \"\\F0FA\"; }\n\n.el-icon-fa-fighter-jet:before {\n  content: \"\\F0FB\"; }\n\n.el-icon-fa-beer:before {\n  content: \"\\F0FC\"; }\n\n.el-icon-fa-h-square:before {\n  content: \"\\F0FD\"; }\n\n.el-icon-fa-plus-square:before {\n  content: \"\\F0FE\"; }\n\n.el-icon-fa-angle-double-left:before {\n  content: \"\\F100\"; }\n\n.el-icon-fa-angle-double-right:before {\n  content: \"\\F101\"; }\n\n.el-icon-fa-angle-double-up:before {\n  content: \"\\F102\"; }\n\n.el-icon-fa-angle-double-down:before {\n  content: \"\\F103\"; }\n\n.el-icon-fa-angle-left:before {\n  content: \"\\F104\"; }\n\n.el-icon-fa-angle-right:before {\n  content: \"\\F105\"; }\n\n.el-icon-fa-angle-up:before {\n  content: \"\\F106\"; }\n\n.el-icon-fa-angle-down:before {\n  content: \"\\F107\"; }\n\n.el-icon-fa-desktop:before {\n  content: \"\\F108\"; }\n\n.el-icon-fa-laptop:before {\n  content: \"\\F109\"; }\n\n.el-icon-fa-tablet:before {\n  content: \"\\F10A\"; }\n\n.el-icon-fa-mobile-phone:before,\n.el-icon-fa-mobile:before {\n  content: \"\\F10B\"; }\n\n.el-icon-fa-circle-o:before {\n  content: \"\\F10C\"; }\n\n.el-icon-fa-quote-left:before {\n  content: \"\\F10D\"; }\n\n.el-icon-fa-quote-right:before {\n  content: \"\\F10E\"; }\n\n.el-icon-fa-spinner:before {\n  content: \"\\F110\"; }\n\n.el-icon-fa-circle:before {\n  content: \"\\F111\"; }\n\n.el-icon-fa-mail-reply:before,\n.el-icon-fa-reply:before {\n  content: \"\\F112\"; }\n\n.el-icon-fa-github-alt:before {\n  content: \"\\F113\"; }\n\n.el-icon-fa-folder-o:before {\n  content: \"\\F114\"; }\n\n.el-icon-fa-folder-open-o:before {\n  content: \"\\F115\"; }\n\n.el-icon-fa-smile-o:before {\n  content: \"\\F118\"; }\n\n.el-icon-fa-frown-o:before {\n  content: \"\\F119\"; }\n\n.el-icon-fa-meh-o:before {\n  content: \"\\F11A\"; }\n\n.el-icon-fa-gamepad:before {\n  content: \"\\F11B\"; }\n\n.el-icon-fa-keyboard-o:before {\n  content: \"\\F11C\"; }\n\n.el-icon-fa-flag-o:before {\n  content: \"\\F11D\"; }\n\n.el-icon-fa-flag-checkered:before {\n  content: \"\\F11E\"; }\n\n.el-icon-fa-terminal:before {\n  content: \"\\F120\"; }\n\n.el-icon-fa-code:before {\n  content: \"\\F121\"; }\n\n.el-icon-fa-mail-reply-all:before,\n.el-icon-fa-reply-all:before {\n  content: \"\\F122\"; }\n\n.el-icon-fa-star-half-empty:before,\n.el-icon-fa-star-half-full:before,\n.el-icon-fa-star-half-o:before {\n  content: \"\\F123\"; }\n\n.el-icon-fa-location-arrow:before {\n  content: \"\\F124\"; }\n\n.el-icon-fa-crop:before {\n  content: \"\\F125\"; }\n\n.el-icon-fa-code-fork:before {\n  content: \"\\F126\"; }\n\n.el-icon-fa-unlink:before,\n.el-icon-fa-chain-broken:before {\n  content: \"\\F127\"; }\n\n.el-icon-fa-question:before {\n  content: \"\\F128\"; }\n\n.el-icon-fa-info:before {\n  content: \"\\F129\"; }\n\n.el-icon-fa-exclamation:before {\n  content: \"\\F12A\"; }\n\n.el-icon-fa-superscript:before {\n  content: \"\\F12B\"; }\n\n.el-icon-fa-subscript:before {\n  content: \"\\F12C\"; }\n\n.el-icon-fa-eraser:before {\n  content: \"\\F12D\"; }\n\n.el-icon-fa-puzzle-piece:before {\n  content: \"\\F12E\"; }\n\n.el-icon-fa-microphone:before {\n  content: \"\\F130\"; }\n\n.el-icon-fa-microphone-slash:before {\n  content: \"\\F131\"; }\n\n.el-icon-fa-shield:before {\n  content: \"\\F132\"; }\n\n.el-icon-fa-calendar-o:before {\n  content: \"\\F133\"; }\n\n.el-icon-fa-fire-extinguisher:before {\n  content: \"\\F134\"; }\n\n.el-icon-fa-rocket:before {\n  content: \"\\F135\"; }\n\n.el-icon-fa-maxcdn:before {\n  content: \"\\F136\"; }\n\n.el-icon-fa-chevron-circle-left:before {\n  content: \"\\F137\"; }\n\n.el-icon-fa-chevron-circle-right:before {\n  content: \"\\F138\"; }\n\n.el-icon-fa-chevron-circle-up:before {\n  content: \"\\F139\"; }\n\n.el-icon-fa-chevron-circle-down:before {\n  content: \"\\F13A\"; }\n\n.el-icon-fa-html5:before {\n  content: \"\\F13B\"; }\n\n.el-icon-fa-css3:before {\n  content: \"\\F13C\"; }\n\n.el-icon-fa-anchor:before {\n  content: \"\\F13D\"; }\n\n.el-icon-fa-unlock-alt:before {\n  content: \"\\F13E\"; }\n\n.el-icon-fa-bullseye:before {\n  content: \"\\F140\"; }\n\n.el-icon-fa-ellipsis-h:before {\n  content: \"\\F141\"; }\n\n.el-icon-fa-ellipsis-v:before {\n  content: \"\\F142\"; }\n\n.el-icon-fa-rss-square:before {\n  content: \"\\F143\"; }\n\n.el-icon-fa-play-circle:before {\n  content: \"\\F144\"; }\n\n.el-icon-fa-ticket:before {\n  content: \"\\F145\"; }\n\n.el-icon-fa-minus-square:before {\n  content: \"\\F146\"; }\n\n.el-icon-fa-minus-square-o:before {\n  content: \"\\F147\"; }\n\n.el-icon-fa-level-up:before {\n  content: \"\\F148\"; }\n\n.el-icon-fa-level-down:before {\n  content: \"\\F149\"; }\n\n.el-icon-fa-check-square:before {\n  content: \"\\F14A\"; }\n\n.el-icon-fa-pencil-square:before {\n  content: \"\\F14B\"; }\n\n.el-icon-fa-external-link-square:before {\n  content: \"\\F14C\"; }\n\n.el-icon-fa-share-square:before {\n  content: \"\\F14D\"; }\n\n.el-icon-fa-compass:before {\n  content: \"\\F14E\"; }\n\n.el-icon-fa-toggle-down:before,\n.el-icon-fa-caret-square-o-down:before {\n  content: \"\\F150\"; }\n\n.el-icon-fa-toggle-up:before,\n.el-icon-fa-caret-square-o-up:before {\n  content: \"\\F151\"; }\n\n.el-icon-fa-toggle-right:before,\n.el-icon-fa-caret-square-o-right:before {\n  content: \"\\F152\"; }\n\n.el-icon-fa-euro:before,\n.el-icon-fa-eur:before {\n  content: \"\\F153\"; }\n\n.el-icon-fa-gbp:before {\n  content: \"\\F154\"; }\n\n.el-icon-fa-dollar:before,\n.el-icon-fa-usd:before {\n  content: \"\\F155\"; }\n\n.el-icon-fa-rupee:before,\n.el-icon-fa-inr:before {\n  content: \"\\F156\"; }\n\n.el-icon-fa-cny:before,\n.el-icon-fa-rmb:before,\n.el-icon-fa-yen:before,\n.el-icon-fa-jpy:before {\n  content: \"\\F157\"; }\n\n.el-icon-fa-ruble:before,\n.el-icon-fa-rouble:before,\n.el-icon-fa-rub:before {\n  content: \"\\F158\"; }\n\n.el-icon-fa-won:before,\n.el-icon-fa-krw:before {\n  content: \"\\F159\"; }\n\n.el-icon-fa-bitcoin:before,\n.el-icon-fa-btc:before {\n  content: \"\\F15A\"; }\n\n.el-icon-fa-file:before {\n  content: \"\\F15B\"; }\n\n.el-icon-fa-file-text:before {\n  content: \"\\F15C\"; }\n\n.el-icon-fa-sort-alpha-asc:before {\n  content: \"\\F15D\"; }\n\n.el-icon-fa-sort-alpha-desc:before {\n  content: \"\\F15E\"; }\n\n.el-icon-fa-sort-amount-asc:before {\n  content: \"\\F160\"; }\n\n.el-icon-fa-sort-amount-desc:before {\n  content: \"\\F161\"; }\n\n.el-icon-fa-sort-numeric-asc:before {\n  content: \"\\F162\"; }\n\n.el-icon-fa-sort-numeric-desc:before {\n  content: \"\\F163\"; }\n\n.el-icon-fa-thumbs-up:before {\n  content: \"\\F164\"; }\n\n.el-icon-fa-thumbs-down:before {\n  content: \"\\F165\"; }\n\n.el-icon-fa-youtube-square:before {\n  content: \"\\F166\"; }\n\n.el-icon-fa-youtube:before {\n  content: \"\\F167\"; }\n\n.el-icon-fa-xing:before {\n  content: \"\\F168\"; }\n\n.el-icon-fa-xing-square:before {\n  content: \"\\F169\"; }\n\n.el-icon-fa-youtube-play:before {\n  content: \"\\F16A\"; }\n\n.el-icon-fa-dropbox:before {\n  content: \"\\F16B\"; }\n\n.el-icon-fa-stack-overflow:before {\n  content: \"\\F16C\"; }\n\n.el-icon-fa-instagram:before {\n  content: \"\\F16D\"; }\n\n.el-icon-fa-flickr:before {\n  content: \"\\F16E\"; }\n\n.el-icon-fa-adn:before {\n  content: \"\\F170\"; }\n\n.el-icon-fa-bitbucket:before {\n  content: \"\\F171\"; }\n\n.el-icon-fa-bitbucket-square:before {\n  content: \"\\F172\"; }\n\n.el-icon-fa-tumblr:before {\n  content: \"\\F173\"; }\n\n.el-icon-fa-tumblr-square:before {\n  content: \"\\F174\"; }\n\n.el-icon-fa-long-arrow-down:before {\n  content: \"\\F175\"; }\n\n.el-icon-fa-long-arrow-up:before {\n  content: \"\\F176\"; }\n\n.el-icon-fa-long-arrow-left:before {\n  content: \"\\F177\"; }\n\n.el-icon-fa-long-arrow-right:before {\n  content: \"\\F178\"; }\n\n.el-icon-fa-apple:before {\n  content: \"\\F179\"; }\n\n.el-icon-fa-windows:before {\n  content: \"\\F17A\"; }\n\n.el-icon-fa-android:before {\n  content: \"\\F17B\"; }\n\n.el-icon-fa-linux:before {\n  content: \"\\F17C\"; }\n\n.el-icon-fa-dribbble:before {\n  content: \"\\F17D\"; }\n\n.el-icon-fa-skype:before {\n  content: \"\\F17E\"; }\n\n.el-icon-fa-foursquare:before {\n  content: \"\\F180\"; }\n\n.el-icon-fa-trello:before {\n  content: \"\\F181\"; }\n\n.el-icon-fa-female:before {\n  content: \"\\F182\"; }\n\n.el-icon-fa-male:before {\n  content: \"\\F183\"; }\n\n.el-icon-fa-gittip:before,\n.el-icon-fa-gratipay:before {\n  content: \"\\F184\"; }\n\n.el-icon-fa-sun-o:before {\n  content: \"\\F185\"; }\n\n.el-icon-fa-moon-o:before {\n  content: \"\\F186\"; }\n\n.el-icon-fa-archive:before {\n  content: \"\\F187\"; }\n\n.el-icon-fa-bug:before {\n  content: \"\\F188\"; }\n\n.el-icon-fa-vk:before {\n  content: \"\\F189\"; }\n\n.el-icon-fa-weibo:before {\n  content: \"\\F18A\"; }\n\n.el-icon-fa-renren:before {\n  content: \"\\F18B\"; }\n\n.el-icon-fa-pagelines:before {\n  content: \"\\F18C\"; }\n\n.el-icon-fa-stack-exchange:before {\n  content: \"\\F18D\"; }\n\n.el-icon-fa-arrow-circle-o-right:before {\n  content: \"\\F18E\"; }\n\n.el-icon-fa-arrow-circle-o-left:before {\n  content: \"\\F190\"; }\n\n.el-icon-fa-toggle-left:before,\n.el-icon-fa-caret-square-o-left:before {\n  content: \"\\F191\"; }\n\n.el-icon-fa-dot-circle-o:before {\n  content: \"\\F192\"; }\n\n.el-icon-fa-wheelchair:before {\n  content: \"\\F193\"; }\n\n.el-icon-fa-vimeo-square:before {\n  content: \"\\F194\"; }\n\n.el-icon-fa-turkish-lira:before,\n.el-icon-fa-try:before {\n  content: \"\\F195\"; }\n\n.el-icon-fa-plus-square-o:before {\n  content: \"\\F196\"; }\n\n.el-icon-fa-space-shuttle:before {\n  content: \"\\F197\"; }\n\n.el-icon-fa-slack:before {\n  content: \"\\F198\"; }\n\n.el-icon-fa-envelope-square:before {\n  content: \"\\F199\"; }\n\n.el-icon-fa-wordpress:before {\n  content: \"\\F19A\"; }\n\n.el-icon-fa-openid:before {\n  content: \"\\F19B\"; }\n\n.el-icon-fa-institution:before,\n.el-icon-fa-bank:before,\n.el-icon-fa-university:before {\n  content: \"\\F19C\"; }\n\n.el-icon-fa-mortar-board:before,\n.el-icon-fa-graduation-cap:before {\n  content: \"\\F19D\"; }\n\n.el-icon-fa-yahoo:before {\n  content: \"\\F19E\"; }\n\n.el-icon-fa-google:before {\n  content: \"\\F1A0\"; }\n\n.el-icon-fa-reddit:before {\n  content: \"\\F1A1\"; }\n\n.el-icon-fa-reddit-square:before {\n  content: \"\\F1A2\"; }\n\n.el-icon-fa-stumbleupon-circle:before {\n  content: \"\\F1A3\"; }\n\n.el-icon-fa-stumbleupon:before {\n  content: \"\\F1A4\"; }\n\n.el-icon-fa-delicious:before {\n  content: \"\\F1A5\"; }\n\n.el-icon-fa-digg:before {\n  content: \"\\F1A6\"; }\n\n.el-icon-fa-pied-piper-pp:before {\n  content: \"\\F1A7\"; }\n\n.el-icon-fa-pied-piper-alt:before {\n  content: \"\\F1A8\"; }\n\n.el-icon-fa-drupal:before {\n  content: \"\\F1A9\"; }\n\n.el-icon-fa-joomla:before {\n  content: \"\\F1AA\"; }\n\n.el-icon-fa-language:before {\n  content: \"\\F1AB\"; }\n\n.el-icon-fa-fax:before {\n  content: \"\\F1AC\"; }\n\n.el-icon-fa-building:before {\n  content: \"\\F1AD\"; }\n\n.el-icon-fa-child:before {\n  content: \"\\F1AE\"; }\n\n.el-icon-fa-paw:before {\n  content: \"\\F1B0\"; }\n\n.el-icon-fa-spoon:before {\n  content: \"\\F1B1\"; }\n\n.el-icon-fa-cube:before {\n  content: \"\\F1B2\"; }\n\n.el-icon-fa-cubes:before {\n  content: \"\\F1B3\"; }\n\n.el-icon-fa-behance:before {\n  content: \"\\F1B4\"; }\n\n.el-icon-fa-behance-square:before {\n  content: \"\\F1B5\"; }\n\n.el-icon-fa-steam:before {\n  content: \"\\F1B6\"; }\n\n.el-icon-fa-steam-square:before {\n  content: \"\\F1B7\"; }\n\n.el-icon-fa-recycle:before {\n  content: \"\\F1B8\"; }\n\n.el-icon-fa-automobile:before,\n.el-icon-fa-car:before {\n  content: \"\\F1B9\"; }\n\n.el-icon-fa-cab:before,\n.el-icon-fa-taxi:before {\n  content: \"\\F1BA\"; }\n\n.el-icon-fa-tree:before {\n  content: \"\\F1BB\"; }\n\n.el-icon-fa-spotify:before {\n  content: \"\\F1BC\"; }\n\n.el-icon-fa-deviantart:before {\n  content: \"\\F1BD\"; }\n\n.el-icon-fa-soundcloud:before {\n  content: \"\\F1BE\"; }\n\n.el-icon-fa-database:before {\n  content: \"\\F1C0\"; }\n\n.el-icon-fa-file-pdf-o:before {\n  content: \"\\F1C1\"; }\n\n.el-icon-fa-file-word-o:before {\n  content: \"\\F1C2\"; }\n\n.el-icon-fa-file-excel-o:before {\n  content: \"\\F1C3\"; }\n\n.el-icon-fa-file-powerpoint-o:before {\n  content: \"\\F1C4\"; }\n\n.el-icon-fa-file-photo-o:before,\n.el-icon-fa-file-picture-o:before,\n.el-icon-fa-file-image-o:before {\n  content: \"\\F1C5\"; }\n\n.el-icon-fa-file-zip-o:before,\n.el-icon-fa-file-archive-o:before {\n  content: \"\\F1C6\"; }\n\n.el-icon-fa-file-sound-o:before,\n.el-icon-fa-file-audio-o:before {\n  content: \"\\F1C7\"; }\n\n.el-icon-fa-file-movie-o:before,\n.el-icon-fa-file-video-o:before {\n  content: \"\\F1C8\"; }\n\n.el-icon-fa-file-code-o:before {\n  content: \"\\F1C9\"; }\n\n.el-icon-fa-vine:before {\n  content: \"\\F1CA\"; }\n\n.el-icon-fa-codepen:before {\n  content: \"\\F1CB\"; }\n\n.el-icon-fa-jsfiddle:before {\n  content: \"\\F1CC\"; }\n\n.el-icon-fa-life-bouy:before,\n.el-icon-fa-life-buoy:before,\n.el-icon-fa-life-saver:before,\n.el-icon-fa-support:before,\n.el-icon-fa-life-ring:before {\n  content: \"\\F1CD\"; }\n\n.el-icon-fa-circle-o-notch:before {\n  content: \"\\F1CE\"; }\n\n.el-icon-fa-ra:before,\n.el-icon-fa-resistance:before,\n.el-icon-fa-rebel:before {\n  content: \"\\F1D0\"; }\n\n.el-icon-fa-ge:before,\n.el-icon-fa-empire:before {\n  content: \"\\F1D1\"; }\n\n.el-icon-fa-git-square:before {\n  content: \"\\F1D2\"; }\n\n.el-icon-fa-git:before {\n  content: \"\\F1D3\"; }\n\n.el-icon-fa-y-combinator-square:before,\n.el-icon-fa-yc-square:before,\n.el-icon-fa-hacker-news:before {\n  content: \"\\F1D4\"; }\n\n.el-icon-fa-tencent-weibo:before {\n  content: \"\\F1D5\"; }\n\n.el-icon-fa-qq:before {\n  content: \"\\F1D6\"; }\n\n.el-icon-fa-wechat:before,\n.el-icon-fa-weixin:before {\n  content: \"\\F1D7\"; }\n\n.el-icon-fa-send:before,\n.el-icon-fa-paper-plane:before {\n  content: \"\\F1D8\"; }\n\n.el-icon-fa-send-o:before,\n.el-icon-fa-paper-plane-o:before {\n  content: \"\\F1D9\"; }\n\n.el-icon-fa-history:before {\n  content: \"\\F1DA\"; }\n\n.el-icon-fa-circle-thin:before {\n  content: \"\\F1DB\"; }\n\n.el-icon-fa-header:before {\n  content: \"\\F1DC\"; }\n\n.el-icon-fa-paragraph:before {\n  content: \"\\F1DD\"; }\n\n.el-icon-fa-sliders:before {\n  content: \"\\F1DE\"; }\n\n.el-icon-fa-share-alt:before {\n  content: \"\\F1E0\"; }\n\n.el-icon-fa-share-alt-square:before {\n  content: \"\\F1E1\"; }\n\n.el-icon-fa-bomb:before {\n  content: \"\\F1E2\"; }\n\n.el-icon-fa-soccer-ball-o:before,\n.el-icon-fa-futbol-o:before {\n  content: \"\\F1E3\"; }\n\n.el-icon-fa-tty:before {\n  content: \"\\F1E4\"; }\n\n.el-icon-fa-binoculars:before {\n  content: \"\\F1E5\"; }\n\n.el-icon-fa-plug:before {\n  content: \"\\F1E6\"; }\n\n.el-icon-fa-slideshare:before {\n  content: \"\\F1E7\"; }\n\n.el-icon-fa-twitch:before {\n  content: \"\\F1E8\"; }\n\n.el-icon-fa-yelp:before {\n  content: \"\\F1E9\"; }\n\n.el-icon-fa-newspaper-o:before {\n  content: \"\\F1EA\"; }\n\n.el-icon-fa-wifi:before {\n  content: \"\\F1EB\"; }\n\n.el-icon-fa-calculator:before {\n  content: \"\\F1EC\"; }\n\n.el-icon-fa-paypal:before {\n  content: \"\\F1ED\"; }\n\n.el-icon-fa-google-wallet:before {\n  content: \"\\F1EE\"; }\n\n.el-icon-fa-cc-visa:before {\n  content: \"\\F1F0\"; }\n\n.el-icon-fa-cc-mastercard:before {\n  content: \"\\F1F1\"; }\n\n.el-icon-fa-cc-discover:before {\n  content: \"\\F1F2\"; }\n\n.el-icon-fa-cc-amex:before {\n  content: \"\\F1F3\"; }\n\n.el-icon-fa-cc-paypal:before {\n  content: \"\\F1F4\"; }\n\n.el-icon-fa-cc-stripe:before {\n  content: \"\\F1F5\"; }\n\n.el-icon-fa-bell-slash:before {\n  content: \"\\F1F6\"; }\n\n.el-icon-fa-bell-slash-o:before {\n  content: \"\\F1F7\"; }\n\n.el-icon-fa-trash:before {\n  content: \"\\F1F8\"; }\n\n.el-icon-fa-copyright:before {\n  content: \"\\F1F9\"; }\n\n.el-icon-fa-at:before {\n  content: \"\\F1FA\"; }\n\n.el-icon-fa-eyedropper:before {\n  content: \"\\F1FB\"; }\n\n.el-icon-fa-paint-brush:before {\n  content: \"\\F1FC\"; }\n\n.el-icon-fa-birthday-cake:before {\n  content: \"\\F1FD\"; }\n\n.el-icon-fa-area-chart:before {\n  content: \"\\F1FE\"; }\n\n.el-icon-fa-pie-chart:before {\n  content: \"\\F200\"; }\n\n.el-icon-fa-line-chart:before {\n  content: \"\\F201\"; }\n\n.el-icon-fa-lastfm:before {\n  content: \"\\F202\"; }\n\n.el-icon-fa-lastfm-square:before {\n  content: \"\\F203\"; }\n\n.el-icon-fa-toggle-off:before {\n  content: \"\\F204\"; }\n\n.el-icon-fa-toggle-on:before {\n  content: \"\\F205\"; }\n\n.el-icon-fa-bicycle:before {\n  content: \"\\F206\"; }\n\n.el-icon-fa-bus:before {\n  content: \"\\F207\"; }\n\n.el-icon-fa-ioxhost:before {\n  content: \"\\F208\"; }\n\n.el-icon-fa-angellist:before {\n  content: \"\\F209\"; }\n\n.el-icon-fa-cc:before {\n  content: \"\\F20A\"; }\n\n.el-icon-fa-shekel:before,\n.el-icon-fa-sheqel:before,\n.el-icon-fa-ils:before {\n  content: \"\\F20B\"; }\n\n.el-icon-fa-meanpath:before {\n  content: \"\\F20C\"; }\n\n.el-icon-fa-buysellads:before {\n  content: \"\\F20D\"; }\n\n.el-icon-fa-connectdevelop:before {\n  content: \"\\F20E\"; }\n\n.el-icon-fa-dashcube:before {\n  content: \"\\F210\"; }\n\n.el-icon-fa-forumbee:before {\n  content: \"\\F211\"; }\n\n.el-icon-fa-leanpub:before {\n  content: \"\\F212\"; }\n\n.el-icon-fa-sellsy:before {\n  content: \"\\F213\"; }\n\n.el-icon-fa-shirtsinbulk:before {\n  content: \"\\F214\"; }\n\n.el-icon-fa-simplybuilt:before {\n  content: \"\\F215\"; }\n\n.el-icon-fa-skyatlas:before {\n  content: \"\\F216\"; }\n\n.el-icon-fa-cart-plus:before {\n  content: \"\\F217\"; }\n\n.el-icon-fa-cart-arrow-down:before {\n  content: \"\\F218\"; }\n\n.el-icon-fa-diamond:before {\n  content: \"\\F219\"; }\n\n.el-icon-fa-ship:before {\n  content: \"\\F21A\"; }\n\n.el-icon-fa-user-secret:before {\n  content: \"\\F21B\"; }\n\n.el-icon-fa-motorcycle:before {\n  content: \"\\F21C\"; }\n\n.el-icon-fa-street-view:before {\n  content: \"\\F21D\"; }\n\n.el-icon-fa-heartbeat:before {\n  content: \"\\F21E\"; }\n\n.el-icon-fa-venus:before {\n  content: \"\\F221\"; }\n\n.el-icon-fa-mars:before {\n  content: \"\\F222\"; }\n\n.el-icon-fa-mercury:before {\n  content: \"\\F223\"; }\n\n.el-icon-fa-intersex:before,\n.el-icon-fa-transgender:before {\n  content: \"\\F224\"; }\n\n.el-icon-fa-transgender-alt:before {\n  content: \"\\F225\"; }\n\n.el-icon-fa-venus-double:before {\n  content: \"\\F226\"; }\n\n.el-icon-fa-mars-double:before {\n  content: \"\\F227\"; }\n\n.el-icon-fa-venus-mars:before {\n  content: \"\\F228\"; }\n\n.el-icon-fa-mars-stroke:before {\n  content: \"\\F229\"; }\n\n.el-icon-fa-mars-stroke-v:before {\n  content: \"\\F22A\"; }\n\n.el-icon-fa-mars-stroke-h:before {\n  content: \"\\F22B\"; }\n\n.el-icon-fa-neuter:before {\n  content: \"\\F22C\"; }\n\n.el-icon-fa-genderless:before {\n  content: \"\\F22D\"; }\n\n.el-icon-fa-facebook-official:before {\n  content: \"\\F230\"; }\n\n.el-icon-fa-pinterest-p:before {\n  content: \"\\F231\"; }\n\n.el-icon-fa-whatsapp:before {\n  content: \"\\F232\"; }\n\n.el-icon-fa-server:before {\n  content: \"\\F233\"; }\n\n.el-icon-fa-user-plus:before {\n  content: \"\\F234\"; }\n\n.el-icon-fa-user-times:before {\n  content: \"\\F235\"; }\n\n.el-icon-fa-hotel:before,\n.el-icon-fa-bed:before {\n  content: \"\\F236\"; }\n\n.el-icon-fa-viacoin:before {\n  content: \"\\F237\"; }\n\n.el-icon-fa-train:before {\n  content: \"\\F238\"; }\n\n.el-icon-fa-subway:before {\n  content: \"\\F239\"; }\n\n.el-icon-fa-medium:before {\n  content: \"\\F23A\"; }\n\n.el-icon-fa-yc:before,\n.el-icon-fa-y-combinator:before {\n  content: \"\\F23B\"; }\n\n.el-icon-fa-optin-monster:before {\n  content: \"\\F23C\"; }\n\n.el-icon-fa-opencart:before {\n  content: \"\\F23D\"; }\n\n.el-icon-fa-expeditedssl:before {\n  content: \"\\F23E\"; }\n\n.el-icon-fa-battery-4:before,\n.el-icon-fa-battery:before,\n.el-icon-fa-battery-full:before {\n  content: \"\\F240\"; }\n\n.el-icon-fa-battery-3:before,\n.el-icon-fa-battery-three-quarters:before {\n  content: \"\\F241\"; }\n\n.el-icon-fa-battery-2:before,\n.el-icon-fa-battery-half:before {\n  content: \"\\F242\"; }\n\n.el-icon-fa-battery-1:before,\n.el-icon-fa-battery-quarter:before {\n  content: \"\\F243\"; }\n\n.el-icon-fa-battery-0:before,\n.el-icon-fa-battery-empty:before {\n  content: \"\\F244\"; }\n\n.el-icon-fa-mouse-pointer:before {\n  content: \"\\F245\"; }\n\n.el-icon-fa-i-cursor:before {\n  content: \"\\F246\"; }\n\n.el-icon-fa-object-group:before {\n  content: \"\\F247\"; }\n\n.el-icon-fa-object-ungroup:before {\n  content: \"\\F248\"; }\n\n.el-icon-fa-sticky-note:before {\n  content: \"\\F249\"; }\n\n.el-icon-fa-sticky-note-o:before {\n  content: \"\\F24A\"; }\n\n.el-icon-fa-cc-jcb:before {\n  content: \"\\F24B\"; }\n\n.el-icon-fa-cc-diners-club:before {\n  content: \"\\F24C\"; }\n\n.el-icon-fa-clone:before {\n  content: \"\\F24D\"; }\n\n.el-icon-fa-balance-scale:before {\n  content: \"\\F24E\"; }\n\n.el-icon-fa-hourglass-o:before {\n  content: \"\\F250\"; }\n\n.el-icon-fa-hourglass-1:before,\n.el-icon-fa-hourglass-start:before {\n  content: \"\\F251\"; }\n\n.el-icon-fa-hourglass-2:before,\n.el-icon-fa-hourglass-half:before {\n  content: \"\\F252\"; }\n\n.el-icon-fa-hourglass-3:before,\n.el-icon-fa-hourglass-end:before {\n  content: \"\\F253\"; }\n\n.el-icon-fa-hourglass:before {\n  content: \"\\F254\"; }\n\n.el-icon-fa-hand-grab-o:before,\n.el-icon-fa-hand-rock-o:before {\n  content: \"\\F255\"; }\n\n.el-icon-fa-hand-stop-o:before,\n.el-icon-fa-hand-paper-o:before {\n  content: \"\\F256\"; }\n\n.el-icon-fa-hand-scissors-o:before {\n  content: \"\\F257\"; }\n\n.el-icon-fa-hand-lizard-o:before {\n  content: \"\\F258\"; }\n\n.el-icon-fa-hand-spock-o:before {\n  content: \"\\F259\"; }\n\n.el-icon-fa-hand-pointer-o:before {\n  content: \"\\F25A\"; }\n\n.el-icon-fa-hand-peace-o:before {\n  content: \"\\F25B\"; }\n\n.el-icon-fa-trademark:before {\n  content: \"\\F25C\"; }\n\n.el-icon-fa-registered:before {\n  content: \"\\F25D\"; }\n\n.el-icon-fa-creative-commons:before {\n  content: \"\\F25E\"; }\n\n.el-icon-fa-gg:before {\n  content: \"\\F260\"; }\n\n.el-icon-fa-gg-circle:before {\n  content: \"\\F261\"; }\n\n.el-icon-fa-tripadvisor:before {\n  content: \"\\F262\"; }\n\n.el-icon-fa-odnoklassniki:before {\n  content: \"\\F263\"; }\n\n.el-icon-fa-odnoklassniki-square:before {\n  content: \"\\F264\"; }\n\n.el-icon-fa-get-pocket:before {\n  content: \"\\F265\"; }\n\n.el-icon-fa-wikipedia-w:before {\n  content: \"\\F266\"; }\n\n.el-icon-fa-safari:before {\n  content: \"\\F267\"; }\n\n.el-icon-fa-chrome:before {\n  content: \"\\F268\"; }\n\n.el-icon-fa-firefox:before {\n  content: \"\\F269\"; }\n\n.el-icon-fa-opera:before {\n  content: \"\\F26A\"; }\n\n.el-icon-fa-internet-explorer:before {\n  content: \"\\F26B\"; }\n\n.el-icon-fa-tv:before,\n.el-icon-fa-television:before {\n  content: \"\\F26C\"; }\n\n.el-icon-fa-contao:before {\n  content: \"\\F26D\"; }\n\n.el-icon-fa-500px:before {\n  content: \"\\F26E\"; }\n\n.el-icon-fa-amazon:before {\n  content: \"\\F270\"; }\n\n.el-icon-fa-calendar-plus-o:before {\n  content: \"\\F271\"; }\n\n.el-icon-fa-calendar-minus-o:before {\n  content: \"\\F272\"; }\n\n.el-icon-fa-calendar-times-o:before {\n  content: \"\\F273\"; }\n\n.el-icon-fa-calendar-check-o:before {\n  content: \"\\F274\"; }\n\n.el-icon-fa-industry:before {\n  content: \"\\F275\"; }\n\n.el-icon-fa-map-pin:before {\n  content: \"\\F276\"; }\n\n.el-icon-fa-map-signs:before {\n  content: \"\\F277\"; }\n\n.el-icon-fa-map-o:before {\n  content: \"\\F278\"; }\n\n.el-icon-fa-map:before {\n  content: \"\\F279\"; }\n\n.el-icon-fa-commenting:before {\n  content: \"\\F27A\"; }\n\n.el-icon-fa-commenting-o:before {\n  content: \"\\F27B\"; }\n\n.el-icon-fa-houzz:before {\n  content: \"\\F27C\"; }\n\n.el-icon-fa-vimeo:before {\n  content: \"\\F27D\"; }\n\n.el-icon-fa-black-tie:before {\n  content: \"\\F27E\"; }\n\n.el-icon-fa-fonticons:before {\n  content: \"\\F280\"; }\n\n.el-icon-fa-reddit-alien:before {\n  content: \"\\F281\"; }\n\n.el-icon-fa-edge:before {\n  content: \"\\F282\"; }\n\n.el-icon-fa-credit-card-alt:before {\n  content: \"\\F283\"; }\n\n.el-icon-fa-codiepie:before {\n  content: \"\\F284\"; }\n\n.el-icon-fa-modx:before {\n  content: \"\\F285\"; }\n\n.el-icon-fa-fort-awesome:before {\n  content: \"\\F286\"; }\n\n.el-icon-fa-usb:before {\n  content: \"\\F287\"; }\n\n.el-icon-fa-product-hunt:before {\n  content: \"\\F288\"; }\n\n.el-icon-fa-mixcloud:before {\n  content: \"\\F289\"; }\n\n.el-icon-fa-scribd:before {\n  content: \"\\F28A\"; }\n\n.el-icon-fa-pause-circle:before {\n  content: \"\\F28B\"; }\n\n.el-icon-fa-pause-circle-o:before {\n  content: \"\\F28C\"; }\n\n.el-icon-fa-stop-circle:before {\n  content: \"\\F28D\"; }\n\n.el-icon-fa-stop-circle-o:before {\n  content: \"\\F28E\"; }\n\n.el-icon-fa-shopping-bag:before {\n  content: \"\\F290\"; }\n\n.el-icon-fa-shopping-basket:before {\n  content: \"\\F291\"; }\n\n.el-icon-fa-hashtag:before {\n  content: \"\\F292\"; }\n\n.el-icon-fa-bluetooth:before {\n  content: \"\\F293\"; }\n\n.el-icon-fa-bluetooth-b:before {\n  content: \"\\F294\"; }\n\n.el-icon-fa-percent:before {\n  content: \"\\F295\"; }\n\n.el-icon-fa-gitlab:before {\n  content: \"\\F296\"; }\n\n.el-icon-fa-wpbeginner:before {\n  content: \"\\F297\"; }\n\n.el-icon-fa-wpforms:before {\n  content: \"\\F298\"; }\n\n.el-icon-fa-envira:before {\n  content: \"\\F299\"; }\n\n.el-icon-fa-universal-access:before {\n  content: \"\\F29A\"; }\n\n.el-icon-fa-wheelchair-alt:before {\n  content: \"\\F29B\"; }\n\n.el-icon-fa-question-circle-o:before {\n  content: \"\\F29C\"; }\n\n.el-icon-fa-blind:before {\n  content: \"\\F29D\"; }\n\n.el-icon-fa-audio-description:before {\n  content: \"\\F29E\"; }\n\n.el-icon-fa-volume-control-phone:before {\n  content: \"\\F2A0\"; }\n\n.el-icon-fa-braille:before {\n  content: \"\\F2A1\"; }\n\n.el-icon-fa-assistive-listening-systems:before {\n  content: \"\\F2A2\"; }\n\n.el-icon-fa-asl-interpreting:before,\n.el-icon-fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\"; }\n\n.el-icon-fa-deafness:before,\n.el-icon-fa-hard-of-hearing:before,\n.el-icon-fa-deaf:before {\n  content: \"\\F2A4\"; }\n\n.el-icon-fa-glide:before {\n  content: \"\\F2A5\"; }\n\n.el-icon-fa-glide-g:before {\n  content: \"\\F2A6\"; }\n\n.el-icon-fa-signing:before,\n.el-icon-fa-sign-language:before {\n  content: \"\\F2A7\"; }\n\n.el-icon-fa-low-vision:before {\n  content: \"\\F2A8\"; }\n\n.el-icon-fa-viadeo:before {\n  content: \"\\F2A9\"; }\n\n.el-icon-fa-viadeo-square:before {\n  content: \"\\F2AA\"; }\n\n.el-icon-fa-snapchat:before {\n  content: \"\\F2AB\"; }\n\n.el-icon-fa-snapchat-ghost:before {\n  content: \"\\F2AC\"; }\n\n.el-icon-fa-snapchat-square:before {\n  content: \"\\F2AD\"; }\n\n.el-icon-fa-pied-piper:before {\n  content: \"\\F2AE\"; }\n\n.el-icon-fa-first-order:before {\n  content: \"\\F2B0\"; }\n\n.el-icon-fa-yoast:before {\n  content: \"\\F2B1\"; }\n\n.el-icon-fa-themeisle:before {\n  content: \"\\F2B2\"; }\n\n.el-icon-fa-google-plus-circle:before,\n.el-icon-fa-google-plus-official:before {\n  content: \"\\F2B3\"; }\n\n.el-icon-fa-fa:before,\n.el-icon-fa-font-awesome:before {\n  content: \"\\F2B4\"; }\n\n.el-icon-fa-handshake-o:before {\n  content: \"\\F2B5\"; }\n\n.el-icon-fa-envelope-open:before {\n  content: \"\\F2B6\"; }\n\n.el-icon-fa-envelope-open-o:before {\n  content: \"\\F2B7\"; }\n\n.el-icon-fa-linode:before {\n  content: \"\\F2B8\"; }\n\n.el-icon-fa-address-book:before {\n  content: \"\\F2B9\"; }\n\n.el-icon-fa-address-book-o:before {\n  content: \"\\F2BA\"; }\n\n.el-icon-fa-vcard:before,\n.el-icon-fa-address-card:before {\n  content: \"\\F2BB\"; }\n\n.el-icon-fa-vcard-o:before,\n.el-icon-fa-address-card-o:before {\n  content: \"\\F2BC\"; }\n\n.el-icon-fa-user-circle:before {\n  content: \"\\F2BD\"; }\n\n.el-icon-fa-user-circle-o:before {\n  content: \"\\F2BE\"; }\n\n.el-icon-fa-user-o:before {\n  content: \"\\F2C0\"; }\n\n.el-icon-fa-id-badge:before {\n  content: \"\\F2C1\"; }\n\n.el-icon-fa-drivers-license:before,\n.el-icon-fa-id-card:before {\n  content: \"\\F2C2\"; }\n\n.el-icon-fa-drivers-license-o:before,\n.el-icon-fa-id-card-o:before {\n  content: \"\\F2C3\"; }\n\n.el-icon-fa-quora:before {\n  content: \"\\F2C4\"; }\n\n.el-icon-fa-free-code-camp:before {\n  content: \"\\F2C5\"; }\n\n.el-icon-fa-telegram:before {\n  content: \"\\F2C6\"; }\n\n.el-icon-fa-thermometer-4:before,\n.el-icon-fa-thermometer:before,\n.el-icon-fa-thermometer-full:before {\n  content: \"\\F2C7\"; }\n\n.el-icon-fa-thermometer-3:before,\n.el-icon-fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\"; }\n\n.el-icon-fa-thermometer-2:before,\n.el-icon-fa-thermometer-half:before {\n  content: \"\\F2C9\"; }\n\n.el-icon-fa-thermometer-1:before,\n.el-icon-fa-thermometer-quarter:before {\n  content: \"\\F2CA\"; }\n\n.el-icon-fa-thermometer-0:before,\n.el-icon-fa-thermometer-empty:before {\n  content: \"\\F2CB\"; }\n\n.el-icon-fa-shower:before {\n  content: \"\\F2CC\"; }\n\n.el-icon-fa-bathtub:before,\n.el-icon-fa-s15:before,\n.el-icon-fa-bath:before {\n  content: \"\\F2CD\"; }\n\n.el-icon-fa-podcast:before {\n  content: \"\\F2CE\"; }\n\n.el-icon-fa-window-maximize:before {\n  content: \"\\F2D0\"; }\n\n.el-icon-fa-window-minimize:before {\n  content: \"\\F2D1\"; }\n\n.el-icon-fa-window-restore:before {\n  content: \"\\F2D2\"; }\n\n.el-icon-fa-times-rectangle:before,\n.el-icon-fa-window-close:before {\n  content: \"\\F2D3\"; }\n\n.el-icon-fa-times-rectangle-o:before,\n.el-icon-fa-window-close-o:before {\n  content: \"\\F2D4\"; }\n\n.el-icon-fa-bandcamp:before {\n  content: \"\\F2D5\"; }\n\n.el-icon-fa-grav:before {\n  content: \"\\F2D6\"; }\n\n.el-icon-fa-etsy:before {\n  content: \"\\F2D7\"; }\n\n.el-icon-fa-imdb:before {\n  content: \"\\F2D8\"; }\n\n.el-icon-fa-ravelry:before {\n  content: \"\\F2D9\"; }\n\n.el-icon-fa-eercast:before {\n  content: \"\\F2DA\"; }\n\n.el-icon-fa-microchip:before {\n  content: \"\\F2DB\"; }\n\n.el-icon-fa-snowflake-o:before {\n  content: \"\\F2DC\"; }\n\n.el-icon-fa-superpowers:before {\n  content: \"\\F2DD\"; }\n\n.el-icon-fa-wpexplorer:before {\n  content: \"\\F2DE\"; }\n\n.el-icon-fa-meetup:before {\n  content: \"\\F2E0\"; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[class^='el-icon-fa-'], [class*=' el-icon-fa-'] {\n  width: 32px;\n  text-align: right;\n  margin-right: 10px;\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome !important;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n", ""]);

// exports


/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nbody, html, input, textarea, select, button {\n  font-family: \"Helvetica Neue\",Helvetica,\"Microsoft YaHei\",\"\\5FAE\\8F6F\\96C5\\9ED1\",\"PingFang SC\",\"Hiragino Sans GB\",Arial,sans-serif;\n}\n.el-row {\n  margin-bottom: 20px;\n}\n.el-row:last-child {\n    margin-bottom: 0;\n}\n.el-form .el-select {\n  display: block;\n}\n.el-col.title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.el-col.title span {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.el-col.title .el-button-group {\n    float: right;\n}\n", ""]);

// exports


/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(undefined);
// imports


// module
exports.push([module.i, "\n.icon[data-v-f2108d44] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  color: #222;\n  line-height: 32px;\n  height: 32px;\n  padding: 0 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.icon[data-v-f2108d44]:hover {\n    color: #fff;\n    background-color: #20a0ff;\n}\n", ""]);

// exports


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/caf-vue/fonts/fontawesome-webfont.674f50d.eot";

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/caf-vue/fonts/fontawesome-webfont.674f50d.eot";

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/caf-vue/fonts/fontawesome-webfont.912ec66.svg";

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/caf-vue/fonts/fontawesome-webfont.b06871f.ttf";

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/caf-vue/fonts/fontawesome-webfont.af7ae50.woff2";

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/caf-vue/fonts/fontawesome-webfont.fee66e7.woff";

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(453)

var Component = __webpack_require__(57)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(448),
  /* scopeId */
  "data-v-f2108d44",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(57)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(444),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "caf-icons"
  }, [_c('section', [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, _vm._l((_vm.iconGroups), function(value, key) {
    return _c('el-col', {
      key: key,
      attrs: {
        "md": 6,
        "sm": 8
      }
    }, [_c('caf-icon', {
      attrs: {
        "name": key
      }
    })], 1)
  }))], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('el-row', [_c('el-col', {
    staticClass: "title",
    attrs: {
      "span": 24
    }
  }, [_c('span', [_vm._v("菜单")]), _vm._v(" "), _c('el-button-group', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createNode
    }
  }, [_vm._v("新增")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.isModify
    },
    on: {
      "click": _vm.modifyNode
    }
  }, [_vm._v("修改")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.isRemove
    },
    on: {
      "click": _vm.removeNode
    }
  }, [_vm._v("删除")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "content",
    attrs: {
      "span": 24
    }
  }, [_c('el-tree', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    ref: "tree",
    attrs: {
      "data": _vm.treelist,
      "node-key": "id",
      "highlight-current": "",
      "props": _vm.defaultProps,
      "render-content": _vm.renderContent
    },
    on: {
      "current-change": _vm.setCurrentChange
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "菜单",
      "visible": _vm.dialogFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "menuForm",
    attrs: {
      "rules": _vm.formRules,
      "label-position": "right",
      "label-width": "120px",
      "model": _vm.form
    }
  }, [_c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isEdit),
      expression: "!isEdit"
    }],
    attrs: {
      "label": "父节点"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "是",
      "off-text": "否"
    },
    model: {
      value: (_vm.form.isParent),
      callback: function($$v) {
        _vm.form.isParent = $$v
      },
      expression: "form.isParent"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLeaf),
      expression: "isLeaf"
    }],
    attrs: {
      "label": "父菜单",
      "prop": "parentId"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "filterable": "",
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.form.parentId),
      callback: function($$v) {
        _vm.form.parentId = $$v
      },
      expression: "form.parentId"
    }
  }, _vm._l((_vm.parentOptions), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "disabled": _vm.form.id === item.id,
        "label": item.label,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), (!_vm.isEdit && _vm.form.isParent) ? _c('el-form-item', {
    attrs: {
      "label": "自定义编码",
      "prop": "codeInput",
      "required": ""
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.codeInput),
      callback: function($$v) {
        _vm.form.codeInput = $$v
      },
      expression: "form.codeInput"
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.isEdit && !_vm.form.isParent) ? _c('el-form-item', {
    attrs: {
      "label": "编码",
      "prop": "codeSelect",
      "required": ""
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "filterable": "",
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.form.codeSelect),
      callback: function($$v) {
        _vm.form.codeSelect = $$v
      },
      expression: "form.codeSelect"
    }
  }, _vm._l((_vm.codeOptions), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.code
      }
    })
  }))], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "菜单名称",
      "prop": "label",
      "required": ""
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.label),
      callback: function($$v) {
        _vm.form.label = $$v
      },
      expression: "form.label"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "排序数",
      "prop": "menuSort"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入 1-100 之间的整数"
    },
    model: {
      value: (_vm.form.menuSort),
      callback: function($$v) {
        _vm.form.menuSort = _vm._n($$v)
      },
      expression: "form.menuSort"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图标"
    }
  }, [_c('el-col', {
    attrs: {
      "lg": 18,
      "md": 16,
      "sm": 12,
      "xs": 24
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "icon"
    }
  }, [_c('el-input', {
    attrs: {
      "readonly": true,
      "icon": _vm.icon
    },
    model: {
      value: (_vm.form.icon),
      callback: function($$v) {
        _vm.form.icon = $$v
      },
      expression: "form.icon"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "lg": 6,
      "md": 8,
      "sm": 12,
      "xs": 24
    }
  }, [_c('el-button', {
    staticClass: "btnSelectIcon",
    attrs: {
      "type": "primary",
      "icon": "menu"
    },
    on: {
      "click": _vm.openIconList
    }
  }, [_vm._v("选择图标")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择图标",
      "size": "large",
      "visible": _vm.dialogIconsVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogIconsVisible = $event
      }
    }
  }, [_c('el-tabs', {
    attrs: {
      "type": "card"
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "Font-Awesome",
      "name": "fa"
    }
  }, [_c('caf-icons', {
    attrs: {
      "type": "fa"
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "icon",
    on: {
      "dblclick": _vm.handlerEvent
    }
  }, [_c('i', {
    class: 'el-icon-' + this.name
  }), _vm._v(_vm._s(_vm.name))])
},staticRenderFns: []}

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(425);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(58)("1501270a", content, true);

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(427);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(58)("3bbe4f67", content, true);

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = {
	"fa-500px": {
		"unicode": "\\f26e",
		"name": "500px"
	},
	"fa-address-book": {
		"unicode": "\\f2b9",
		"name": "Address book"
	},
	"fa-address-book-o": {
		"unicode": "\\f2ba",
		"name": "Address book o"
	},
	"fa-address-card": {
		"unicode": "\\f2bb",
		"name": "Address card"
	},
	"fa-address-card-o": {
		"unicode": "\\f2bc",
		"name": "Address card o"
	},
	"fa-adjust": {
		"unicode": "\\f042",
		"name": "Adjust"
	},
	"fa-adn": {
		"unicode": "\\f170",
		"name": "Adn"
	},
	"fa-align-center": {
		"unicode": "\\f037",
		"name": "Align center"
	},
	"fa-align-justify": {
		"unicode": "\\f039",
		"name": "Align justify"
	},
	"fa-align-left": {
		"unicode": "\\f036",
		"name": "Align left"
	},
	"fa-align-right": {
		"unicode": "\\f038",
		"name": "Align right"
	},
	"fa-amazon": {
		"unicode": "\\f270",
		"name": "Amazon"
	},
	"fa-ambulance": {
		"unicode": "\\f0f9",
		"name": "Ambulance"
	},
	"fa-american-sign-language-interpreting": {
		"unicode": "\\f2a3",
		"name": "American sign language interpreting"
	},
	"fa-anchor": {
		"unicode": "\\f13d",
		"name": "Anchor"
	},
	"fa-android": {
		"unicode": "\\f17b",
		"name": "Android"
	},
	"fa-angellist": {
		"unicode": "\\f209",
		"name": "Angellist"
	},
	"fa-angle-double-down": {
		"unicode": "\\f103",
		"name": "Angle double down"
	},
	"fa-angle-double-left": {
		"unicode": "\\f100",
		"name": "Angle double left"
	},
	"fa-angle-double-right": {
		"unicode": "\\f101",
		"name": "Angle double right"
	},
	"fa-angle-double-up": {
		"unicode": "\\f102",
		"name": "Angle double up"
	},
	"fa-angle-down": {
		"unicode": "\\f107",
		"name": "Angle down"
	},
	"fa-angle-left": {
		"unicode": "\\f104",
		"name": "Angle left"
	},
	"fa-angle-right": {
		"unicode": "\\f105",
		"name": "Angle right"
	},
	"fa-angle-up": {
		"unicode": "\\f106",
		"name": "Angle up"
	},
	"fa-apple": {
		"unicode": "\\f179",
		"name": "Apple"
	},
	"fa-archive": {
		"unicode": "\\f187",
		"name": "Archive"
	},
	"fa-area-chart": {
		"unicode": "\\f1fe",
		"name": "Area chart"
	},
	"fa-arrow-circle-down": {
		"unicode": "\\f0ab",
		"name": "Arrow circle down"
	},
	"fa-arrow-circle-left": {
		"unicode": "\\f0a8",
		"name": "Arrow circle left"
	},
	"fa-arrow-circle-o-down": {
		"unicode": "\\f01a",
		"name": "Arrow circle o down"
	},
	"fa-arrow-circle-o-left": {
		"unicode": "\\f190",
		"name": "Arrow circle o left"
	},
	"fa-arrow-circle-o-right": {
		"unicode": "\\f18e",
		"name": "Arrow circle o right"
	},
	"fa-arrow-circle-o-up": {
		"unicode": "\\f01b",
		"name": "Arrow circle o up"
	},
	"fa-arrow-circle-right": {
		"unicode": "\\f0a9",
		"name": "Arrow circle right"
	},
	"fa-arrow-circle-up": {
		"unicode": "\\f0aa",
		"name": "Arrow circle up"
	},
	"fa-arrow-down": {
		"unicode": "\\f063",
		"name": "Arrow down"
	},
	"fa-arrow-left": {
		"unicode": "\\f060",
		"name": "Arrow left"
	},
	"fa-arrow-right": {
		"unicode": "\\f061",
		"name": "Arrow right"
	},
	"fa-arrow-up": {
		"unicode": "\\f062",
		"name": "Arrow up"
	},
	"fa-arrows": {
		"unicode": "\\f047",
		"name": "Arrows"
	},
	"fa-arrows-alt": {
		"unicode": "\\f0b2",
		"name": "Arrows alt"
	},
	"fa-arrows-h": {
		"unicode": "\\f07e",
		"name": "Arrows h"
	},
	"fa-arrows-v": {
		"unicode": "\\f07d",
		"name": "Arrows v"
	},
	"fa-assistive-listening-systems": {
		"unicode": "\\f2a2",
		"name": "Assistive listening systems"
	},
	"fa-asterisk": {
		"unicode": "\\f069",
		"name": "Asterisk"
	},
	"fa-at": {
		"unicode": "\\f1fa",
		"name": "At"
	},
	"fa-audio-description": {
		"unicode": "\\f29e",
		"name": "Audio description"
	},
	"fa-backward": {
		"unicode": "\\f04a",
		"name": "Backward"
	},
	"fa-balance-scale": {
		"unicode": "\\f24e",
		"name": "Balance scale"
	},
	"fa-ban": {
		"unicode": "\\f05e",
		"name": "Ban"
	},
	"fa-bandcamp": {
		"unicode": "\\f2d5",
		"name": "Bandcamp"
	},
	"fa-bar-chart": {
		"unicode": "\\f080",
		"name": "Bar chart"
	},
	"fa-barcode": {
		"unicode": "\\f02a",
		"name": "Barcode"
	},
	"fa-bars": {
		"unicode": "\\f0c9",
		"name": "Bars"
	},
	"fa-bath": {
		"unicode": "\\f2cd",
		"name": "Bath"
	},
	"fa-battery-empty": {
		"unicode": "\\f244",
		"name": "Battery empty"
	},
	"fa-battery-full": {
		"unicode": "\\f240",
		"name": "Battery full"
	},
	"fa-battery-half": {
		"unicode": "\\f242",
		"name": "Battery half"
	},
	"fa-battery-quarter": {
		"unicode": "\\f243",
		"name": "Battery quarter"
	},
	"fa-battery-three-quarters": {
		"unicode": "\\f241",
		"name": "Battery three quarters"
	},
	"fa-bed": {
		"unicode": "\\f236",
		"name": "Bed"
	},
	"fa-beer": {
		"unicode": "\\f0fc",
		"name": "Beer"
	},
	"fa-behance": {
		"unicode": "\\f1b4",
		"name": "Behance"
	},
	"fa-behance-square": {
		"unicode": "\\f1b5",
		"name": "Behance square"
	},
	"fa-bell": {
		"unicode": "\\f0f3",
		"name": "Bell"
	},
	"fa-bell-o": {
		"unicode": "\\f0a2",
		"name": "Bell o"
	},
	"fa-bell-slash": {
		"unicode": "\\f1f6",
		"name": "Bell slash"
	},
	"fa-bell-slash-o": {
		"unicode": "\\f1f7",
		"name": "Bell slash o"
	},
	"fa-bicycle": {
		"unicode": "\\f206",
		"name": "Bicycle"
	},
	"fa-binoculars": {
		"unicode": "\\f1e5",
		"name": "Binoculars"
	},
	"fa-birthday-cake": {
		"unicode": "\\f1fd",
		"name": "Birthday cake"
	},
	"fa-bitbucket": {
		"unicode": "\\f171",
		"name": "Bitbucket"
	},
	"fa-bitbucket-square": {
		"unicode": "\\f172",
		"name": "Bitbucket square"
	},
	"fa-black-tie": {
		"unicode": "\\f27e",
		"name": "Black tie"
	},
	"fa-blind": {
		"unicode": "\\f29d",
		"name": "Blind"
	},
	"fa-bluetooth": {
		"unicode": "\\f293",
		"name": "Bluetooth"
	},
	"fa-bluetooth-b": {
		"unicode": "\\f294",
		"name": "Bluetooth b"
	},
	"fa-bold": {
		"unicode": "\\f032",
		"name": "Bold"
	},
	"fa-bolt": {
		"unicode": "\\f0e7",
		"name": "Bolt"
	},
	"fa-bomb": {
		"unicode": "\\f1e2",
		"name": "Bomb"
	},
	"fa-book": {
		"unicode": "\\f02d",
		"name": "Book"
	},
	"fa-bookmark": {
		"unicode": "\\f02e",
		"name": "Bookmark"
	},
	"fa-bookmark-o": {
		"unicode": "\\f097",
		"name": "Bookmark o"
	},
	"fa-braille": {
		"unicode": "\\f2a1",
		"name": "Braille"
	},
	"fa-briefcase": {
		"unicode": "\\f0b1",
		"name": "Briefcase"
	},
	"fa-btc": {
		"unicode": "\\f15a",
		"name": "Btc"
	},
	"fa-bug": {
		"unicode": "\\f188",
		"name": "Bug"
	},
	"fa-building": {
		"unicode": "\\f1ad",
		"name": "Building"
	},
	"fa-building-o": {
		"unicode": "\\f0f7",
		"name": "Building o"
	},
	"fa-bullhorn": {
		"unicode": "\\f0a1",
		"name": "Bullhorn"
	},
	"fa-bullseye": {
		"unicode": "\\f140",
		"name": "Bullseye"
	},
	"fa-bus": {
		"unicode": "\\f207",
		"name": "Bus"
	},
	"fa-buysellads": {
		"unicode": "\\f20d",
		"name": "Buysellads"
	},
	"fa-calculator": {
		"unicode": "\\f1ec",
		"name": "Calculator"
	},
	"fa-calendar": {
		"unicode": "\\f073",
		"name": "Calendar"
	},
	"fa-calendar-check-o": {
		"unicode": "\\f274",
		"name": "Calendar check o"
	},
	"fa-calendar-minus-o": {
		"unicode": "\\f272",
		"name": "Calendar minus o"
	},
	"fa-calendar-o": {
		"unicode": "\\f133",
		"name": "Calendar o"
	},
	"fa-calendar-plus-o": {
		"unicode": "\\f271",
		"name": "Calendar plus o"
	},
	"fa-calendar-times-o": {
		"unicode": "\\f273",
		"name": "Calendar times o"
	},
	"fa-camera": {
		"unicode": "\\f030",
		"name": "Camera"
	},
	"fa-camera-retro": {
		"unicode": "\\f083",
		"name": "Camera retro"
	},
	"fa-car": {
		"unicode": "\\f1b9",
		"name": "Car"
	},
	"fa-caret-down": {
		"unicode": "\\f0d7",
		"name": "Caret down"
	},
	"fa-caret-left": {
		"unicode": "\\f0d9",
		"name": "Caret left"
	},
	"fa-caret-right": {
		"unicode": "\\f0da",
		"name": "Caret right"
	},
	"fa-caret-square-o-down": {
		"unicode": "\\f150",
		"name": "Caret square o down"
	},
	"fa-caret-square-o-left": {
		"unicode": "\\f191",
		"name": "Caret square o left"
	},
	"fa-caret-square-o-right": {
		"unicode": "\\f152",
		"name": "Caret square o right"
	},
	"fa-caret-square-o-up": {
		"unicode": "\\f151",
		"name": "Caret square o up"
	},
	"fa-caret-up": {
		"unicode": "\\f0d8",
		"name": "Caret up"
	},
	"fa-cart-arrow-down": {
		"unicode": "\\f218",
		"name": "Cart arrow down"
	},
	"fa-cart-plus": {
		"unicode": "\\f217",
		"name": "Cart plus"
	},
	"fa-cc": {
		"unicode": "\\f20a",
		"name": "Cc"
	},
	"fa-cc-amex": {
		"unicode": "\\f1f3",
		"name": "Cc amex"
	},
	"fa-cc-diners-club": {
		"unicode": "\\f24c",
		"name": "Cc diners club"
	},
	"fa-cc-discover": {
		"unicode": "\\f1f2",
		"name": "Cc discover"
	},
	"fa-cc-jcb": {
		"unicode": "\\f24b",
		"name": "Cc jcb"
	},
	"fa-cc-mastercard": {
		"unicode": "\\f1f1",
		"name": "Cc mastercard"
	},
	"fa-cc-paypal": {
		"unicode": "\\f1f4",
		"name": "Cc paypal"
	},
	"fa-cc-stripe": {
		"unicode": "\\f1f5",
		"name": "Cc stripe"
	},
	"fa-cc-visa": {
		"unicode": "\\f1f0",
		"name": "Cc visa"
	},
	"fa-certificate": {
		"unicode": "\\f0a3",
		"name": "Certificate"
	},
	"fa-chain-broken": {
		"unicode": "\\f127",
		"name": "Chain broken"
	},
	"fa-check": {
		"unicode": "\\f00c",
		"name": "Check"
	},
	"fa-check-circle": {
		"unicode": "\\f058",
		"name": "Check circle"
	},
	"fa-check-circle-o": {
		"unicode": "\\f05d",
		"name": "Check circle o"
	},
	"fa-check-square": {
		"unicode": "\\f14a",
		"name": "Check square"
	},
	"fa-check-square-o": {
		"unicode": "\\f046",
		"name": "Check square o"
	},
	"fa-chevron-circle-down": {
		"unicode": "\\f13a",
		"name": "Chevron circle down"
	},
	"fa-chevron-circle-left": {
		"unicode": "\\f137",
		"name": "Chevron circle left"
	},
	"fa-chevron-circle-right": {
		"unicode": "\\f138",
		"name": "Chevron circle right"
	},
	"fa-chevron-circle-up": {
		"unicode": "\\f139",
		"name": "Chevron circle up"
	},
	"fa-chevron-down": {
		"unicode": "\\f078",
		"name": "Chevron down"
	},
	"fa-chevron-left": {
		"unicode": "\\f053",
		"name": "Chevron left"
	},
	"fa-chevron-right": {
		"unicode": "\\f054",
		"name": "Chevron right"
	},
	"fa-chevron-up": {
		"unicode": "\\f077",
		"name": "Chevron up"
	},
	"fa-child": {
		"unicode": "\\f1ae",
		"name": "Child"
	},
	"fa-chrome": {
		"unicode": "\\f268",
		"name": "Chrome"
	},
	"fa-circle": {
		"unicode": "\\f111",
		"name": "Circle"
	},
	"fa-circle-o": {
		"unicode": "\\f10c",
		"name": "Circle o"
	},
	"fa-circle-o-notch": {
		"unicode": "\\f1ce",
		"name": "Circle o notch"
	},
	"fa-circle-thin": {
		"unicode": "\\f1db",
		"name": "Circle thin"
	},
	"fa-clipboard": {
		"unicode": "\\f0ea",
		"name": "Clipboard"
	},
	"fa-clock-o": {
		"unicode": "\\f017",
		"name": "Clock o"
	},
	"fa-clone": {
		"unicode": "\\f24d",
		"name": "Clone"
	},
	"fa-cloud": {
		"unicode": "\\f0c2",
		"name": "Cloud"
	},
	"fa-cloud-download": {
		"unicode": "\\f0ed",
		"name": "Cloud download"
	},
	"fa-cloud-upload": {
		"unicode": "\\f0ee",
		"name": "Cloud upload"
	},
	"fa-code": {
		"unicode": "\\f121",
		"name": "Code"
	},
	"fa-code-fork": {
		"unicode": "\\f126",
		"name": "Code fork"
	},
	"fa-codepen": {
		"unicode": "\\f1cb",
		"name": "Codepen"
	},
	"fa-codiepie": {
		"unicode": "\\f284",
		"name": "Codiepie"
	},
	"fa-coffee": {
		"unicode": "\\f0f4",
		"name": "Coffee"
	},
	"fa-cog": {
		"unicode": "\\f013",
		"name": "Cog"
	},
	"fa-cogs": {
		"unicode": "\\f085",
		"name": "Cogs"
	},
	"fa-columns": {
		"unicode": "\\f0db",
		"name": "Columns"
	},
	"fa-comment": {
		"unicode": "\\f075",
		"name": "Comment"
	},
	"fa-comment-o": {
		"unicode": "\\f0e5",
		"name": "Comment o"
	},
	"fa-commenting": {
		"unicode": "\\f27a",
		"name": "Commenting"
	},
	"fa-commenting-o": {
		"unicode": "\\f27b",
		"name": "Commenting o"
	},
	"fa-comments": {
		"unicode": "\\f086",
		"name": "Comments"
	},
	"fa-comments-o": {
		"unicode": "\\f0e6",
		"name": "Comments o"
	},
	"fa-compass": {
		"unicode": "\\f14e",
		"name": "Compass"
	},
	"fa-compress": {
		"unicode": "\\f066",
		"name": "Compress"
	},
	"fa-connectdevelop": {
		"unicode": "\\f20e",
		"name": "Connectdevelop"
	},
	"fa-contao": {
		"unicode": "\\f26d",
		"name": "Contao"
	},
	"fa-copyright": {
		"unicode": "\\f1f9",
		"name": "Copyright"
	},
	"fa-creative-commons": {
		"unicode": "\\f25e",
		"name": "Creative commons"
	},
	"fa-credit-card": {
		"unicode": "\\f09d",
		"name": "Credit card"
	},
	"fa-credit-card-alt": {
		"unicode": "\\f283",
		"name": "Credit card alt"
	},
	"fa-crop": {
		"unicode": "\\f125",
		"name": "Crop"
	},
	"fa-crosshairs": {
		"unicode": "\\f05b",
		"name": "Crosshairs"
	},
	"fa-css3": {
		"unicode": "\\f13c",
		"name": "Css3"
	},
	"fa-cube": {
		"unicode": "\\f1b2",
		"name": "Cube"
	},
	"fa-cubes": {
		"unicode": "\\f1b3",
		"name": "Cubes"
	},
	"fa-cutlery": {
		"unicode": "\\f0f5",
		"name": "Cutlery"
	},
	"fa-dashcube": {
		"unicode": "\\f210",
		"name": "Dashcube"
	},
	"fa-database": {
		"unicode": "\\f1c0",
		"name": "Database"
	},
	"fa-deaf": {
		"unicode": "\\f2a4",
		"name": "Deaf"
	},
	"fa-delicious": {
		"unicode": "\\f1a5",
		"name": "Delicious"
	},
	"fa-desktop": {
		"unicode": "\\f108",
		"name": "Desktop"
	},
	"fa-deviantart": {
		"unicode": "\\f1bd",
		"name": "Deviantart"
	},
	"fa-diamond": {
		"unicode": "\\f219",
		"name": "Diamond"
	},
	"fa-digg": {
		"unicode": "\\f1a6",
		"name": "Digg"
	},
	"fa-dot-circle-o": {
		"unicode": "\\f192",
		"name": "Dot circle o"
	},
	"fa-download": {
		"unicode": "\\f019",
		"name": "Download"
	},
	"fa-dribbble": {
		"unicode": "\\f17d",
		"name": "Dribbble"
	},
	"fa-dropbox": {
		"unicode": "\\f16b",
		"name": "Dropbox"
	},
	"fa-drupal": {
		"unicode": "\\f1a9",
		"name": "Drupal"
	},
	"fa-edge": {
		"unicode": "\\f282",
		"name": "Edge"
	},
	"fa-eercast": {
		"unicode": "\\f2da",
		"name": "Eercast"
	},
	"fa-eject": {
		"unicode": "\\f052",
		"name": "Eject"
	},
	"fa-ellipsis-h": {
		"unicode": "\\f141",
		"name": "Ellipsis h"
	},
	"fa-ellipsis-v": {
		"unicode": "\\f142",
		"name": "Ellipsis v"
	},
	"fa-empire": {
		"unicode": "\\f1d1",
		"name": "Empire"
	},
	"fa-envelope": {
		"unicode": "\\f0e0",
		"name": "Envelope"
	},
	"fa-envelope-o": {
		"unicode": "\\f003",
		"name": "Envelope o"
	},
	"fa-envelope-open": {
		"unicode": "\\f2b6",
		"name": "Envelope open"
	},
	"fa-envelope-open-o": {
		"unicode": "\\f2b7",
		"name": "Envelope open o"
	},
	"fa-envelope-square": {
		"unicode": "\\f199",
		"name": "Envelope square"
	},
	"fa-envira": {
		"unicode": "\\f299",
		"name": "Envira"
	},
	"fa-eraser": {
		"unicode": "\\f12d",
		"name": "Eraser"
	},
	"fa-etsy": {
		"unicode": "\\f2d7",
		"name": "Etsy"
	},
	"fa-eur": {
		"unicode": "\\f153",
		"name": "Eur"
	},
	"fa-exchange": {
		"unicode": "\\f0ec",
		"name": "Exchange"
	},
	"fa-exclamation": {
		"unicode": "\\f12a",
		"name": "Exclamation"
	},
	"fa-exclamation-circle": {
		"unicode": "\\f06a",
		"name": "Exclamation circle"
	},
	"fa-exclamation-triangle": {
		"unicode": "\\f071",
		"name": "Exclamation triangle"
	},
	"fa-expand": {
		"unicode": "\\f065",
		"name": "Expand"
	},
	"fa-expeditedssl": {
		"unicode": "\\f23e",
		"name": "Expeditedssl"
	},
	"fa-external-link": {
		"unicode": "\\f08e",
		"name": "External link"
	},
	"fa-external-link-square": {
		"unicode": "\\f14c",
		"name": "External link square"
	},
	"fa-eye": {
		"unicode": "\\f06e",
		"name": "Eye"
	},
	"fa-eye-slash": {
		"unicode": "\\f070",
		"name": "Eye slash"
	},
	"fa-eyedropper": {
		"unicode": "\\f1fb",
		"name": "Eyedropper"
	},
	"fa-facebook": {
		"unicode": "\\f09a",
		"name": "Facebook"
	},
	"fa-facebook-official": {
		"unicode": "\\f230",
		"name": "Facebook official"
	},
	"fa-facebook-square": {
		"unicode": "\\f082",
		"name": "Facebook square"
	},
	"fa-fast-backward": {
		"unicode": "\\f049",
		"name": "Fast backward"
	},
	"fa-fast-forward": {
		"unicode": "\\f050",
		"name": "Fast forward"
	},
	"fa-fax": {
		"unicode": "\\f1ac",
		"name": "Fax"
	},
	"fa-female": {
		"unicode": "\\f182",
		"name": "Female"
	},
	"fa-fighter-jet": {
		"unicode": "\\f0fb",
		"name": "Fighter jet"
	},
	"fa-file": {
		"unicode": "\\f15b",
		"name": "File"
	},
	"fa-file-archive-o": {
		"unicode": "\\f1c6",
		"name": "File archive o"
	},
	"fa-file-audio-o": {
		"unicode": "\\f1c7",
		"name": "File audio o"
	},
	"fa-file-code-o": {
		"unicode": "\\f1c9",
		"name": "File code o"
	},
	"fa-file-excel-o": {
		"unicode": "\\f1c3",
		"name": "File excel o"
	},
	"fa-file-image-o": {
		"unicode": "\\f1c5",
		"name": "File image o"
	},
	"fa-file-o": {
		"unicode": "\\f016",
		"name": "File o"
	},
	"fa-file-pdf-o": {
		"unicode": "\\f1c1",
		"name": "File pdf o"
	},
	"fa-file-powerpoint-o": {
		"unicode": "\\f1c4",
		"name": "File powerpoint o"
	},
	"fa-file-text": {
		"unicode": "\\f15c",
		"name": "File text"
	},
	"fa-file-text-o": {
		"unicode": "\\f0f6",
		"name": "File text o"
	},
	"fa-file-video-o": {
		"unicode": "\\f1c8",
		"name": "File video o"
	},
	"fa-file-word-o": {
		"unicode": "\\f1c2",
		"name": "File word o"
	},
	"fa-files-o": {
		"unicode": "\\f0c5",
		"name": "Files o"
	},
	"fa-film": {
		"unicode": "\\f008",
		"name": "Film"
	},
	"fa-filter": {
		"unicode": "\\f0b0",
		"name": "Filter"
	},
	"fa-fire": {
		"unicode": "\\f06d",
		"name": "Fire"
	},
	"fa-fire-extinguisher": {
		"unicode": "\\f134",
		"name": "Fire extinguisher"
	},
	"fa-firefox": {
		"unicode": "\\f269",
		"name": "Firefox"
	},
	"fa-first-order": {
		"unicode": "\\f2b0",
		"name": "First order"
	},
	"fa-flag": {
		"unicode": "\\f024",
		"name": "Flag"
	},
	"fa-flag-checkered": {
		"unicode": "\\f11e",
		"name": "Flag checkered"
	},
	"fa-flag-o": {
		"unicode": "\\f11d",
		"name": "Flag o"
	},
	"fa-flask": {
		"unicode": "\\f0c3",
		"name": "Flask"
	},
	"fa-flickr": {
		"unicode": "\\f16e",
		"name": "Flickr"
	},
	"fa-floppy-o": {
		"unicode": "\\f0c7",
		"name": "Floppy o"
	},
	"fa-folder": {
		"unicode": "\\f07b",
		"name": "Folder"
	},
	"fa-folder-o": {
		"unicode": "\\f114",
		"name": "Folder o"
	},
	"fa-folder-open": {
		"unicode": "\\f07c",
		"name": "Folder open"
	},
	"fa-folder-open-o": {
		"unicode": "\\f115",
		"name": "Folder open o"
	},
	"fa-font": {
		"unicode": "\\f031",
		"name": "Font"
	},
	"fa-font-awesome": {
		"unicode": "\\f2b4",
		"name": "Font awesome"
	},
	"fa-fonticons": {
		"unicode": "\\f280",
		"name": "Fonticons"
	},
	"fa-fort-awesome": {
		"unicode": "\\f286",
		"name": "Fort awesome"
	},
	"fa-forumbee": {
		"unicode": "\\f211",
		"name": "Forumbee"
	},
	"fa-forward": {
		"unicode": "\\f04e",
		"name": "Forward"
	},
	"fa-foursquare": {
		"unicode": "\\f180",
		"name": "Foursquare"
	},
	"fa-free-code-camp": {
		"unicode": "\\f2c5",
		"name": "Free code camp"
	},
	"fa-frown-o": {
		"unicode": "\\f119",
		"name": "Frown o"
	},
	"fa-futbol-o": {
		"unicode": "\\f1e3",
		"name": "Futbol o"
	},
	"fa-gamepad": {
		"unicode": "\\f11b",
		"name": "Gamepad"
	},
	"fa-gavel": {
		"unicode": "\\f0e3",
		"name": "Gavel"
	},
	"fa-gbp": {
		"unicode": "\\f154",
		"name": "Gbp"
	},
	"fa-genderless": {
		"unicode": "\\f22d",
		"name": "Genderless"
	},
	"fa-get-pocket": {
		"unicode": "\\f265",
		"name": "Get pocket"
	},
	"fa-gg": {
		"unicode": "\\f260",
		"name": "Gg"
	},
	"fa-gg-circle": {
		"unicode": "\\f261",
		"name": "Gg circle"
	},
	"fa-gift": {
		"unicode": "\\f06b",
		"name": "Gift"
	},
	"fa-git": {
		"unicode": "\\f1d3",
		"name": "Git"
	},
	"fa-git-square": {
		"unicode": "\\f1d2",
		"name": "Git square"
	},
	"fa-github": {
		"unicode": "\\f09b",
		"name": "Github"
	},
	"fa-github-alt": {
		"unicode": "\\f113",
		"name": "Github alt"
	},
	"fa-github-square": {
		"unicode": "\\f092",
		"name": "Github square"
	},
	"fa-gitlab": {
		"unicode": "\\f296",
		"name": "Gitlab"
	},
	"fa-glass": {
		"unicode": "\\f000",
		"name": "Glass"
	},
	"fa-glide": {
		"unicode": "\\f2a5",
		"name": "Glide"
	},
	"fa-glide-g": {
		"unicode": "\\f2a6",
		"name": "Glide g"
	},
	"fa-globe": {
		"unicode": "\\f0ac",
		"name": "Globe"
	},
	"fa-google": {
		"unicode": "\\f1a0",
		"name": "Google"
	},
	"fa-google-plus": {
		"unicode": "\\f0d5",
		"name": "Google plus"
	},
	"fa-google-plus-official": {
		"unicode": "\\f2b3",
		"name": "Google plus official"
	},
	"fa-google-plus-square": {
		"unicode": "\\f0d4",
		"name": "Google plus square"
	},
	"fa-google-wallet": {
		"unicode": "\\f1ee",
		"name": "Google wallet"
	},
	"fa-graduation-cap": {
		"unicode": "\\f19d",
		"name": "Graduation cap"
	},
	"fa-gratipay": {
		"unicode": "\\f184",
		"name": "Gratipay"
	},
	"fa-grav": {
		"unicode": "\\f2d6",
		"name": "Grav"
	},
	"fa-h-square": {
		"unicode": "\\f0fd",
		"name": "H square"
	},
	"fa-hacker-news": {
		"unicode": "\\f1d4",
		"name": "Hacker news"
	},
	"fa-hand-lizard-o": {
		"unicode": "\\f258",
		"name": "Hand lizard o"
	},
	"fa-hand-o-down": {
		"unicode": "\\f0a7",
		"name": "Hand o down"
	},
	"fa-hand-o-left": {
		"unicode": "\\f0a5",
		"name": "Hand o left"
	},
	"fa-hand-o-right": {
		"unicode": "\\f0a4",
		"name": "Hand o right"
	},
	"fa-hand-o-up": {
		"unicode": "\\f0a6",
		"name": "Hand o up"
	},
	"fa-hand-paper-o": {
		"unicode": "\\f256",
		"name": "Hand paper o"
	},
	"fa-hand-peace-o": {
		"unicode": "\\f25b",
		"name": "Hand peace o"
	},
	"fa-hand-pointer-o": {
		"unicode": "\\f25a",
		"name": "Hand pointer o"
	},
	"fa-hand-rock-o": {
		"unicode": "\\f255",
		"name": "Hand rock o"
	},
	"fa-hand-scissors-o": {
		"unicode": "\\f257",
		"name": "Hand scissors o"
	},
	"fa-hand-spock-o": {
		"unicode": "\\f259",
		"name": "Hand spock o"
	},
	"fa-handshake-o": {
		"unicode": "\\f2b5",
		"name": "Handshake o"
	},
	"fa-hashtag": {
		"unicode": "\\f292",
		"name": "Hashtag"
	},
	"fa-hdd-o": {
		"unicode": "\\f0a0",
		"name": "Hdd o"
	},
	"fa-header": {
		"unicode": "\\f1dc",
		"name": "Header"
	},
	"fa-headphones": {
		"unicode": "\\f025",
		"name": "Headphones"
	},
	"fa-heart": {
		"unicode": "\\f004",
		"name": "Heart"
	},
	"fa-heart-o": {
		"unicode": "\\f08a",
		"name": "Heart o"
	},
	"fa-heartbeat": {
		"unicode": "\\f21e",
		"name": "Heartbeat"
	},
	"fa-history": {
		"unicode": "\\f1da",
		"name": "History"
	},
	"fa-home": {
		"unicode": "\\f015",
		"name": "Home"
	},
	"fa-hospital-o": {
		"unicode": "\\f0f8",
		"name": "Hospital o"
	},
	"fa-hourglass": {
		"unicode": "\\f254",
		"name": "Hourglass"
	},
	"fa-hourglass-end": {
		"unicode": "\\f253",
		"name": "Hourglass end"
	},
	"fa-hourglass-half": {
		"unicode": "\\f252",
		"name": "Hourglass half"
	},
	"fa-hourglass-o": {
		"unicode": "\\f250",
		"name": "Hourglass o"
	},
	"fa-hourglass-start": {
		"unicode": "\\f251",
		"name": "Hourglass start"
	},
	"fa-houzz": {
		"unicode": "\\f27c",
		"name": "Houzz"
	},
	"fa-html5": {
		"unicode": "\\f13b",
		"name": "Html5"
	},
	"fa-i-cursor": {
		"unicode": "\\f246",
		"name": "I cursor"
	},
	"fa-id-badge": {
		"unicode": "\\f2c1",
		"name": "Id badge"
	},
	"fa-id-card": {
		"unicode": "\\f2c2",
		"name": "Id card"
	},
	"fa-id-card-o": {
		"unicode": "\\f2c3",
		"name": "Id card o"
	},
	"fa-ils": {
		"unicode": "\\f20b",
		"name": "Ils"
	},
	"fa-imdb": {
		"unicode": "\\f2d8",
		"name": "Imdb"
	},
	"fa-inbox": {
		"unicode": "\\f01c",
		"name": "Inbox"
	},
	"fa-indent": {
		"unicode": "\\f03c",
		"name": "Indent"
	},
	"fa-industry": {
		"unicode": "\\f275",
		"name": "Industry"
	},
	"fa-info": {
		"unicode": "\\f129",
		"name": "Info"
	},
	"fa-info-circle": {
		"unicode": "\\f05a",
		"name": "Info circle"
	},
	"fa-inr": {
		"unicode": "\\f156",
		"name": "Inr"
	},
	"fa-instagram": {
		"unicode": "\\f16d",
		"name": "Instagram"
	},
	"fa-internet-explorer": {
		"unicode": "\\f26b",
		"name": "Internet explorer"
	},
	"fa-ioxhost": {
		"unicode": "\\f208",
		"name": "Ioxhost"
	},
	"fa-italic": {
		"unicode": "\\f033",
		"name": "Italic"
	},
	"fa-joomla": {
		"unicode": "\\f1aa",
		"name": "Joomla"
	},
	"fa-jpy": {
		"unicode": "\\f157",
		"name": "Jpy"
	},
	"fa-jsfiddle": {
		"unicode": "\\f1cc",
		"name": "Jsfiddle"
	},
	"fa-key": {
		"unicode": "\\f084",
		"name": "Key"
	},
	"fa-keyboard-o": {
		"unicode": "\\f11c",
		"name": "Keyboard o"
	},
	"fa-krw": {
		"unicode": "\\f159",
		"name": "Krw"
	},
	"fa-language": {
		"unicode": "\\f1ab",
		"name": "Language"
	},
	"fa-laptop": {
		"unicode": "\\f109",
		"name": "Laptop"
	},
	"fa-lastfm": {
		"unicode": "\\f202",
		"name": "Lastfm"
	},
	"fa-lastfm-square": {
		"unicode": "\\f203",
		"name": "Lastfm square"
	},
	"fa-leaf": {
		"unicode": "\\f06c",
		"name": "Leaf"
	},
	"fa-leanpub": {
		"unicode": "\\f212",
		"name": "Leanpub"
	},
	"fa-lemon-o": {
		"unicode": "\\f094",
		"name": "Lemon o"
	},
	"fa-level-down": {
		"unicode": "\\f149",
		"name": "Level down"
	},
	"fa-level-up": {
		"unicode": "\\f148",
		"name": "Level up"
	},
	"fa-life-ring": {
		"unicode": "\\f1cd",
		"name": "Life ring"
	},
	"fa-lightbulb-o": {
		"unicode": "\\f0eb",
		"name": "Lightbulb o"
	},
	"fa-line-chart": {
		"unicode": "\\f201",
		"name": "Line chart"
	},
	"fa-link": {
		"unicode": "\\f0c1",
		"name": "Link"
	},
	"fa-linkedin": {
		"unicode": "\\f0e1",
		"name": "Linkedin"
	},
	"fa-linkedin-square": {
		"unicode": "\\f08c",
		"name": "Linkedin square"
	},
	"fa-linode": {
		"unicode": "\\f2b8",
		"name": "Linode"
	},
	"fa-linux": {
		"unicode": "\\f17c",
		"name": "Linux"
	},
	"fa-list": {
		"unicode": "\\f03a",
		"name": "List"
	},
	"fa-list-alt": {
		"unicode": "\\f022",
		"name": "List alt"
	},
	"fa-list-ol": {
		"unicode": "\\f0cb",
		"name": "List ol"
	},
	"fa-list-ul": {
		"unicode": "\\f0ca",
		"name": "List ul"
	},
	"fa-location-arrow": {
		"unicode": "\\f124",
		"name": "Location arrow"
	},
	"fa-lock": {
		"unicode": "\\f023",
		"name": "Lock"
	},
	"fa-long-arrow-down": {
		"unicode": "\\f175",
		"name": "Long arrow down"
	},
	"fa-long-arrow-left": {
		"unicode": "\\f177",
		"name": "Long arrow left"
	},
	"fa-long-arrow-right": {
		"unicode": "\\f178",
		"name": "Long arrow right"
	},
	"fa-long-arrow-up": {
		"unicode": "\\f176",
		"name": "Long arrow up"
	},
	"fa-low-vision": {
		"unicode": "\\f2a8",
		"name": "Low vision"
	},
	"fa-magic": {
		"unicode": "\\f0d0",
		"name": "Magic"
	},
	"fa-magnet": {
		"unicode": "\\f076",
		"name": "Magnet"
	},
	"fa-male": {
		"unicode": "\\f183",
		"name": "Male"
	},
	"fa-map": {
		"unicode": "\\f279",
		"name": "Map"
	},
	"fa-map-marker": {
		"unicode": "\\f041",
		"name": "Map marker"
	},
	"fa-map-o": {
		"unicode": "\\f278",
		"name": "Map o"
	},
	"fa-map-pin": {
		"unicode": "\\f276",
		"name": "Map pin"
	},
	"fa-map-signs": {
		"unicode": "\\f277",
		"name": "Map signs"
	},
	"fa-mars": {
		"unicode": "\\f222",
		"name": "Mars"
	},
	"fa-mars-double": {
		"unicode": "\\f227",
		"name": "Mars double"
	},
	"fa-mars-stroke": {
		"unicode": "\\f229",
		"name": "Mars stroke"
	},
	"fa-mars-stroke-h": {
		"unicode": "\\f22b",
		"name": "Mars stroke h"
	},
	"fa-mars-stroke-v": {
		"unicode": "\\f22a",
		"name": "Mars stroke v"
	},
	"fa-maxcdn": {
		"unicode": "\\f136",
		"name": "Maxcdn"
	},
	"fa-meanpath": {
		"unicode": "\\f20c",
		"name": "Meanpath"
	},
	"fa-medium": {
		"unicode": "\\f23a",
		"name": "Medium"
	},
	"fa-medkit": {
		"unicode": "\\f0fa",
		"name": "Medkit"
	},
	"fa-meetup": {
		"unicode": "\\f2e0",
		"name": "Meetup"
	},
	"fa-meh-o": {
		"unicode": "\\f11a",
		"name": "Meh o"
	},
	"fa-mercury": {
		"unicode": "\\f223",
		"name": "Mercury"
	},
	"fa-microchip": {
		"unicode": "\\f2db",
		"name": "Microchip"
	},
	"fa-microphone": {
		"unicode": "\\f130",
		"name": "Microphone"
	},
	"fa-microphone-slash": {
		"unicode": "\\f131",
		"name": "Microphone slash"
	},
	"fa-minus": {
		"unicode": "\\f068",
		"name": "Minus"
	},
	"fa-minus-circle": {
		"unicode": "\\f056",
		"name": "Minus circle"
	},
	"fa-minus-square": {
		"unicode": "\\f146",
		"name": "Minus square"
	},
	"fa-minus-square-o": {
		"unicode": "\\f147",
		"name": "Minus square o"
	},
	"fa-mixcloud": {
		"unicode": "\\f289",
		"name": "Mixcloud"
	},
	"fa-mobile": {
		"unicode": "\\f10b",
		"name": "Mobile"
	},
	"fa-modx": {
		"unicode": "\\f285",
		"name": "Modx"
	},
	"fa-money": {
		"unicode": "\\f0d6",
		"name": "Money"
	},
	"fa-moon-o": {
		"unicode": "\\f186",
		"name": "Moon o"
	},
	"fa-motorcycle": {
		"unicode": "\\f21c",
		"name": "Motorcycle"
	},
	"fa-mouse-pointer": {
		"unicode": "\\f245",
		"name": "Mouse pointer"
	},
	"fa-music": {
		"unicode": "\\f001",
		"name": "Music"
	},
	"fa-neuter": {
		"unicode": "\\f22c",
		"name": "Neuter"
	},
	"fa-newspaper-o": {
		"unicode": "\\f1ea",
		"name": "Newspaper o"
	},
	"fa-object-group": {
		"unicode": "\\f247",
		"name": "Object group"
	},
	"fa-object-ungroup": {
		"unicode": "\\f248",
		"name": "Object ungroup"
	},
	"fa-odnoklassniki": {
		"unicode": "\\f263",
		"name": "Odnoklassniki"
	},
	"fa-odnoklassniki-square": {
		"unicode": "\\f264",
		"name": "Odnoklassniki square"
	},
	"fa-opencart": {
		"unicode": "\\f23d",
		"name": "Opencart"
	},
	"fa-openid": {
		"unicode": "\\f19b",
		"name": "Openid"
	},
	"fa-opera": {
		"unicode": "\\f26a",
		"name": "Opera"
	},
	"fa-optin-monster": {
		"unicode": "\\f23c",
		"name": "Optin monster"
	},
	"fa-outdent": {
		"unicode": "\\f03b",
		"name": "Outdent"
	},
	"fa-pagelines": {
		"unicode": "\\f18c",
		"name": "Pagelines"
	},
	"fa-paint-brush": {
		"unicode": "\\f1fc",
		"name": "Paint brush"
	},
	"fa-paper-plane": {
		"unicode": "\\f1d8",
		"name": "Paper plane"
	},
	"fa-paper-plane-o": {
		"unicode": "\\f1d9",
		"name": "Paper plane o"
	},
	"fa-paperclip": {
		"unicode": "\\f0c6",
		"name": "Paperclip"
	},
	"fa-paragraph": {
		"unicode": "\\f1dd",
		"name": "Paragraph"
	},
	"fa-pause": {
		"unicode": "\\f04c",
		"name": "Pause"
	},
	"fa-pause-circle": {
		"unicode": "\\f28b",
		"name": "Pause circle"
	},
	"fa-pause-circle-o": {
		"unicode": "\\f28c",
		"name": "Pause circle o"
	},
	"fa-paw": {
		"unicode": "\\f1b0",
		"name": "Paw"
	},
	"fa-paypal": {
		"unicode": "\\f1ed",
		"name": "Paypal"
	},
	"fa-pencil": {
		"unicode": "\\f040",
		"name": "Pencil"
	},
	"fa-pencil-square": {
		"unicode": "\\f14b",
		"name": "Pencil square"
	},
	"fa-pencil-square-o": {
		"unicode": "\\f044",
		"name": "Pencil square o"
	},
	"fa-percent": {
		"unicode": "\\f295",
		"name": "Percent"
	},
	"fa-phone": {
		"unicode": "\\f095",
		"name": "Phone"
	},
	"fa-phone-square": {
		"unicode": "\\f098",
		"name": "Phone square"
	},
	"fa-picture-o": {
		"unicode": "\\f03e",
		"name": "Picture o"
	},
	"fa-pie-chart": {
		"unicode": "\\f200",
		"name": "Pie chart"
	},
	"fa-pied-piper": {
		"unicode": "\\f2ae",
		"name": "Pied piper"
	},
	"fa-pied-piper-alt": {
		"unicode": "\\f1a8",
		"name": "Pied piper alt"
	},
	"fa-pied-piper-pp": {
		"unicode": "\\f1a7",
		"name": "Pied piper pp"
	},
	"fa-pinterest": {
		"unicode": "\\f0d2",
		"name": "Pinterest"
	},
	"fa-pinterest-p": {
		"unicode": "\\f231",
		"name": "Pinterest p"
	},
	"fa-pinterest-square": {
		"unicode": "\\f0d3",
		"name": "Pinterest square"
	},
	"fa-plane": {
		"unicode": "\\f072",
		"name": "Plane"
	},
	"fa-play": {
		"unicode": "\\f04b",
		"name": "Play"
	},
	"fa-play-circle": {
		"unicode": "\\f144",
		"name": "Play circle"
	},
	"fa-play-circle-o": {
		"unicode": "\\f01d",
		"name": "Play circle o"
	},
	"fa-plug": {
		"unicode": "\\f1e6",
		"name": "Plug"
	},
	"fa-plus": {
		"unicode": "\\f067",
		"name": "Plus"
	},
	"fa-plus-circle": {
		"unicode": "\\f055",
		"name": "Plus circle"
	},
	"fa-plus-square": {
		"unicode": "\\f0fe",
		"name": "Plus square"
	},
	"fa-plus-square-o": {
		"unicode": "\\f196",
		"name": "Plus square o"
	},
	"fa-podcast": {
		"unicode": "\\f2ce",
		"name": "Podcast"
	},
	"fa-power-off": {
		"unicode": "\\f011",
		"name": "Power off"
	},
	"fa-print": {
		"unicode": "\\f02f",
		"name": "Print"
	},
	"fa-product-hunt": {
		"unicode": "\\f288",
		"name": "Product hunt"
	},
	"fa-puzzle-piece": {
		"unicode": "\\f12e",
		"name": "Puzzle piece"
	},
	"fa-qq": {
		"unicode": "\\f1d6",
		"name": "Qq"
	},
	"fa-qrcode": {
		"unicode": "\\f029",
		"name": "Qrcode"
	},
	"fa-question": {
		"unicode": "\\f128",
		"name": "Question"
	},
	"fa-question-circle": {
		"unicode": "\\f059",
		"name": "Question circle"
	},
	"fa-question-circle-o": {
		"unicode": "\\f29c",
		"name": "Question circle o"
	},
	"fa-quora": {
		"unicode": "\\f2c4",
		"name": "Quora"
	},
	"fa-quote-left": {
		"unicode": "\\f10d",
		"name": "Quote left"
	},
	"fa-quote-right": {
		"unicode": "\\f10e",
		"name": "Quote right"
	},
	"fa-random": {
		"unicode": "\\f074",
		"name": "Random"
	},
	"fa-ravelry": {
		"unicode": "\\f2d9",
		"name": "Ravelry"
	},
	"fa-rebel": {
		"unicode": "\\f1d0",
		"name": "Rebel"
	},
	"fa-recycle": {
		"unicode": "\\f1b8",
		"name": "Recycle"
	},
	"fa-reddit": {
		"unicode": "\\f1a1",
		"name": "Reddit"
	},
	"fa-reddit-alien": {
		"unicode": "\\f281",
		"name": "Reddit alien"
	},
	"fa-reddit-square": {
		"unicode": "\\f1a2",
		"name": "Reddit square"
	},
	"fa-refresh": {
		"unicode": "\\f021",
		"name": "Refresh"
	},
	"fa-registered": {
		"unicode": "\\f25d",
		"name": "Registered"
	},
	"fa-renren": {
		"unicode": "\\f18b",
		"name": "Renren"
	},
	"fa-repeat": {
		"unicode": "\\f01e",
		"name": "Repeat"
	},
	"fa-reply": {
		"unicode": "\\f112",
		"name": "Reply"
	},
	"fa-reply-all": {
		"unicode": "\\f122",
		"name": "Reply all"
	},
	"fa-retweet": {
		"unicode": "\\f079",
		"name": "Retweet"
	},
	"fa-road": {
		"unicode": "\\f018",
		"name": "Road"
	},
	"fa-rocket": {
		"unicode": "\\f135",
		"name": "Rocket"
	},
	"fa-rss": {
		"unicode": "\\f09e",
		"name": "Rss"
	},
	"fa-rss-square": {
		"unicode": "\\f143",
		"name": "Rss square"
	},
	"fa-rub": {
		"unicode": "\\f158",
		"name": "Rub"
	},
	"fa-safari": {
		"unicode": "\\f267",
		"name": "Safari"
	},
	"fa-scissors": {
		"unicode": "\\f0c4",
		"name": "Scissors"
	},
	"fa-scribd": {
		"unicode": "\\f28a",
		"name": "Scribd"
	},
	"fa-search": {
		"unicode": "\\f002",
		"name": "Search"
	},
	"fa-search-minus": {
		"unicode": "\\f010",
		"name": "Search minus"
	},
	"fa-search-plus": {
		"unicode": "\\f00e",
		"name": "Search plus"
	},
	"fa-sellsy": {
		"unicode": "\\f213",
		"name": "Sellsy"
	},
	"fa-server": {
		"unicode": "\\f233",
		"name": "Server"
	},
	"fa-share": {
		"unicode": "\\f064",
		"name": "Share"
	},
	"fa-share-alt": {
		"unicode": "\\f1e0",
		"name": "Share alt"
	},
	"fa-share-alt-square": {
		"unicode": "\\f1e1",
		"name": "Share alt square"
	},
	"fa-share-square": {
		"unicode": "\\f14d",
		"name": "Share square"
	},
	"fa-share-square-o": {
		"unicode": "\\f045",
		"name": "Share square o"
	},
	"fa-shield": {
		"unicode": "\\f132",
		"name": "Shield"
	},
	"fa-ship": {
		"unicode": "\\f21a",
		"name": "Ship"
	},
	"fa-shirtsinbulk": {
		"unicode": "\\f214",
		"name": "Shirtsinbulk"
	},
	"fa-shopping-bag": {
		"unicode": "\\f290",
		"name": "Shopping bag"
	},
	"fa-shopping-basket": {
		"unicode": "\\f291",
		"name": "Shopping basket"
	},
	"fa-shopping-cart": {
		"unicode": "\\f07a",
		"name": "Shopping cart"
	},
	"fa-shower": {
		"unicode": "\\f2cc",
		"name": "Shower"
	},
	"fa-sign-in": {
		"unicode": "\\f090",
		"name": "Sign in"
	},
	"fa-sign-language": {
		"unicode": "\\f2a7",
		"name": "Sign language"
	},
	"fa-sign-out": {
		"unicode": "\\f08b",
		"name": "Sign out"
	},
	"fa-signal": {
		"unicode": "\\f012",
		"name": "Signal"
	},
	"fa-simplybuilt": {
		"unicode": "\\f215",
		"name": "Simplybuilt"
	},
	"fa-sitemap": {
		"unicode": "\\f0e8",
		"name": "Sitemap"
	},
	"fa-skyatlas": {
		"unicode": "\\f216",
		"name": "Skyatlas"
	},
	"fa-skype": {
		"unicode": "\\f17e",
		"name": "Skype"
	},
	"fa-slack": {
		"unicode": "\\f198",
		"name": "Slack"
	},
	"fa-sliders": {
		"unicode": "\\f1de",
		"name": "Sliders"
	},
	"fa-slideshare": {
		"unicode": "\\f1e7",
		"name": "Slideshare"
	},
	"fa-smile-o": {
		"unicode": "\\f118",
		"name": "Smile o"
	},
	"fa-snapchat": {
		"unicode": "\\f2ab",
		"name": "Snapchat"
	},
	"fa-snapchat-ghost": {
		"unicode": "\\f2ac",
		"name": "Snapchat ghost"
	},
	"fa-snapchat-square": {
		"unicode": "\\f2ad",
		"name": "Snapchat square"
	},
	"fa-snowflake-o": {
		"unicode": "\\f2dc",
		"name": "Snowflake o"
	},
	"fa-sort": {
		"unicode": "\\f0dc",
		"name": "Sort"
	},
	"fa-sort-alpha-asc": {
		"unicode": "\\f15d",
		"name": "Sort alpha asc"
	},
	"fa-sort-alpha-desc": {
		"unicode": "\\f15e",
		"name": "Sort alpha desc"
	},
	"fa-sort-amount-asc": {
		"unicode": "\\f160",
		"name": "Sort amount asc"
	},
	"fa-sort-amount-desc": {
		"unicode": "\\f161",
		"name": "Sort amount desc"
	},
	"fa-sort-asc": {
		"unicode": "\\f0de",
		"name": "Sort asc"
	},
	"fa-sort-desc": {
		"unicode": "\\f0dd",
		"name": "Sort desc"
	},
	"fa-sort-numeric-asc": {
		"unicode": "\\f162",
		"name": "Sort numeric asc"
	},
	"fa-sort-numeric-desc": {
		"unicode": "\\f163",
		"name": "Sort numeric desc"
	},
	"fa-soundcloud": {
		"unicode": "\\f1be",
		"name": "Soundcloud"
	},
	"fa-space-shuttle": {
		"unicode": "\\f197",
		"name": "Space shuttle"
	},
	"fa-spinner": {
		"unicode": "\\f110",
		"name": "Spinner"
	},
	"fa-spoon": {
		"unicode": "\\f1b1",
		"name": "Spoon"
	},
	"fa-spotify": {
		"unicode": "\\f1bc",
		"name": "Spotify"
	},
	"fa-square": {
		"unicode": "\\f0c8",
		"name": "Square"
	},
	"fa-square-o": {
		"unicode": "\\f096",
		"name": "Square o"
	},
	"fa-stack-exchange": {
		"unicode": "\\f18d",
		"name": "Stack exchange"
	},
	"fa-stack-overflow": {
		"unicode": "\\f16c",
		"name": "Stack overflow"
	},
	"fa-star": {
		"unicode": "\\f005",
		"name": "Star"
	},
	"fa-star-half": {
		"unicode": "\\f089",
		"name": "Star half"
	},
	"fa-star-half-o": {
		"unicode": "\\f123",
		"name": "Star half o"
	},
	"fa-star-o": {
		"unicode": "\\f006",
		"name": "Star o"
	},
	"fa-steam": {
		"unicode": "\\f1b6",
		"name": "Steam"
	},
	"fa-steam-square": {
		"unicode": "\\f1b7",
		"name": "Steam square"
	},
	"fa-step-backward": {
		"unicode": "\\f048",
		"name": "Step backward"
	},
	"fa-step-forward": {
		"unicode": "\\f051",
		"name": "Step forward"
	},
	"fa-stethoscope": {
		"unicode": "\\f0f1",
		"name": "Stethoscope"
	},
	"fa-sticky-note": {
		"unicode": "\\f249",
		"name": "Sticky note"
	},
	"fa-sticky-note-o": {
		"unicode": "\\f24a",
		"name": "Sticky note o"
	},
	"fa-stop": {
		"unicode": "\\f04d",
		"name": "Stop"
	},
	"fa-stop-circle": {
		"unicode": "\\f28d",
		"name": "Stop circle"
	},
	"fa-stop-circle-o": {
		"unicode": "\\f28e",
		"name": "Stop circle o"
	},
	"fa-street-view": {
		"unicode": "\\f21d",
		"name": "Street view"
	},
	"fa-strikethrough": {
		"unicode": "\\f0cc",
		"name": "Strikethrough"
	},
	"fa-stumbleupon": {
		"unicode": "\\f1a4",
		"name": "Stumbleupon"
	},
	"fa-stumbleupon-circle": {
		"unicode": "\\f1a3",
		"name": "Stumbleupon circle"
	},
	"fa-subscript": {
		"unicode": "\\f12c",
		"name": "Subscript"
	},
	"fa-subway": {
		"unicode": "\\f239",
		"name": "Subway"
	},
	"fa-suitcase": {
		"unicode": "\\f0f2",
		"name": "Suitcase"
	},
	"fa-sun-o": {
		"unicode": "\\f185",
		"name": "Sun o"
	},
	"fa-superpowers": {
		"unicode": "\\f2dd",
		"name": "Superpowers"
	},
	"fa-superscript": {
		"unicode": "\\f12b",
		"name": "Superscript"
	},
	"fa-table": {
		"unicode": "\\f0ce",
		"name": "Table"
	},
	"fa-tablet": {
		"unicode": "\\f10a",
		"name": "Tablet"
	},
	"fa-tachometer": {
		"unicode": "\\f0e4",
		"name": "Tachometer"
	},
	"fa-tag": {
		"unicode": "\\f02b",
		"name": "Tag"
	},
	"fa-tags": {
		"unicode": "\\f02c",
		"name": "Tags"
	},
	"fa-tasks": {
		"unicode": "\\f0ae",
		"name": "Tasks"
	},
	"fa-taxi": {
		"unicode": "\\f1ba",
		"name": "Taxi"
	},
	"fa-telegram": {
		"unicode": "\\f2c6",
		"name": "Telegram"
	},
	"fa-television": {
		"unicode": "\\f26c",
		"name": "Television"
	},
	"fa-tencent-weibo": {
		"unicode": "\\f1d5",
		"name": "Tencent weibo"
	},
	"fa-terminal": {
		"unicode": "\\f120",
		"name": "Terminal"
	},
	"fa-text-height": {
		"unicode": "\\f034",
		"name": "Text height"
	},
	"fa-text-width": {
		"unicode": "\\f035",
		"name": "Text width"
	},
	"fa-th": {
		"unicode": "\\f00a",
		"name": "Th"
	},
	"fa-th-large": {
		"unicode": "\\f009",
		"name": "Th large"
	},
	"fa-th-list": {
		"unicode": "\\f00b",
		"name": "Th list"
	},
	"fa-themeisle": {
		"unicode": "\\f2b2",
		"name": "Themeisle"
	},
	"fa-thermometer-empty": {
		"unicode": "\\f2cb",
		"name": "Thermometer empty"
	},
	"fa-thermometer-full": {
		"unicode": "\\f2c7",
		"name": "Thermometer full"
	},
	"fa-thermometer-half": {
		"unicode": "\\f2c9",
		"name": "Thermometer half"
	},
	"fa-thermometer-quarter": {
		"unicode": "\\f2ca",
		"name": "Thermometer quarter"
	},
	"fa-thermometer-three-quarters": {
		"unicode": "\\f2c8",
		"name": "Thermometer three quarters"
	},
	"fa-thumb-tack": {
		"unicode": "\\f08d",
		"name": "Thumb tack"
	},
	"fa-thumbs-down": {
		"unicode": "\\f165",
		"name": "Thumbs down"
	},
	"fa-thumbs-o-down": {
		"unicode": "\\f088",
		"name": "Thumbs o down"
	},
	"fa-thumbs-o-up": {
		"unicode": "\\f087",
		"name": "Thumbs o up"
	},
	"fa-thumbs-up": {
		"unicode": "\\f164",
		"name": "Thumbs up"
	},
	"fa-ticket": {
		"unicode": "\\f145",
		"name": "Ticket"
	},
	"fa-times": {
		"unicode": "\\f00d",
		"name": "Times"
	},
	"fa-times-circle": {
		"unicode": "\\f057",
		"name": "Times circle"
	},
	"fa-times-circle-o": {
		"unicode": "\\f05c",
		"name": "Times circle o"
	},
	"fa-tint": {
		"unicode": "\\f043",
		"name": "Tint"
	},
	"fa-toggle-off": {
		"unicode": "\\f204",
		"name": "Toggle off"
	},
	"fa-toggle-on": {
		"unicode": "\\f205",
		"name": "Toggle on"
	},
	"fa-trademark": {
		"unicode": "\\f25c",
		"name": "Trademark"
	},
	"fa-train": {
		"unicode": "\\f238",
		"name": "Train"
	},
	"fa-transgender": {
		"unicode": "\\f224",
		"name": "Transgender"
	},
	"fa-transgender-alt": {
		"unicode": "\\f225",
		"name": "Transgender alt"
	},
	"fa-trash": {
		"unicode": "\\f1f8",
		"name": "Trash"
	},
	"fa-trash-o": {
		"unicode": "\\f014",
		"name": "Trash o"
	},
	"fa-tree": {
		"unicode": "\\f1bb",
		"name": "Tree"
	},
	"fa-trello": {
		"unicode": "\\f181",
		"name": "Trello"
	},
	"fa-tripadvisor": {
		"unicode": "\\f262",
		"name": "Tripadvisor"
	},
	"fa-trophy": {
		"unicode": "\\f091",
		"name": "Trophy"
	},
	"fa-truck": {
		"unicode": "\\f0d1",
		"name": "Truck"
	},
	"fa-try": {
		"unicode": "\\f195",
		"name": "Try"
	},
	"fa-tty": {
		"unicode": "\\f1e4",
		"name": "Tty"
	},
	"fa-tumblr": {
		"unicode": "\\f173",
		"name": "Tumblr"
	},
	"fa-tumblr-square": {
		"unicode": "\\f174",
		"name": "Tumblr square"
	},
	"fa-twitch": {
		"unicode": "\\f1e8",
		"name": "Twitch"
	},
	"fa-twitter": {
		"unicode": "\\f099",
		"name": "Twitter"
	},
	"fa-twitter-square": {
		"unicode": "\\f081",
		"name": "Twitter square"
	},
	"fa-umbrella": {
		"unicode": "\\f0e9",
		"name": "Umbrella"
	},
	"fa-underline": {
		"unicode": "\\f0cd",
		"name": "Underline"
	},
	"fa-undo": {
		"unicode": "\\f0e2",
		"name": "Undo"
	},
	"fa-universal-access": {
		"unicode": "\\f29a",
		"name": "Universal access"
	},
	"fa-university": {
		"unicode": "\\f19c",
		"name": "University"
	},
	"fa-unlock": {
		"unicode": "\\f09c",
		"name": "Unlock"
	},
	"fa-unlock-alt": {
		"unicode": "\\f13e",
		"name": "Unlock alt"
	},
	"fa-upload": {
		"unicode": "\\f093",
		"name": "Upload"
	},
	"fa-usb": {
		"unicode": "\\f287",
		"name": "Usb"
	},
	"fa-usd": {
		"unicode": "\\f155",
		"name": "Usd"
	},
	"fa-user": {
		"unicode": "\\f007",
		"name": "User"
	},
	"fa-user-circle": {
		"unicode": "\\f2bd",
		"name": "User circle"
	},
	"fa-user-circle-o": {
		"unicode": "\\f2be",
		"name": "User circle o"
	},
	"fa-user-md": {
		"unicode": "\\f0f0",
		"name": "User md"
	},
	"fa-user-o": {
		"unicode": "\\f2c0",
		"name": "User o"
	},
	"fa-user-plus": {
		"unicode": "\\f234",
		"name": "User plus"
	},
	"fa-user-secret": {
		"unicode": "\\f21b",
		"name": "User secret"
	},
	"fa-user-times": {
		"unicode": "\\f235",
		"name": "User times"
	},
	"fa-users": {
		"unicode": "\\f0c0",
		"name": "Users"
	},
	"fa-venus": {
		"unicode": "\\f221",
		"name": "Venus"
	},
	"fa-venus-double": {
		"unicode": "\\f226",
		"name": "Venus double"
	},
	"fa-venus-mars": {
		"unicode": "\\f228",
		"name": "Venus mars"
	},
	"fa-viacoin": {
		"unicode": "\\f237",
		"name": "Viacoin"
	},
	"fa-viadeo": {
		"unicode": "\\f2a9",
		"name": "Viadeo"
	},
	"fa-viadeo-square": {
		"unicode": "\\f2aa",
		"name": "Viadeo square"
	},
	"fa-video-camera": {
		"unicode": "\\f03d",
		"name": "Video camera"
	},
	"fa-vimeo": {
		"unicode": "\\f27d",
		"name": "Vimeo"
	},
	"fa-vimeo-square": {
		"unicode": "\\f194",
		"name": "Vimeo square"
	},
	"fa-vine": {
		"unicode": "\\f1ca",
		"name": "Vine"
	},
	"fa-vk": {
		"unicode": "\\f189",
		"name": "Vk"
	},
	"fa-volume-control-phone": {
		"unicode": "\\f2a0",
		"name": "Volume control phone"
	},
	"fa-volume-down": {
		"unicode": "\\f027",
		"name": "Volume down"
	},
	"fa-volume-off": {
		"unicode": "\\f026",
		"name": "Volume off"
	},
	"fa-volume-up": {
		"unicode": "\\f028",
		"name": "Volume up"
	},
	"fa-weibo": {
		"unicode": "\\f18a",
		"name": "Weibo"
	},
	"fa-weixin": {
		"unicode": "\\f1d7",
		"name": "Weixin"
	},
	"fa-whatsapp": {
		"unicode": "\\f232",
		"name": "Whatsapp"
	},
	"fa-wheelchair": {
		"unicode": "\\f193",
		"name": "Wheelchair"
	},
	"fa-wheelchair-alt": {
		"unicode": "\\f29b",
		"name": "Wheelchair alt"
	},
	"fa-wifi": {
		"unicode": "\\f1eb",
		"name": "Wifi"
	},
	"fa-wikipedia-w": {
		"unicode": "\\f266",
		"name": "Wikipedia w"
	},
	"fa-window-close": {
		"unicode": "\\f2d3",
		"name": "Window close"
	},
	"fa-window-close-o": {
		"unicode": "\\f2d4",
		"name": "Window close o"
	},
	"fa-window-maximize": {
		"unicode": "\\f2d0",
		"name": "Window maximize"
	},
	"fa-window-minimize": {
		"unicode": "\\f2d1",
		"name": "Window minimize"
	},
	"fa-window-restore": {
		"unicode": "\\f2d2",
		"name": "Window restore"
	},
	"fa-windows": {
		"unicode": "\\f17a",
		"name": "Windows"
	},
	"fa-wordpress": {
		"unicode": "\\f19a",
		"name": "Wordpress"
	},
	"fa-wpbeginner": {
		"unicode": "\\f297",
		"name": "Wpbeginner"
	},
	"fa-wpexplorer": {
		"unicode": "\\f2de",
		"name": "Wpexplorer"
	},
	"fa-wpforms": {
		"unicode": "\\f298",
		"name": "Wpforms"
	},
	"fa-wrench": {
		"unicode": "\\f0ad",
		"name": "Wrench"
	},
	"fa-xing": {
		"unicode": "\\f168",
		"name": "Xing"
	},
	"fa-xing-square": {
		"unicode": "\\f169",
		"name": "Xing square"
	},
	"fa-y-combinator": {
		"unicode": "\\f23b",
		"name": "Y combinator"
	},
	"fa-yahoo": {
		"unicode": "\\f19e",
		"name": "Yahoo"
	},
	"fa-yelp": {
		"unicode": "\\f1e9",
		"name": "Yelp"
	},
	"fa-yoast": {
		"unicode": "\\f2b1",
		"name": "Yoast"
	},
	"fa-youtube": {
		"unicode": "\\f167",
		"name": "Youtube"
	},
	"fa-youtube-play": {
		"unicode": "\\f16a",
		"name": "Youtube play"
	},
	"fa-youtube-square": {
		"unicode": "\\f166",
		"name": "Youtube square"
	}
};

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(121);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    icon: ''
  },
  mutations: {
    setIcon: function setIcon(state, icon) {
      state.icon = icon;
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

},[197]);
