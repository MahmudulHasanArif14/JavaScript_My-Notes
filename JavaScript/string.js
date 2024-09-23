let str1="Arif";
let str2='arif';

console.log(str1.length);

//template literals

let name = 'Arif';
let age = 25;
let t=`this is template literals`;

console.log(t);

console.log(`My name is ${name}, and I am ${age} years old.`);// this is template literate to access var and string in a single quatation use backtick for var ${varname}


console.log(name.toUpperCase());// original value re change kore nay eta just copy change hoy call by value eta typo
console.log(t.toLowerCase());

//! in js strings are immutable 

t.trim();// starting bedorkari space and ending bedorkari space del kore 

t.slice(0,2);// it will select 0-1 value (] slice(start,end); end value excluded r end er value na dile joto character ace starting thaki sob print krbo

console.log(t.concat(str1));


str1.replace(a,12);// string.replace(searchval,replace val)

// to replace all the same occurance we use replaceAll(searchval,replaceval)

str1.charAt(1);