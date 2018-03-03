package com.auth.modules.log.service;

import com.auth.modules.log.entity.AuthLog;

public interface SysLogService {

	int save(AuthLog authLog);
}
