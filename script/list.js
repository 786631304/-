$(function(){
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
	
	
	
	
//主编推荐的滑动菜单
	$(".newBookRight li").mouseover(function(){
		var index=$(this).index();
		$(".newBookRight li").removeClass();
		$(".newBookRight .ebookTextrt").hide();
		$(".newBookRight .spans").show();
		$(".newBookRight .ebookTextrt").eq(index).show();
		$(".newBookRight .spans").eq(index).hide();
		$(".newBookRight li").eq(index).addClass('box');
	});
	
//独家提供滑动菜单
 $("#offer .offerList li").mouseover(function(){
 	$(this).addClass("list_txt").siblings().removeClass("list_txt");
 	//找到相应的内容
 	var index=$(this).index();
 	$("#offer .offerContt").hide();
 	$("#offer .offerContt").eq(index).show();
 });

//猜你喜欢滑动菜单
	var index=0;
	$("#like .likeList li").click(function(){
	$(".width3600").animate({"left":-1200*index});
		++index;
		if(index>2){
			index=0;
		}
		console.log($(".width3600").animate({"left":-1200*index}));
	});

	
	//热卖畅销
	$("#bannerRights li:first").css("height","120px");
	$("#bannerRights li").mouseover(function(){
		$("#bannerRights li").css("height","45px");
		$(this).css("height","120px");
	});
});