<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%-- 内容部分 --%>
<div class="padding">

	<div class="full col-sm-12">
		<div class="page-header">
			<h1>
				我的任务 <small></small>
			</h1>
		</div>
		<div class="col-sm-12">
			<table class="table table-hover table-with-bg-color">
				<thead>
					<tr>
						<th>时间</th>
						<th>任务类型</th>
						<th>病人姓名</th>
						<th>请求用户</th>
						<th>任务状态</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="taskListTbody">
					
				</tbody>
			</table>
		</div>


	</div>
	<!-- /col-12 -->


	<div class="col-sm-12">
		<nav>
			<ul class="pager">
				<li class="previous taskPrevBtn"><a href="#"><span aria-hidden="true">&larr;</span>
						上一页</a></li>
				<li class="next taskNextBtn"><a href="#">下一页 <span aria-hidden="true">&rarr;</span></a></li>
			</ul>
		</nav>
	</div>
</div>
<!-- /padding -->

<script id="taskListItemTmpl" type="x-tmpl-mustache">
{{#tasks}}
<tr>
	<td>{{taskCreateTime}}</td>
	<td>{{taskType}}</td>
	<td>{{patientName}}</td>
	<td>{{medicalCaseCreatorUserName}}</td>
	<td>{{taskStatus}}</td>
	<td>
		{{#showDiagnoseBtn}}<a href="../../cornerstone/index.jsp?studyId={{resourceId}}&taskId={{taskId}}" target="_blank" class="btn btn-success btn-xs diagnose-btn" >诊断</button>{{/showDiagnoseBtn}}
	</td>
</tr>
{{/tasks}}
</script>
<%-- END 内容部分 --%>
<script src='<c:url value="/modules/web/assets/js/junior/task.js"/>'></script>
