function api(){

return new Promise((resolve,reject)=>{

        
    setTimeout(()=>{
        console.log("Weather Report");
        resolve(200);// generally 200 means success message we got
    },2000);


});


}

// now if i call it with await it will not work as here no async keyword define in this api function so i have to create other function with name async


async function weatherRep(){
    await api();// it will run in 2s
    await api();// it will run in 4s // because 1st one will stop all the function execution of its under function
}




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



(async function callEd(){
    await asynfunc1();//6s take
    await asynfunc2();//12s take to execute 
})();


// callEd();//auto call krte IIFE method use krmu 