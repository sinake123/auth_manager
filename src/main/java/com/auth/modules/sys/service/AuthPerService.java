package com.auth.modules.sys.service;

import java.util.Set;

public interface AuthPerService {

	Set<String> findAllAuthPerByUser(Long userId);
}
