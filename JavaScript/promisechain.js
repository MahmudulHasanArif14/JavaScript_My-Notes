
const asynfunc1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("data1");
            resolve("data 1 get success");

        }, 6000);
    })
}



const asynfunc2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("data2");
            resolve("data 2 get success");

        }, 6000);
    })
}

// akn jodi ami chai je fun1 r value print out howar 4 sec bade funct2 aito value tokon nested then use krmu naile akloge duita output aibbo


let promise = asynfunc1();

console.log("fetching data 1")
// promise.then((res)=>{

//     console.log(res);

//     let promise2=asynfunc2();

//     console.log("fetching data 2");

//     promise2.then((res)=>{// nested then
//         console.log(res);// 2nd data fetch kri res dekaybo 
//     });



// });





//eta lekar r ekta way
// eta basically promise chain  akta .then r bitre r ekta .then 
promise.then((res) => {
    console.log(res);
    return asynfunc2();//mane ei then e abr promise return krbo tai etar upor abr then kortam parmu
}).then((res) => {
    console.log(res);
});
