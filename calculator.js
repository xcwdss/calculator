var num1=0;
var num2=0;
var num=0;
var num_flag=0,calc_flag=0;
var result=0;
var disp=document.getElementsByClassName('disp-block')[0];
var num=document.getElementsByClassName('num');

for (let i = 0; i < 10; i++) {
	num[i].onclick=function () {
		if(num_flag==0){
			disp.value=this.innerHTML;
			num_flag=1;
		}else{
			disp.value=disp.value+this.innerHTML;
		}
		console.log(typeof disp.value);		
	}
}

document.getElementsByClassName('divid')[0].onclick=function (){
	num_flag=0;
	num1=parseFloat(disp.value);
	console.log(num1);
	calc_flag=1;
}
document.getElementsByClassName('mul')[0].onclick=function (){
	num_flag=0;
	num1=parseFloat(disp.value);
	console.log(num1);
	calc_flag=2;
}
document.getElementsByClassName('sub')[0].onclick=function (){
	num_flag=0;
	num1=parseFloat(disp.value);
	console.log(num1);
	calc_flag=3;
}
document.getElementsByClassName('add')[0].onclick=function (){
	num_flag=0;
	num1=parseFloat(disp.value);
	console.log(num1);
	calc_flag=4;
}
document.getElementsByClassName('clear')[0].onclick=function (){
	num1=0;
	num2=0;
	disp.value='';
}
document.getElementsByClassName('equ')[0].onclick=function (){
    num_flag=0;
    if(calc_flag==0){
    	num1=parseFloat(disp.value);
    	result=num1;
    }else{
    	num2=parseFloat(disp.value);
    	if(calc_flag==1){
    		result=num1/num2;
    	}else if(calc_flag==2){//bug------1.4*3=4.199999999
    		result=num1*num2;
    		console.log(num1+'*'+num2+'='+result);
    	}else if(calc_flag==3){
    		result=num1-num2;
    	}else if(calc_flag==4){
    		result=num1+num2;
    		//console.log(num1+'+'+num2+'='+result);
    	}
    }
    //result=toFixed(result);
    disp.value=result.toString();
    console.log(result);
    num1=result;
    num2=0;
    calc_flag=0;
}
document.getElementsByClassName('pot')[0].onclick=function (){
	if(num_flag==0){
		disp.value='0'+'.';
		num_flag=1;
	}else{
		disp.value=disp.value+'.';
	}
	
}
document.getElementsByClassName('percent')[0].onclick=function (){
	disp.value=(parseFloat(disp.value)/100).toString();
}
