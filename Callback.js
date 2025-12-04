function getUserDetails(id,getUserSubjects){
    console.log("Getting user details by userId", id);
    getUserSubjects({userroll: "2405"});
}
function getUserSubjects(userRoll,getUserMarks){
    console.log("getting user subjects by roll number", userRoll);
    getUserMarks({subid: "Maths"});
}
function getUserMarks(userSubId){
    console.log("getting user marks by subid", userSubId);
}
getUserDetails("123",function(userRoll){
    getUserSubjects(userRoll,function(userSubId){
        getUserMarks(userSubId);
    })
});