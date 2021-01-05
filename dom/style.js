// console.log(document.body.h)
// css selector
// id class 
// tag name

// var pera=document.getElementById("demo").innerHTML;

// var par2=document.getElementById("demo2").innerHTML;

// var ss=document.getElementsByClassName("sharafat")[1].innerHTML="hello"



var a = document.getElementsByClassName("add1")[0].innerHTML;

var b = document.getElementsByClassName("add2")[0].innerHTML;
document.getElementsByClassName("add2")[0].style.fontWeight="bolder"
var no=parseInt(a);
var no1=parseInt(b);
document.getElementsByTagName("p")[2].innerHTML=`Sum of ${no} + ${no1}= ${no+no1}`;

