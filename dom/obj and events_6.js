// var obj={
//     name:"sharafat",
//     password:1234,

//     myfun:function() {
//       console.log(this.name);
//     }
// }
// console.log(obj.myfun( ));

// var obj1 = {
//   name:"sheri",
//   password:9893,

//   myfun1:function() {
//     console.log(this.password);
//   }
// }
// console.log(obj1.myfun1());

///onlcik event///

// function myfunc() {
//   document.querySelector("#demo").innerHTML = "Hello world";
// }
///onlcik event end///
const list=document.querySelector(".demo");

///Onload event///
function changetext() {
  document.querySelector("#demo3").innerHTML= "The text has changed";
}

let renderHtml=(e)=>{
e.forEach(arr=>{
  list.innerHTML+=`<br> <br>Name is ${arr.name} <br> Email is ${arr.email} <br> mobile is${arr.mobile}`
})
}


function submit(){
  arr=[];
  const name=document.getElementById("name")
  const email=document.getElementById("email")
  const mobile=document.getElementById("mobile")
  if(name!=""){
    
    alert("Enter name")
    
    return false
  }
  if(email!="")
  {
    alert("please Email valu");

  }
  arr.push({
    name:name.value,
    email:email.value,
    mobile:mobile.value
  })
  renderHtml(arr);
}


///Onload event end///