package com.auth.modules.sys.service;

import java.util.Set;

public interface AuthRoleService {

	Set<String> findAllRolesByUser(Long userId);
}
