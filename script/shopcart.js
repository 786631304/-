$(function(){
	conntNums();
	//增加数量
	$(".add").click(function(){
		//找到当前输入框
		var buyInput=$(this).prev().find(".buyNumInputs");
		//获取框框里面的值
		var buyval=parseInt(buyInput.val());
			//值+1赋给输入框
		    buyInput.val(buyval+1);
		    console.log(buyInput);
		    
		    //找到当前的单价
		    var money=$(this).parent().parent().prev().text();
		    
		    //找到当前的小计
		    var xiaoji=$(this).parent().parent().next();
		    
		    //获取更新后的值
		    buyval=parseInt(buyInput.val());
		    
		    //小计  toFixed()四舍五入 保留2位小数
		    xiaoji.text((money*buyval).toFixed(2));
		    
		    conntNums();
	});
	
	
	//减少数量
	$(".minus").click(function(){
		//找到当前输入框
		var buyInput=$(this).next().find(".buyNumInputs");
		//获取框框里面的值
		var buyval=parseInt(buyInput.val());
		   if(buyval>=1){
		   	buyInput.val(buyval-1);
		   };
		   
		    //找到当前的单价
		    var money=$(this).parent().parent().prev().text();
		    
		    //找到当前的小计
		    var xiaoji=$(this).parent().parent().next();
		    
		    //获取更新后的值
		    buyval=parseInt(buyInput.val());
		    
		    //小计  toFixed()四舍五入 保留2位小数
		    xiaoji.text((money*buyval).toFixed(2));
		    conntNums();
	});
	
	//阻止默认行为（不让选中+和-）
	$(".minus,.add").mousedown(function () {
		return false;
	});
	
	//全选
	$(".checkbox").click(function(){
		//获取当前全选的值
		var qx=$(this).prop("checked");
		//选择框
		$(".rowsCheck,.checkbox").prop("checked",qx);
		
		conntNums();
	});
	
	//取消单行的时候,调用函数
	$(".rowsCheck").click(function () {
		conntNums();
	});
	
	//找到单价给单价添加事件
	$(".buyNumInputs").blur(function(){
		//找到单价
		var buyparent1=$(this).parent().parent().parent();
		//获取单价的值
		var buyparent2=buyparent1.parent().prev().text();
		//获取当前值的数量
		var buyNumInputs=$(this).val();
		//小计  toFixed()四舍五入 保留2位小数
		buyparent1.next().text((buyparent2*buyNumInputs).toFixed(2));
		conntNums();
	});
	
	//删除当前
	$(".del").click(function(){
		$(this).parent().parent().remove();
		conntNums();
	});
	
		//删除用户选中的商品
	$("#delShop").click(function () {
		$(".rowsCheck").each(function () {
			var isChecked=$(this).prop("checked");
			if(isChecked)
			{
				$(this).parent().parent().remove();
				conntNums();
			}
		});
	});
	
	
	//商品总价
	function conntNums(){
		var conntNum=0;
		conntMoney=0;
		selectedNum=0;
		//累加和
		$(".unit_price").each(function(){
			//总数量的和
			conntNum++;
			var qx=$(this).parent().find(".rowsCheck").prop("checked");
			//判断总价是否选中
			if(qx){
				//单行价格计算
				var unit_price=parseFloat($(this).text());
				//总价的和
				conntMoney+=unit_price;
				//找到当前行的数量
				var buyInput=parseInt($(this).prev().find(".buyNumInputs").val());
				//选中的商品数量
				selectedNum+=buyInput;
			}
		});
		$("#cartConntNum").text(conntNum);
		$("#selectedNum").text(selectedNum);
		$("#totalPrice").text(conntMoney.toFixed(2));
		console.log(conntNum);
		console.log(conntMoney);
		console.log(selectedNum);
	};
	
	//登录页面的交互效果----点击切换登录模式
	$(".loginTitle li").click(function () {
		var index=$(this).index();
		$(this).addClass("listLogin").siblings().removeClass("listLogin");
		if(index==0)
		{
			$("#qrcodeContent").show();
			$(".box1").hide();
			$(".box2").hide();
		}
		else
		{
			$("#qrcodeContent").hide();
			$(".box1").show();
			$(".box2").show();
		}
	});
	
	//手机和二维码的动画切换
	$("#qrcodeContent").hover(function () {
		var phone=$("#loginEqcodeICON").is(":animated") || $("#loginPhoneICON").is(":animated");
		if(!phone)
		{
			$("#loginEqcodeICON").stop(true,true).animate({"left":"0px"},function () {
				$("#loginPhoneICON").stop(true,true).fadeIn();
			});
		}
	},function () {
			$("#loginPhoneICON").stop(true,true).fadeOut(function () {
				$("#loginEqcodeICON").stop(true,true).animate({"left":"96px"});
			});
	});
});