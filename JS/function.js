// 密码验证开始
function isPasswd(s){  
var patrn=/^(\w){6,20}$/;  
if (!patrn.exec(s)) {return false;} else {return true;}
}
// 密码验证结束


// 手机号验证开始
function validatemobile(mobile)  {
       var bool =true;
       if(mobile.length==0) 
       { 
          console.log('请输入手机号码！');  
          bool = false; 
       }     
       if(mobile.length!=11) 
       { 
           console.log('请输入有效的手机号码！'); 
           bool = false; 
       }         
       var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
       if(!myreg.test(mobile)) 
       { 
           console.log('请输入有效的手机号码！'); 
           bool = false; 
       } 
       return bool;
   } 
// 手机号验证结束


// 用户名验证开始
function check_Formname(fname){
var regname=/^\w{4,10}$/;
var bool = true;
if(fname==""|| fname.length<4||fname.length>10){
console.log("× 请输入4-10位用户名，可包含数字、字母、下划线");
bool = false;
} else if(fname.match(regname) == null){
bool = false;   
}
return bool;
}
// 用户名验证结束



