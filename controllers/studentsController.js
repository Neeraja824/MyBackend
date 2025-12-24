// const getStudents=(req,res)=>{
//     let stdData={name:"aditya",roll:"12345"};
//     res.status(200).json({data: stdData});
// };

// const addStudents=(req,res)=>{
//     let postdata=req.body;
//     console.log(postdata);
//     res.status(201).json({message: postdata});
// }

// export {getStudents, addStudents};

import student from "../models/studentsModels.js";

const getStudents = (req, res) => {
    const mydata = {name: "thub", roll: "1234"}; //db
    res.send(mydata);
};
const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    // const addeddata = await student.create(data);
    const addeddata = await student.findOne({stdRoll: 1209});
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
export {getStudents, addStudents};