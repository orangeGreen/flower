function a() {
	//var l_remember=document.getElementById("l_remember";)
	var l_user = document.getElementById("l_user").value;
	var l_pass = document.getElementById("l_pass").value;
	//	var loUser = localStorage.getItem("l_user") || "";
	//  var loPass = localStorage.getItem("l_pass") || "";
	if(l_user == "" || l_pass == "") {
		alert("用户名、密码不能为空！");
	} else {
		alert("登录成功!");
	}
	//	if(loUser !== "" && loPass !== ""){
	//		l_remember.setAttribute("checked","");
	//	}
	//	function fn(){
	//      if(l_remember.checked){
	//          localStorage.setItem("l_user",l_user.value);
	//          localStorage.setItem("l_pass",l_pass.value);
	//      }else{
	//          localStorage.setItem("l_user","");
	//          localStorage.setItem("l_pass","");
	//      }
	//  }
}

//登录
//document.getElementsByClassName("login2").onclick=function(){
//		var resquest=new XMLHttpRequest();
//		resquest.open("POST","");
//		var l_data="l_user="+document.getElementById("l_user").value
//		        +"&l_pass="+document.getElementById("l_pass").value;
//	    resquest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//	    resquest.send(l_data);
//	    resquest.onreadystatechange=function(){
//	    	if(resquest.readyState===4){
//	    		if(resquest.status===200){
//	    			alert(request.responseText);
//	    		}else{
//	    			alert("发生错误："+resquest.status);
//	    		}
//	    	}
//	    }
//	}

//注册
//document.getElementsByClassName("sign").onclick=function(){
//		var resquest=new XMLHttpRequest();
//		resquest.open("POST","");
//		var r_data="r_user="+document.getElementById("r_user").value
//		        +"&r_pass="+document.getElementById("r_pass").value
//		        +"&key="+document.getElementById("key").value;
//	    resquest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//	    resquest.send(r_data);
//	    resquest.onreadystatechange=function(){
//	    	if(resquest.readyState===4){
//	    		if(resquest.status===200){
//	    			alert(request.responseText);
//	    		}else{
//	    			alert("发生错误："+resquest.status);
//	    		}
//	    	}
//	    }
//	}

function b() {
	var r_user = document.getElementById("r_user").value;
	var r_pass = document.getElementById("r_pass").value;
	var iot_key = document.getElementById("key").value;
	if(r_user == "" || r_pass == "" || iot_key == "") {
		alert("用户名、密码、key不能为空！");
	} else {
		alert("注册成功!");
		//window.location.href("E:\myWeb\flower\login.html");
	}
}

