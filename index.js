var sym = null;
var num1 = "0",
	num2 = "0";
var x = null;
var arr = [];
var result = null; 
var con = document.getElementsByClassName('result')[0];
for(var i=0;i<20;i++){
	var but = document.getElementsByClassName('btn')[i];
	but.onclick = function(){
		x = this.innerHTML;
		main();
	}
}
function main(){
	if(!isNaN(x)|| x === "."){
		arr.push(x);
		num1 = arr.join("");
		con.value = num1;
		num1 = Number(num1);
	}else if(x === "C"){
		arr = [];
		num1 = 0;
		num2 = 0;
		sym = null;
		con.value = num1;
	}else if(x === "←"){
		arr.pop();
		num1 = arr.join("");
		con.value = num1;
	}else if(x === "="){
		count();
		con.value = num1;
		arr = [];
		sym = null;
	}
	else{
		sym = x;
		con.value = x;
		num2 = num1;
		arr = [];
		num1 = arr;
	}
}
function count(){
	if (sym === "＋") {
		num1=num1+num2;
	}
	if (sym === "－") {
		num1=num2-num1;
	}
	if (sym === "×") {
		num1=num1*num2;
	}
	if (sym === "÷") {
		num1=num2/num1;
	}
	if (sym === "%") {
		num1=num1*0.01;
	}
}