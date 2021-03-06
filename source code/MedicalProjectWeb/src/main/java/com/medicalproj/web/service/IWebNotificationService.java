package com.medicalproj.web.service;

import com.medicalproj.common.dto.view.View;
import com.medicalproj.common.exception.ServiceException;
import com.medicalproj.web.dto.view.NotificationListView;

public interface IWebNotificationService {

	View<NotificationListView> listNotification(Integer loginUserId, Integer page, Integer pageSize)throws ServiceException;

	View<Boolean> doReadNotification(Integer notificationId)throws ServiceException;

}