window.onload = function() {
		

		var img1 = document.getElementById('light');
		var img2 = document.getElementById('door');
		var img3 = document.getElementById('walter');
		var img4 = document.getElementById('img4');
		var btn3 = document.getElementById('l3');
		var btn4 = document.getElementById('l4');
		var btn5 = document.getElementById('l5');
		var btn6 = document.getElementById('l6');
		var imgs = document.getElementsByClassName('imgs');
		var body = document.getElementById('chart');
		var j = 0;
		k = 0;
		m = 0;
		l = 0;

		btn3.onclick = function() {
			j++;
			if(j % 2 == 0) {
				img1.style.display = 'none';
			} else {
				img1.style.display = 'block';
			}
			img2.style.display = 'none';
			img3.style.display = 'none';
			img4.style.display = 'none';

		}
		btn4.onclick = function() {
			k++;
			if(k % 2 == 0) {
				img2.style.display = 'none';
			} else {
				img2.style.display = 'block';
			}
			img1.style.display = 'none';
			img3.style.display = 'none';
			img4.style.display = 'none';
		}
		btn5.onclick = function() {
			l++;
			if(l % 2 == 0) {
				img3.style.display = 'none';
			} else {
				img3.style.display = 'block';
			}
			img2.style.display = 'none';
			img1.style.display = 'none';
			img4.style.display = 'none';
		}
		btn6.onclick = function() {
			m++;
			if(m % 2 == 0) {
				img4.style.display = 'none';
			} else {
				img4.style.display = 'block';
			}
			img2.style.display = 'none';
			img3.style.display = 'none';
			img1.style.display = 'none';
		}

		var i = 0;
		var j = 0;
		var k = 0;
		img1.onclick = function() {
			i++;
			if(i % 2 == 0) {
				img1.src = '../img/bu_06.gif';
			} else {
				img1.src = '../img/bu_05.gif';
			}

		}
		img2.onclick = function() {
			j++;
			if(j % 2 == 0) {
				img2.src = '../img/bu_04.gif';
			} else {
				img2.src = '../img/bu_03.gif';
			}

		}
		img3.onclick = function() {
			k++;
			if(k % 2 == 0) {
				img3.src = '../img/bu_02.gif';
			} else {
				img3.src = '../img/bu_01.gif';
			}

		}

		document.getElementById('click').onmouseover = function() {

			var a1 = document.getElementsByClassName('a1');
			var a2 = document.getElementsByClassName('a2');
			var a3 = document.getElementsByClassName('a3');
			var a4 = document.getElementsByClassName('a4');
			var a5 = document.getElementsByClassName('a5');
			var a6 = document.getElementsByClassName('a6');
			var li = document.getElementsByClassName('la');
			var p3 = document.getElementsByClassName('p3');

			
			for(var a = 1; a < li.length; a++) {
				li[a].style.webkitTransform = "rotate(" + 90 * a / li.length + "deg)";
				li[a].style.MozTransform = "rotate(" + 90 * a / li.length + "deg)";
				li[a].style.msTransform = "rotate(" + 90 * a / li.length + "deg)";
				li[a].style.OTransform = "rotate(" + 90 * a / li.length + "deg)";
				li[a].style.transform = "rotate(" + 90 * a / li.length + "deg)";
			}

			for(var a = 1; a < a1.length; a++) {

				a1[a].style.webkitTransform = "rotate(" + 90 * a / a1.length + "deg)";
				a1[a].style.MozTransform = "rotate(" + 90 * a / a1.length + "deg)";
				a1[a].style.msTransform = "rotate(" + 90 * a / a1.length + "deg)";
				a1[a].style.OTransform = "rotate(" + 90 * a / a1.length + "deg)";
				a1[a].style.transform = "rotate(" + 90 * a / a1.length + "deg)";
			}

			for(var a = 1; a < a2.length; a++) {

				a2[a].style.webkitTransform = "rotate(" + 90 * a / a2.length + "deg)";
				a2[a].style.MozTransform = "rotate(" + 90 * a / a2.length + "deg)";
				a2[a].style.msTransform = "rotate(" + 90 * a / a2.length + "deg)";
				a2[a].style.OTransform = "rotate(" + 90 * a / a2.length + "deg)";
				a2[a].style.transform = "rotate(" + 90 * a / a2.length + "deg)";
			}

			for(var a = 1; a < a3.length; a++) {

				a3[a].style.webkitTransform = "rotate(" + 90 * a / a3.length + "deg)";
				a3[a].style.MozTransform = "rotate(" + 90 * a / a3.length + "deg)";
				a3[a].style.msTransform = "rotate(" + 90 * a / a3.length + "deg)";
				a3[a].style.OTransform = "rotate(" + 90 * a / a3.length + "deg)";
				a3[a].style.transform = "rotate(" + 90 * a / a3.length + "deg)";
			}

			for(var a = 1; a < a4.length; a++) {

				a4[a].style.webkitTransform = "rotate(" + 90 * a / a4.length + "deg)";
				a4[a].style.MozTransform = "rotate(" + 90 * a / a4.length + "deg)";
				a4[a].style.msTransform = "rotate(" + 90 * a / a4.length + "deg)";
				a4[a].style.OTransform = "rotate(" + 90 * a / a4.length + "deg)";
				a4[a].style.transform = "rotate(" + 90 * a / a4.length + "deg)";
			}

			for(var a = 1; a < a5.length; a++) {
				a5[a].style.webkitTransform = "rotate(" + 90 * a / a5.length + "deg)";
				a5[a].style.MozTransform = "rotate(" + 90 * a / a5.length + "deg)";
				a5[a].style.msTransform = "rotate(" + 90 * a / a5.length + "deg)";
				a5[a].style.OTransform = "rotate(" + 90 * a / a5.length + "deg)";
				a5[a].style.transform = "rotate(" + 90 * a / a5.length + "deg)";
			}

		};
		var data = [
			['传感器1', '传感器2', '传感器3'],
			['传感器1', '传感器2', '传感器3', '4'],
			['传感器1', '传感器2', '传感器3', '4', '5'],
		];

		var node0 = document.getElementById('ul_1');
		var nod = [];
		var a = [];
		var s = [];
		var ul = [];
		var uli = [];
		var ua = [];
		for(var i = 0; i < data.length; i++) {
			nod[i] = document.createElement('li');
			nod[i].setAttribute('class', 's2');
			a[i] = document.createElement('a');
			a[i].setAttribute('href', '#');
			a[i].setAttribute('class', 'la');
			s[i] = document.createElement('span');
			s[i].innerHTML = "节点" + (i + 1);
			ul[i] = document.createElement('ul');
			ul[i].setAttribute('class', 'p3');
			a[i].appendChild(s[i]);
			nod[i].appendChild(ul[i]);
			nod[i].appendChild(a[i]);
			node0.appendChild(nod[i]);
			for(var j = 0; j < data[i].length; j++) {
				uli[j] = document.createElement('li');
				uli[j].className = "a" + (i + 1);
				ua[j] = document.createElement('a');
				ua[j].setAttribute('href', '#');
				ua[j].innerHTML = '传感器' + (j + 1);
				uli[j].appendChild(ua[j]);
				ul[i].appendChild(uli[j]);

				//		   uli[j].onclick = function() {
				//	          var request = new XMLHttpRequest();
				//	          request.open("GET", " ?nod=" + ua[j].innerHTML);
				//	          request.send();
				//	          request.onreadystatechange = function() {
				//		      if(request.readyState === 4) {
				//			    if(request.status === 200) {
				//				// window.location.reload();
				//				//加载出上次查询的结果
				//				//得到一个东西标记这个传感器页面，以便查询的时候得到对应的传感器的值
				//		        } else {
				//			         alert("发生错误：" + request.status);
				//		         }
				//	          }
				//	
				//		    }

			}

		}
		//点击查询
//		document.getElementById("search").onclick = function() {
//				var li = [];
//				var ul = document.getElementById("lis");
//				var request = new XMLHttpRequest();
//				request.open("GET", " ?time1=" + document.getElementById("date1").value "&time2=" + document.getElementById("date2").value);
//				request.send();
//				request.onreadystatechange = function() {
//					if(request.readyState === 4) {
//						if(request.status === 200) {
//							var n = request.responseText.length;
//							for(var i = 0; i < n; i++) {
//								li[i] = document.createElement('li');
//								li[i].setAttribute('class', 'list');
//								li[i].innerHTML = request.responseText[i].value;
//								ul.appendChild(li[i]);
//							}
//						} else {
//							alert("发生错误：" + request.status);
//						}
//					}
//				}
//			}
//			//点击图片更改设置
//		document.getElementById("light").onclick = function() {
//				var request = new XMLHttpRequest();
//				request.open("post", "");
//				resquest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//				request.send(document.getElementById("light").getAttribute("alt"));
//				resquest.onreadystatechange = function() {
//					if(resquest.readyState === 4) {
//						if(resquest.status === 200) {
//							alert("设置成功");
//						} else {
//							alert("发生错误：" + resquest.status);
//						}
//					}
//				}
//
//				document.getElementById("door").onclick = function() {
//						var request = new XMLHttpRequest();
//						request.open("post", "");
//						resquest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//						request.send(document.getElementById("door").getAttribute("alt"));
//						resquest.onreadystatechange = function() {
//							if(resquest.readyState === 4) {
//								if(resquest.status === 200) {
//									alert("设置成功");
//								} else {
//									alert("发生错误：" + resquest.status);
//								}
//							}
//						}
//
//						document.getElementById("walter").onclick = function() {
//								var request = new XMLHttpRequest();
//								request.open("post", "");
//								resquest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//								request.send(document.getElementById("walter").getAttribute("alt"));
//								resquest.onreadystatechange = function() {
//									if(resquest.readyState === 4) {
//										if(resquest.status === 200) {
//											alert("设置成功");
//										} else {
//											alert("发生错误：" + resquest.status);
//										}
//									}
//								}
//
//								//根据用户加载节点数据
//								var request = new XMLHttpRequest();
//								request.open("GET", " ?l_user=" + document.getElementById("l_user").value);
//								request.send();
//								request.onreadystatechange = function() {
//									if(request.readyState === 4) {
//										if(request.status === 200) {
//											var data = request.responseText;
//										}
//									} else {
//										alert("发生错误：" + request.status);
//									}
//								}
//							}
//							//点击传感器刷新页面
//						var li = [];
//						li = document.getElementsByClassName('p3').getElementsByTagName('li');
//						li.onclick = function() {
//							var request = new XMLHttpRequest();
//							request.open("GET", " ?nod=" + data[i][j].value);
//							request.send();
//							request.onreadystatechange = function() {
//								if(request.readyState === 4) {
//									if(request.status === 200) {
//										var data = request.responseText;
//
//									} else {
//										alert("发生错误：" + request.status);
//									}
//								}
//							}

};