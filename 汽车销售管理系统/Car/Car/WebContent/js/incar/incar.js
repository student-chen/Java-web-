var path="";
var ids='';
var flags;
var heg;
$(function(){
	heg=$(window).height();
	$("#divbody").css("height",heg);
	path=$("#path").val();
	var str=$("#actionids").val();
	if(str!=null){
		ids=str.split("、");
	}else{
		ids="";
	}
     //分页并查询
	getAllByPage();
	//增加
	myadd();
	//修改
});

function getAll(){
	if($.inArray("查询车辆入库",ids)==-1){
		layer.msg("你没有权限!", {
			icon : 3
		});
		window.location.href=path+"main/main.jsp"; 
	}
	if($.inArray("增加车辆入库",ids)==-1){
		$("#btn_add").remove();
	}
}

function getAllByPage()
{
	  $('#tb_departments').bootstrapTable({
            url: path+'incar.do?method=all',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            dataType:'json',
            toolbar: false,                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            pagination: true,                   //是否显示分页（*）
            
            
            queryParams: queryParams,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 5,                       //每页的记录行数（*）
            pageList: [5,10, 25, 50, 100],       //可供选择的每页的行数（*）
            showColumns: false,                  //是否显示所有的列
            showRefresh: false,                  //是否显示刷新按钮
            clickToSelect: false,                //是否启用点击选中行
            rowStyle:function rowStyle(row, index) {
            	if(row.incarid!=null){
            		return {
                 	   css: {"line-height": "30px"}
                 	 };
            	}
            },
            
            height: heg-300,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "incarid",                     //每一行的唯一标识，一般为主键列
            showToggle:false,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            iconsPrefix: 'fa',
            onPostBody:function(){
            },
            columns: [{
                field: 'incarid',
                title: '编号',
                align : 'center'
            }, {
                field: 'detailname',
                title: '汽车系列',
                align : 'center',
                formatter : function(value, row, index) { 
               	 var e="";
               		 e='<span>'+value+'--'+row.detailguige+'</span>';
               	 return e; 
                 }
            }, {
                field: 'incarcount',
                title: '库存量（/辆）',
                align : 'center'
            }, {
                field: 'flag',
                title: '是否有库存',
                align : 'center',
                cellStyle: function cellStyle(value, row, index, field) { 
                	if(value=='库存充足'){
                		return { css: {'color': 'green','font-weight':'bold',"line-height": "30px"} } 
                	}else if(value=='暂无库存'){
                		return { css: {'color': 'red','font-weight':'bold',"line-height": "30px"} } 
                	}
            	}
            },
            {
            	 title : '车辆入库明细',  
                 field : 'incarid',  
                 align : 'center',
                 formatter : function(value, row, index) { 
                	 var e="";
                	 if($.inArray("查询车辆入库明细",ids)==-1){
                		 e='<div><button type="button" class="btn btn-outline btn-default">'
                   			+'<span><i class="fa fa-ban"></i>&nbsp;&nbsp;不可操作</span></button></div>';
                	 }else{
                		 e='<div class="rkinfo"><a href="'+path+'incarmx/incarmx.jsp?id='+value+'&did='+row.detailid+'"><button type="button" class="btn btn-outline btn-default">'
                   			+'<span>入库明细</span></button></a></div>';
                	 }
                	 return e; 
                  }
             },
             ]
        });
	  	function queryParams(params) {
			  return {
				  limit: params.limit,   //页面大小(每一页要显示多少条)
	              offset: params.offset,
			  };
		  }
	getAll();
}


function myadd(){
	$("#btn_add").click(function() {
		var index = layer.open({
			type : 2,
			title : '车辆入库',
			fix : false,
			shadeClose : true,
			maxmin : true,
			area : [ '400px', '300px' ],
			content : path + "incar/add.jsp",
			skin : 'layui-layer-lan',
			shift : 4, // 0-6的动画形式，-1不开启
			end : function() {
				window.location.href=path+"incar/incar.jsp"; 
			}
		});
	});	
}

