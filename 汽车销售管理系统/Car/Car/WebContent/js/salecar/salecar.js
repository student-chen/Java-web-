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
	getAll();
	loadData();
	change();
     //分页并查询
	getAllByPage();
});


function change(){
	$("#sort").change(function(){
		var sid=$(this).val();
		$("#detail").empty();
		if(sid==0){
			$("#detail").append("<option value='0'>--请选择--</option>");
		}
		$.ajax({
			url : path + "cardetail.do?method=allsort",
			type : 'post',
			data :{sortid:sid},
			dataType : 'json',
			success : function(mydata) {
				$("#detail").append("<option value='0'>--请选择--</option>");
				$.each(mydata,function(index,xx){
					$("#detail").append("<option value='"+xx.detailid+"'>"+xx.detailname+"("+xx.detailguige+")</option>");
				})
			}
		})
	})
	$("#btn_sel").click(function(){
		$('#tb_departments').bootstrapTable('refresh');
	})
}


function getAll(){
	if($.inArray("查询汽车销售统计",ids)==-1){
		layer.msg("你没有权限!", {
			icon : 3
		});
		window.location.href=path+"main/main.jsp"; 
	}
}
function loadData(){
	$.ajax({
		url : path + "sort.do?method=alls",
		type : 'post',
		data :'',
		dataType : 'json',
		success : function(mydata) {
			$.each(mydata,function(index,xx){
				$("#sort").append("<option value='"+xx.sortid+"'>"+xx.sortname+"</option>");
			})
		}
	})
}
function getAllByPage()
{
	  $('#tb_departments').bootstrapTable({
            url: path+'incarmx.do?method=alllimit',         //请求后台的URL（*）
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
            	if(row.incarmxid!=null){
            		return {
                 	   css: {"line-height": "30px"}
                 	 };
            	}
            },
            
            height: heg-300,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "incarmxid",                     //每一行的唯一标识，一般为主键列
            showToggle:false,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            iconsPrefix: 'fa',
            onPostBody:function(){
            	myone();
            },
            columns: [{
                field: 'incarmxid',
                title: '编号',
                align : 'center'
            }, {
                field: 'carimg',
                title: '车辆图片',
                align : 'center',
                formatter : function(value, row, index) {  
	               	 var e="";
	               	 e='<img src="'+path+'upload/'+value+'" alt="'+row.handoutname+'" width="50px" height="50px">';
	               	 return e; 
                 }
            },{
                field: 'incarmxid',
                title: '详细信息',
                align : 'center',
                formatter : function(value, row, index) {  
	               	 var e="";
	               	 e='<a href="javascript:void(0)" class="oneinfo" >详细信息</a>';
	               	 return e; 
                 }
            }, {
                field: 'sortname',
                title: '品牌名称',
                align : 'center'
            }
            , {
                field: 'detailname',
                title: '系列名称',
                align : 'center'
            },
            {
                field: 'detailguige',
                title: '车型',
                align : 'center'
            }, 
            {
                field: 'carshouzi',
                title: '车辆型号',
                align : 'center'
            }, 
            {
                field: 'carrukucount',
                title: '入库数量',
                align : 'center'
            }, 
            {
                field: 'storename',
                title: '所在仓库',
                align : 'center'
            }, 
            {
                field: 'carrukutime',
                title: '入库时间',
                align : 'center'
            }, 
            {
                field: 'zjmc',
                title: '经办人单位',
                align : 'center'
            },
            {
                field: 'mname',
                title: '经办人',
                align : 'center'
            },
            {
                field: 'flag',
                title: '出售状态',
                align : 'center',
                cellStyle: function cellStyle(value, row, index, field) { 
                	if(value=='未出售'){
                		return { css: {'color': 'green','font-weight':'bold',"line-height": "30px"} } 
                	}else if(value=='已出售'){
                		return { css: {'color': 'red','font-weight':'bold',"line-height": "30px"} } 
                	}
            	}
            }
           ]
        });
	  	function queryParams(params) {
	  		var detailid=$("#detail").val();
	  		var flag=$("#flag").val();
			  return {
				  limit: params.limit,   //页面大小(每一页要显示多少条)
	              offset: params.offset,
	              detailid:detailid,
	              flag:flag
			  };
		  }
	getAll();
}
function myone(){
	$(".oneinfos").click(function() {
		var id=$(this).parent().parent().find("td:eq(0)").text();
		layer.open({
			type : 2,
			title : '详细信息',
			fix : false,
			shadeClose : true,
			maxmin : true,
			area : [ '600px', '900px' ],
			content : path + "outcar/one.jsp?id="+id,
			skin : 'layui-layer-lan',
			shift : 4, // 0-6的动画形式，-1不开启
			end : function() {
				$('#tb_departments').bootstrapTable('refresh');
			}
		});
	});	
	$(".oneinfo").click(function() {
		var id=$(this).parent().parent().find("td:eq(0)").text();
		layer.open({
			type : 2,
			title : '详细信息',
			fix : false,
			shadeClose : true,
			maxmin : true,
			area : [ '600px', '650px' ],
			content : path + "incarmx/one.jsp?id="+id,
			skin : 'layui-layer-lan',
			shift : 4, // 0-6的动画形式，-1不开启
			end : function() {
				$('#tb_departments').bootstrapTable('refresh');
			}
		});
	});
}

