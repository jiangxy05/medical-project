package com.medicalproj.common.service;

import com.medicalproj.common.domain.User;
import com.medicalproj.common.exception.ServiceException;

public interface IUserService {

	User getByMobile(String mobile)throws ServiceException;

	User getByEmail(String email)throws ServiceException;

	User initUserByMobile(String mobile)throws ServiceException;

	void saveOrUpdate(User user)throws ServiceException;

}
