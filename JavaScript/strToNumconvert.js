let a=10;

let b='20';
// TO convert b from a string to number we use parseint it will convert number to integer to convert float we will use parsefloat

c=parseInt(b);
d=Number(b);//convert to number

// isNaN() is used to check is it a number or not 

console.log(typeof c);

console.log( c);

// to convert number to string we use toString()

d=a.toString();

console.log(typeof d);

console.log(d);


// to convert float to string we will use toFixed()

e=a.toFixed(2); // decimal pore 2 ghor dekay but string convert korilay toFixed function

console.log(typeof e);

console.log(e);

