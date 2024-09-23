//Map method similar to forEach eta use kora jay array er ak ak index o giya kichu operation perform korar lagin 

//just difference otaw map e operation korar bade newArray return kore kintu foreach e new kunu array banay na 

//arr.map(callbackfunction(val,index,array))


let num = [10, 13, 14, 15];

// num.map((val)=>{
//     console.log(val);
// });

let newArr = num.map((val) => {
    return val;
});

console.log(newArr);//new array copy banaysi original array kunu change hooito nay


//*filter method


let a=[2,3,4,1,6,8];


let evenNum=a.filter((val)=>{

    return val%2===0;

})

//filter kichu condition check kori true hoile val pass korbo naile krtonayfilter r kam eta

console.log(evenNum);//copy of filter value original value same thake



//*reduce jekano amrar input onekgula thakbo but output akta value aibo tokon amra reduce method use kori

// performs some operations and reduces the array to single value. it returns that single value

//reduce(result,currentval) duita parameter pass kori


let arr=[1,3,2,4];

const output=arr.reduce((prevVal,currentval)=>{

    return prevVal+currentval;


});

console.log(output);


const max=arr.reduce((prevVal,currentval)=>{

    if(prevVal>currentval) return prevVal;
    else return currentval;


});

console.log(max);

























