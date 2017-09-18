/*
* @Author: lenovo
* @Date:   2017-09-15 17:10:24
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-15 19:37:07
*/
let time=document.getElementById('time');

let t=setInterval(function(){
		if(time.innerText>0){
			time.innerText--;
		}else{
		clearInterval(t);
		location.replace('login.html');
		}		
},1000);
