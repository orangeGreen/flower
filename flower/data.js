//返回节点的个数就可以了

$(document).ready(function(){
//	$extend({a:function(){
//		$.ajax({
//			type:"GET",
//			url:"/login?l_user="+$("#l_user").val()&"l_pass="+$("#l_pass").val(),
//			datatype:"jsonp",
//			jsonp:"callback",
//			success:function(obj){
//				if(data.success){
//					var j_data=eval(obj).node_num;
//					var n=j_data.num;
//					b(n);
//					//window.location="chart.html?n="+n;
//				}
//			}
//		})
//		
//	}});
	//判断节点
	$extend({node:function(obj){
		$.ajax({
			type:"POST",
			url:"/",
			data:{
				node_name: $(this).childNodes('span').innerText
			},
			datatype:"json",
			success:function(data){
				if(data.success){
					alert(data.msg);
				}else{
					alert("出现错误")
				}
			}
		})
		
	}});
	
//	var j_data1=[[]];
//	$extend({sensor:function(obj){
//		$.ajax({
//			type:"POST",
//			url:"/",
//			data:{
//				sensor_name: $(this).innerText
//			},
//			datatype:"json",
//			success:function(data){
//				if(data.success){
//				 j_data1[0]=eval(obj).sensor;
//				 j_data1[1]=eval(obj).sensor_up;
//				 j_data1[2]=eval(obj).sensor_down; 	
//				}else{
//					alert("出现错误")
//				}
//			}
//		})
//		
//	}});
//	var list=[];
//	var j_data2=[];
//	//查询
//	$extend({c:function(){
//		$.ajax({
//			type:"GET",
//			url:"/?time1="+$("#date1").val()&"time2="+$("#date2").val(),
//			datatype:"jsonp",
//			jsonp:"callback",
//			success:function(){
//				if(data.success){
//					j_data2=eval(obj).message
//					for(var i=0;i<j_data2.length;i++){
//						list[i]=j_data2[i].time+j_data2[i].txt;
//					}
//					
//				}
//			}
//		})
//		
//	}});
//	
});
