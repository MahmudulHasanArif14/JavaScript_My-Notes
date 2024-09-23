//window object browser open korle default thake it is browser objet not js object and automatically created by browser

console.log("hello");

window.console.log("aaa");// console.log window r akta object

//DOM document object model 


console.dir(window.document); // or console.dir(document)

console.log(document);// as window global object na dilew auto buji jay js

console.log(document.body);

console.dir(document.body.childNodes[1]);

document.body.childNodes[1].innerText = "abcd";// change the h1 tag inner text  

//user r specific kaj r upor depend kori dynamically change kora r lagin dom?? use kri main html r kunu change na kri


//*DOM manipulation

let id = document.getElementById("heading");

console.dir(id);
console.log(id);

let clas = document.getElementsByClassName("para");

console.dir(clas);
console.log(clas);// this will return HTML Collection


let tag = document.getElementsByTagName("p");// this will return a html collection
console.dir(tag);
console.log(tag);






let quer = document.querySelector(".para");
// it will return 1st element

console.dir(quer);
console.log(quer);


let selall = document.querySelectorAll("p");
console.log(selall);
console.dir(selall);

// this will return NodeList



//elements er properties get kortam pari and change kortam o pari


//THEY ARE
//! tagName:returns tag for element nodes// tag name return korbo
//! innerText:returns the text content of the element and all its children //* 
//! innerHTML:returns the plain text or HTML contents in the element 
//! textContent:returns textual content even for hidden elements


let head = document.querySelector("h1");

let attr = head.getAttribute("id");
console.log(attr);//id attribute r value dibo

let changeattr=head.setAttribute("id","h");// change the attr value 

// to style 

head.style.backgroundColor="red";



let div=document.querySelector(".div");

let newbtn=document.createElement("button");
let newpara=document.createElement("p");

let newbt=document.createElement("button");
let newpar=document.createElement("h1");

newbtn.innerText="click me";
newpara.innerText="it is added by prepend method";
newbt.innerText="Hover me";
newpar.innerText="Hello added by ";

div.append(newbtn);//this will add the button end of the div inside the div 

div.prepend(newpara);// this will add the button start of the div inside 

div.before(newbt);
div.after(newpar);

div.remove();//remove korilibo div tare




//appendchild(),removechild() method porio


//class name add korte ager ta rakki we use classList

let para=document.querySelector(".class");

console.log(para);

para.classList.add("newClass");

// para.clasListremove("newClass");// ! use to remove class



























