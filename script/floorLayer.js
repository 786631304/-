$(function(){
	$("#floorLayer li").hover(function(){
		//移入变宽
		$(this).animate({"width":"40px"},100);
		//背景色改变
		var colorArray="#93d46f";
		$(this).css("background-color",colorArray);
		//改变图标的定位
		$(this).css("background-position-x","-40px");
	},function(){
		//移出
		$(this).animate({"width":"0"},100);
		$(this).css("background-color","#F2F2F2");
		$(this).css("background-position-x","0px");
	});
		//返回顶部
		$("#floorLayer li:last").click(function(){
		$("html,body").animate({"scrollTop":0},1000);
	});
		//滚动楼层
	$("#floorLayer li:not(:last)").click(function(){
		var index=$(this).index();
		var topx=$(".floorLayer").eq(index).offset().top;
		$("html,body").animate({"scrollTop":topx},600);
	});

	//滚动到一定距离时显示左边的楼层条
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		if (top>300) {
			$("#floorLayer").show();
			//固定搜索框
			$(".fixedSearch").show();
			//将搜索框添加到新的盒子里
			$(".fixedSearch #newSearch").append($("#search"));
	} else{
		$("#floorLayer").hide();
		//隐藏
		$(".fixedSearch").hide();
		//返回原来的位置
		$(".shopCart").after($("#search"));
		}
	});

	//领券中心 & 二维码移入移出效果
	$(".certificateCode").hover(function(){
		//移入
		$(".certificateCodes").stop(true,true).animate({"left":"-100px"});
	},function(){
		//移出
		$(".certificateCodes").stop(true,true).animate({"left":"40px"});
	});
});