function userDetials(id) {
    return new Promise((resolve, reject) => {
        console.log("fun1 called");
        resolve({ userId: id });
    });
}

function usersId(data) {
    return new Promise((resolve, reject) => {
        console.log("fun2 called");
        resolve({ userId: data.userId, subId: "en-1" });
    });
}

function userSub(data) {
    return new Promise((resolve, reject) => {
        console.log("fun3 called");
        resolve({ final: `Subject for user ${data.userId} is ${data.subId}` });
    });
}

userDetials("18")
    .then(result => {
        console.log("User Details:", result);
        return usersId(result);
    })
    .then(result => {
        console.log("User ID Result:", result);
        return userSub(result);
    })
    .then(result => {
        console.log("Subject Result:", result);
    })
    .catch(err => {
        console.log("Error:", err);
    });