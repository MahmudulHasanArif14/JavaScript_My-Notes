let arr=[1,2,3,4];

//! add to end to the original array
arr.push(10);


arr.push(10,20);//* add to end 

//! del from end and return. change original string
deletedItem=arr.pop();
console.log(deletedItem);//deleteditem print kore

//! to convert the full array to string eta original array change kore na 
console.log(arr.toString);


let marvel_heros=["ironman","afasf"];

let dc=["flash","fafaf"];

console.log(marvel_heros.concat(dc));//it concate 2 array but no change in original array

marvel_heros.unshift("thor");//add to start 

marvel_heros.shift();// del from start


arr.slice(0,2);//don't do any change on original array


//splice method use to change the original array 

arr.splice(2,1,100);// splice(startind,delcount kotora del korto,newelement boibo)// (add,remove,replace)

console.log(arr);



