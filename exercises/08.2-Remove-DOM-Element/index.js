// Your code here
let list = document.querySelector("#parentLi");
let childs = list.childNodes;   
list.removeChild(childs[3]);
console.log(childs);