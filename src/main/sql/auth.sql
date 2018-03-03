/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50529
Source Host           : localhost:3306
Source Database       : auth

Target Server Type    : MYSQL
Target Server Version : 50529
File Encoding         : 65001

Date: 2018-03-03 15:58:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for auth_act_log
-- ----------------------------
DROP TABLE IF EXISTS `auth_act_log`;
CREATE TABLE `auth_act_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `op_user` varchar(100) DEFAULT NULL,
  `op_method` varchar(200) DEFAULT NULL,
  `op_param` varchar(200) DEFAULT NULL,
  `op_ip` varchar(100) DEFAULT NULL,
  `op_name` varchar(255) DEFAULT NULL,
  `op_status` int(255) DEFAULT NULL,
  `op_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for auth_menu
-- ----------------------------
DROP TABLE IF EXISTS `auth_menu`;
CREATE TABLE `auth_menu` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `parent_id` int(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `per` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `type` int(10) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `order_num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_menu
-- ----------------------------
INSERT INTO `auth_menu` VALUES ('1', '0', '系统管理', null, null, '0', 'fa fa-cog', '0');
INSERT INTO `auth_menu` VALUES ('2', '1', '人员管理', null, 'user/index', '1', 'fa fa-user', '1');
INSERT INTO `auth_menu` VALUES ('3', '1', '角色管理', null, 'role/index', '1', 'fa fa-user-secret', '2');
INSERT INTO `auth_menu` VALUES ('4', '1', '资源管理', null, 'modules/sys/user.html', '1', 'fa fa-th-list', '3');
INSERT INTO `auth_menu` VALUES ('5', '2', '查看', 'sys:user:select', null, '2', null, null);
INSERT INTO `auth_menu` VALUES ('6', '2', '增加', 'sys:user:add', null, '2', null, null);
INSERT INTO `auth_menu` VALUES ('7', '2', '删除', 'sys:user:delete', null, '2', null, null);
INSERT INTO `auth_menu` VALUES ('8', '2', '修改', 'sys:user:update', null, '2', null, null);
INSERT INTO `auth_menu` VALUES ('9', '2', '赋角色', 'sys:user:putrole', null, '2', null, null);

-- ----------------------------
-- Table structure for auth_per
-- ----------------------------
DROP TABLE IF EXISTS `auth_per`;
CREATE TABLE `auth_per` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `per_name` varchar(50) DEFAULT NULL,
  `per_url` varchar(100) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_per
-- ----------------------------

-- ----------------------------
-- Table structure for auth_role
-- ----------------------------
DROP TABLE IF EXISTS `auth_role`;
CREATE TABLE `auth_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `r_name` varchar(30) DEFAULT NULL,
  `desc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_role
-- ----------------------------
INSERT INTO `auth_role` VALUES ('1', 'admin', '管理员');
INSERT INTO `auth_role` VALUES ('2', 'visitor', '游客');

-- ----------------------------
-- Table structure for auth_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `auth_role_menu`;
CREATE TABLE `auth_role_menu` (
  `id` int(11) NOT NULL,
  `r_id` int(11) DEFAULT NULL,
  `m_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_role_menu
-- ----------------------------
INSERT INTO `auth_role_menu` VALUES ('1', '1', '1');
INSERT INTO `auth_role_menu` VALUES ('2', '1', '2');
INSERT INTO `auth_role_menu` VALUES ('3', '1', '3');
INSERT INTO `auth_role_menu` VALUES ('4', '1', '4');
INSERT INTO `auth_role_menu` VALUES ('5', '1', '5');
INSERT INTO `auth_role_menu` VALUES ('6', '1', '6');
INSERT INTO `auth_role_menu` VALUES ('7', '1', '7');
INSERT INTO `auth_role_menu` VALUES ('8', '1', '8');
INSERT INTO `auth_role_menu` VALUES ('9', '1', '9');

-- ----------------------------
-- Table structure for auth_role_per
-- ----------------------------
DROP TABLE IF EXISTS `auth_role_per`;
CREATE TABLE `auth_role_per` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `r_id` int(11) DEFAULT NULL,
  `p_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_role_per
-- ----------------------------

-- ----------------------------
-- Table structure for auth_user
-- ----------------------------
DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `salt` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_user
-- ----------------------------
INSERT INTO `auth_user` VALUES ('1', 'admin', 'ce81dfe25816c006161658e4cbbe2bb9', '5c29d95359773eee6daa48cb6fe75f89');

-- ----------------------------
-- Table structure for auth_user_role
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_role`;
CREATE TABLE `auth_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` int(11) DEFAULT NULL,
  `r_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_user_role
-- ----------------------------
INSERT INTO `auth_user_role` VALUES ('1', '1', '1');
