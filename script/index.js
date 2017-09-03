$(function(){
//注册事件
$("#mainMenu li").hover(function(){
    //添加类名并点亮
    $(this).find(".menuList").addClass("current");
	$(this).find(".sunmenu").show();
},function(){
    $(this).find(".menuList").removeClass("current");
	$(this).find(".sunmenu").hide();
})

//配置轮播的参数
$("#carouselBanner").tyslide({
		boxh:430,//盒子的高度
		w:1000,//盒子的宽度
		h:400,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
		isNumber:true //是否需要数字
});

//电子书轮播1
$("#ebBanner1").tyslide({
		boxh:215,//盒子的高度
		w:328,//盒子的宽度
		h:215,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//电子书轮播2
$("#ebBanner2").tyslide({
		boxh:215,//盒子的高度
		w:328,//盒子的宽度
		h:215,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//电子书轮播3
$("#ebBanner3").tyslide({
		boxh:215,//盒子的高度
		w:328,//盒子的宽度
		h:215,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//服装轮播1
$("#closBanner1").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//服装轮播2
$("#closBanner2").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//服装轮播3
$("#closBanner3").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//户外运动轮播1
$("#closBanner4").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//户外运动轮播2
$("#closBanner5").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//户外运动轮播3
$("#closBanner6").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//童装轮播1
$("#closBanner7").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//童装轮播2
$("#closBanner8").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//童装轮播3
$("#closBanner9").tyslide({
		boxh:338,//盒子的高度
		w:425,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:4,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:false //是否需要数字
});

//VIP轮播
$("#vipBanner").tyslide({
		boxh:474,//盒子的高度
		w:732,//盒子的宽度
		h:474,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ffff00",//当前控制按钮的颜色
		isNumber:true //是否需要数字
});



//电子书的滑动菜单
$(".ebookToptxt li").mouseover(function(){
	//给当前的菜单添加list
	$(".ebookToptxt li").removeClass("list");
	$(this).addClass("list");
	//把当前的其他list移出
	//菜单对应的内容进行切换
	var index=$(this).index();
	$("#ebook .ebookConright").hide();//进行隐藏
	$("#ebook .ebookConright").eq(index).show();//显示出来
});

//新书畅销榜的滑动菜单
$(".ebookRight li").mouseover(function(){
	var index=$(this).index();
	$(".ebookRight li").removeClass();
	$(".ebookRight .ebookTextrt").hide();
	$(".ebookRight .spans").show();
	$(".ebookRight .ebookTextrt").eq(index).show();
	$(".ebookRight .spans").eq(index).hide();
	$(".ebookRight li").eq(index).addClass('box');
});

//服装滑动菜单
$("#clothing .clothTitler li").mouseover(function(){
	//给当前的菜单添加clolist,将其他的移出
	$(this).addClass("clolist").siblings().removeClass("clolist");
   //切换到对应的内容
   var index=$(this).index();
   $("#clothing .clothRightcon").hide();
   $("#clothing .clothRightcon").eq(index).show();
});

//户外运动滑动菜单
$("#outdoors .clothTitler li").mouseover(function(){
	//给当前的菜单添加clolist,将其他的移出
	$(this).addClass("clolist").siblings().removeClass("clolist");
   //切换到对应的内容
   var index=$(this).index();
   $("#outdoors .clothRightcon").hide();
   $("#outdoors .clothRightcon").eq(index).show();
});

//童装滑动菜单
$("#children .clothTitler li").mouseover(function(){
	//给当前的菜单添加clolist,将其他的移出
	$(this).addClass("clolist").siblings().removeClass("clolist");
   //切换到对应的内容
   var index=$(this).index();
   $("#children .clothRightcon").hide();
   $("#children .clothRightcon").eq(index).show();
});

//商品推广滑动菜单
$("#popularize .popularizeList li").mouseover(function(){
	//给当前的菜单添加clolist,将其他的移出
	$(this).addClass("oneBorder").siblings().removeClass("oneBorder");
   //切换到对应的内容
   var index=$(this).index();
   $(".width3600").animate({"left":-1200*index},1000).delay(20);
});






});