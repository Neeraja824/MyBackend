function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userroll: "9959"})
        },2000);
    })
};
const myfun=async()=>{
    console.log("Akshu143")
    const result=await getUserDetails("Akshu143");
    console.log("User Details:",result);
    console.log("456")
};
myfun();

function getUserDetailss(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userroll: "99"})
        },2000);
    })
};
const myfun1=async()=>{
    console.log("143")
    const result=await getUserDetailss("143");
    console.log("User Details:",result);
    console.log("126")
};
myfun1();