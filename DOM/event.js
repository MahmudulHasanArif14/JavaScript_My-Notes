let btn1=document.querySelector("#btn1");
//event bubble


//event.stopPropagration() for stop bubble 
// btn1.onclick= (eventobj)=>{

//     console.log(eventobj);//it will return event object 
//     console.log("button was clicked");
//     alert("I was clicked");

// }


// jodi amra event handle inline + js file o same class r upre same event dei tokon priority thake js file r event r js file r ta kaj krbo 



// r ekta method lekar event listener diya  ek event r lagin multiple event listerner banani jay

let al=()=>{

    alert();
 }

btn1.addEventListener("click",al);// var diya raksi jate remove kora jay function ta


btn1.addEventListener("click",()=>{

    console.log("clic");// multiple eventlister banani jay aktar upore er lagin eta use kora better but function o jay na eta overwrite kori lay function diya krle 
 })
 

btn1.removeEventListener("click",al);


let mode=document.querySelector(".mode");

let currMode="light";


mode.addEventListener("click",()=>{

    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);

})



