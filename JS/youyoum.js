$(document).ready(function(){

    // Login  start //

    $("#submit1").hover(
	function() {
	   $(this).attr('src','Images/submit_hover.png');
	},
	function() {
	   $(this).attr('src','Images/submit.png');
	 });


    $("#username").focus(function(){
    	 $(this).parent('#username_input').css({"borderColor":"#B1CE73"});
    	 $(this).parent().find(".log_dc").html(' ');
         $(this).css("color","#333");

    });
    $("#username").blur(function(){
    	 $(this).parent().css({"borderColor":"#dfdfdf"});
    	 var usern = $(this).val();
    	 if(!validatemobile(usern)){            
            $(this).parent().css({"borderColor":"red"});
            $(this).parent().find(".log_dc").html('<img src="images/cuo.png" >');
    	 } else {
    	 	$(this).parent().css({"borderColor":"#B1CE73"});
    	 	$(this).parent().find(".log_dc").html('<img src="images/dui.png" >');
    	 }

    });

    $("#password").focus(function(){
    	   $(this).parent().css({"borderColor":"#B1CE73"});
    	   $(this).parent().find(".log_dc").html(' ');
    });
    $("#password").blur(function(){
    	 $(this).parent().css({"borderColor":"#dfdfdf"});

    	 var usern = $(this).val();
    	 if(isPasswd(usern)){
    	 	$(this).parent().css({"borderColor":"#B1CE73"});
    	 	$(this).parent().find(".log_dc").html('<img src="images/dui.png" >');
    	 	return true; 	
         } else {
    	 	$(this).parent().css({"borderColor":"red"});
            $(this).parent().find(".log_dc").html('<img src="images/cuo.png" >');
            return false;
    	 }

    });


    $("#yzinput").focus(function(){
    	 $(this).parent().css({"borderColor":"#B1CE73"})
    });

    $("#yzinput").blur(function(){
    	 $(this).parent().css({"borderColor":"#dfdfdf"})
    });


    // Login  end //

    // reg.html  start //

    /* 用户名相应事件开始 */
    $("#reg_username").focus(function(){
         $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
         $(this).parent().next(".reg_dc").html(' ');
         $(this).parent().find(".reg_q").css("display","block");
    });


    $("#reg_username").blur(function(){
         $(this).parent().css({"borderColor":"#dfdfdf","color":"#333"});
         var reguser = $(".reg_ipkj input").val();
         if(check_Formname(reguser)){
            $(this).parent().next(".reg_dc").html('<img src="images/dui.png" >'); 
         } else{
            $(this).parent().next(".reg_dc").html('<img src="images/cuo.png" >');
            $(this).parent().css({"borderColor":"red"});
         }
    });
    /* 用户名相应事件结束 */

    /* 手机号相应事件开始 */
    $("#reg_mobile").focus(function(){
         $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
    });

    $("#reg_mobile").blur(function(){
         $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
         var reg_mob =  $(this).val();
         if(validatemobile(reg_mob)){
            $(this).parent().next(".reg_dc").html('<img src="images/dui.png" >');
            $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
         } else{
            $(this).parent().next(".reg_dc").html('<img src="images/cuo.png" >');
            $(this).parent().css({"borderColor":"red"});
         }
    })
    /* 手机号相应事件结束 */



    /* 验证码相应事件开始 */
    $("#reg_yzm").focus(function(){
        $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
    });

    $("#reg_yzm").blur(function(){
        $(this).parent().css({"borderColor":"#dfdfdf","color":"#333"});
    });
    /* 验证码相应事件结束 */


   /* 密码相应事件开始 */
    $("#reg_password").focus(function(){
        $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
    });

    $("#reg_password").blur(function(){
        var reg_pd =  $(this).val();
        if(isPasswd(reg_pd)){
            $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
            $(this).parent().next(".reg_dc").html('<img src="images/dui.png" >');
        } else {
            $(this).parent().next(".reg_dc").html('<img src="images/cuo.png" >');
            $(this).parent().css({"borderColor":"red"});
        }
    });
    /* 密码相应事件结束 */

   /* 推荐人相应事件开始 */
    $("#reg_tname").focus(function(){
         $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
    });

    $("#reg_tname").blur(function(){
        var reg_tn =  $(this).val();
        if(check_Formname(reg_tn)){
            $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
            $(this).parent().next(".reg_dc").html('<img src="images/dui.png" >');
        } else {
            $(this).parent().next(".reg_dc").html('<img src="images/cuo.png" >');
            $(this).parent().css({"borderColor":"red"});
        }
    });
   /* 推荐人相应事件结束 */



    $(".reg_q").click(function(){
         $(this).parent().find("input").attr("value","");
    });

    $("#reg_submit").hover(
    function() {
       $(this).attr('src','Images/reg_hover.png');
    },
    function() {
       $(this).attr('src','Images/reg.png');
     });



    // reg.html  end //

// congzhi.html  start //

/* 重置密码相应事件开始 */
    $("#czmi").focus(function(){
         $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
    });

    $("#czmi").blur(function(){
         $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
         var cz_mob =  $(this).val();
         if(isPasswd(cz_mob)){
            $(this).parent().next(".reg_dc").html('<img src="images/dui.png" >');
            $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
         } else{
            $(this).parent().next(".reg_dc").html('<img src="images/cuo.png" >');
            $(this).parent().css({"borderColor":"red"});
         }
    })

    $("#qrmi").focus(function(){
         $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
    });

   $('#qrmi').bind('input propertychange', function() {
          var cz_mob = $("#czmi").val();
          var qz_mob = $(this).val();
          if(cz_mob == qz_mob){
             $(this).parent().next(".reg_dc").html('<img src="images/dui.png" >');
             $(this).parent().css({"borderColor":"#B1CE73","color":"#333"});
          } else {
             $(this).parent().next(".reg_dc").html('<img src="images/cuo.png" >');
             $(this).parent().css({"borderColor":"red"});
          }
    });  

/* 重置密码相应事件结束 */

// congzhi.html  end //



// 主体左侧事件开始 //
$(".sleft_one").click(function(){
    
    if ($(this).next("ul").css("display") == "none"){
           $(this).next("ul").css({"display":"block"});
           $(this).find(".sone_jt").css({ WebkitTransform: 'rotate(90deg)'});
           $(this).find(".sone_jt").css({ '-moz-transform': 'rotate(90deg)'});
    } else if ($(this).next("ul").css("display") == "block"){
           $(this).next("ul").css({"display":"none"});
           $(this).find(".sone_jt").css({ WebkitTransform: 'rotate(0deg)'});
           $(this).find(".sone_jt").css({ '-moz-transform': 'rotate(0deg)'});
    }

});
// 主体左侧事件结束 //


// 主体右侧事件开始 //
$(".right_on").click(function(){
    
    if( $("#main_left").css('display') == "block" ){

        $("#main_left").css("display","none");
        $("#main_right").animate({marginLeft:'0'},200);

    } else if ( $("#main_left").css('display') == "none" ){
        $("#main_left").css("display","block");
        $("#main_right").animate({marginLeft:'220px'},200);
    }

    
});
// 主体右侧事件结束 //


// 商品数量添加删除事件开始 //
$(".btn_add").click(function(){
    var buynum = $(this).next("input").val();
    if( buynum < 22222){
       buynum++;
       $(this).next("input").attr("value",buynum);
    }
});

$(".btn_del").click(function(){
    var buynum = $(this).prev("input").val();
    if( buynum > 1){
       buynum--;
       $(this).prev("input").attr("value",buynum);
    }
});

// 商品数量添加删除事件结束 //

// 分页居中代码开始 //
var page_w = $(".pagination").width();
$(".wpage").width(page_w);

// 分页居中代码结束 //

// 判断左侧展开代码开始 //
$('.left_zk').parents('.sidebar-tm').css({"display":"block"});
$('.left_zk').parents('li').find(".sone_jt").css({ WebkitTransform: 'rotate(90deg)'});
$('.left_zk').parents('li').find(".sone_jt").css({ '-moz-transform': 'rotate(90deg)'});
// 判断左侧展开代码结束 //

 });