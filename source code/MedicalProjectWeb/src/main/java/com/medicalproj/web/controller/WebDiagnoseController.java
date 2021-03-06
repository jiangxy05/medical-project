package com.medicalproj.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.medicalproj.common.dto.view.View;
import com.medicalproj.web.dto.view.DiagnoseReviewView;
import com.medicalproj.web.dto.view.DiagnoseView;
import com.medicalproj.web.service.IWebDiagnoseService;

@Controller
@RequestMapping("/web/diagnose")
public class WebDiagnoseController extends WebBaseController{

	private IWebDiagnoseService webDiagnoseService;
	
	@RequestMapping("/loadDiagnose")
	@ResponseBody
	public View<DiagnoseView> loadDiagnose(Integer studyId){
		return null;
	}
	
	@RequestMapping("/loadDiagnoseReview")
	@ResponseBody
	public View<DiagnoseReviewView> loadDiagnoseReview(Integer studyId){
		return null;
	}
	
	@RequestMapping("/submitDiagnose")
	@ResponseBody
	public View<Boolean> submitDiagnose(Integer studyId){
		return null;
	}
	
	@RequestMapping("/submitDiagnoseReview")
	@ResponseBody
	public View<Boolean> submitDiagnoseReview(Integer studyId){
		return null;
	}
}
