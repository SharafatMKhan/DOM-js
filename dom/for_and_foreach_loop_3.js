// Traversing through for loop;
// var lis= document.getElementsByTagName('li');
// console.log(lis);
// for(i=0; i<lis.length; i++){
//     console.log(lis[i]);
// }



//Traversing through foreach loop;
var titles = document.getElementsByClassName('title')
Array.from(titles).forEach(function(item){
 console.log(item);   
})