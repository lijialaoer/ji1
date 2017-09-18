/*
* @Author: lenovo
* @Date:   2017-09-15 17:10:24
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-15 18:10:33
*/
let user=document.getElementById('user');
let paw=document.getElementById('paw');
let bon=document.getElementById('bon');
bon.onclick=function(){
	if(user.value=='admin' && paw.value=='123'){
		alert('登录成功');
	}else{
		location.replace('error.html');
	}
}