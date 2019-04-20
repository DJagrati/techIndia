var a=10;
var b=10+15;
console.log(a);
console.log(b);

for(var i=0; i<=10; i++){
  console.log(2*i);
}

if(a>b){
  console.log("a");
}
else {
  console.log("b");
}

function hello(name) {
  console.log("Hello " + name);
}
hello("Divu");
hello();
hello("Divu","jaggu");

var x= function()
{
  console.log("We are in function");
}
x();

var arr=[1,2,3,4];
var arr1=[1,'Divu', true, 12.5];     //created using linked list, thus this can happen!
console.log(arr);
console.log(arr1);


var obj={
  p:10,
  q:20,
  r:"Hello"
};
