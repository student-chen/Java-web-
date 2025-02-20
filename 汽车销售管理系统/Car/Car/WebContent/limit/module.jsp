<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../main/top.jsp"%>
<!-- 导航 -->
<%@ include file="../limit/left1.jsp"%>
	<li id="mk" class="active"><a href="${pageContext.request.contextPath}/limit/module.jsp"><span class="submenu-label">系统模块</span></a></li>
	<li id="cz"><a href="${pageContext.request.contextPath}/limit/action.jsp"><span class="submenu-label">模块具体操作</span></a></li>
	<li id="yh"><a href="${pageContext.request.contextPath}/limit/group.jsp"><span class="submenu-label">用户组设置</span></a></li>
	<li id="qx"><a href="${pageContext.request.contextPath}/limit/agroup.jsp"><span class="submenu-label">用户组权限</span></a></li>
<%@ include file="../limit/left2.jsp"%>
<!-- 主体 -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/limit/module.js"></script>
	<input type="hidden" value="${pageContext.request.contextPath}/" id="path">
	<div class="main-container" style="min-height: 800px;">
			<div class="padding-md">
				<ul class="breadcrumb">
					<li>
						<span style="margin-right: 10px;">
						<i class="fa fa-location-arrow fa-lg"></i></span><span class="primary-font">
						<i class="icon-home"></i></span>
						<a href="${pageContext.request.contextPath}/main/main.jsp">首页</a>
					</li>
					<li>员工权限</li>
					<li>权限中心</li>
					<li>系统模块</li>
				</ul>
				<div class="smart-widget widget-dark-blue">
						<div class="smart-widget-header">
							<button type="button" class="btn btn-outline btn-default">
								<span class="button-wrap" id="addMaster"> 
									系统模块
								</span>
							</button>
							<span class="smart-widget-option">
								<span class="refresh-icon-animated">
									<i class="fa fa-circle-o-notch fa-spin"></i>
								</span>
	                            <a href="#" class="widget-toggle-hidden-option">
	                                <i class="fa fa-cog"></i>
	                            </a>
	                            <a href="#" class="widget-collapse-option" data-toggle="collapse">
	                                <i class="fa fa-chevron-up"></i>
	                            </a>
	                        </span>
						</div>
						<div class="smart-widget-inner" style="height: 100%;">
							<div class="smart-widget-hidden-section">
								<ul class="widget-color-list clearfix">
									<li style="background-color:#20232b;" data-color="widget-dark"></li>
									<li style="background-color:#4c5f70;" data-color="widget-dark-blue"></li>
									<li style="background-color:#23b7e5;" data-color="widget-blue"></li>
									<li style="background-color:#2baab1;" data-color="widget-green"></li>
									<li style="background-color:#edbc6c;" data-color="widget-yellow"></li>
									<li style="background-color:#fbc852;" data-color="widget-orange"></li>
									<li style="background-color:#e36159;" data-color="widget-red"></li>
									<li style="background-color:#7266ba;" data-color="widget-purple"></li>
									<li style="background-color:#f5f5f5;" data-color="widget-light-grey"></li>
									<li style="background-color:#fff;" data-color="reset"></li>
								</ul>
							</div>
							<div class="smart-widget-body" id="divbody">
								 <div id="tools"></div>
					        	 <table id="tb_departments"></table>
							</div>
							 <br><br>
						</div><!-- ./smart-widget-inner -->
					</div><!-- ./smart-widget -->
			</div>
		</div>




<%@ include file="../main/footer.jsp"%>