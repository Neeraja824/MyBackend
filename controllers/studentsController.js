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

// import student from "../models/studentsModels.js";
// const getStudents = (req, res) => {
//     const mydata = {name: "thub", roll: "1234"}; //db
//     res.send(mydata);
// };
// const addStudents = async(req, res) => {
//     try{
//          const data = req.body
//     console.log(data);
//     const addeddata = await student.create(data);
//     // const addeddata = await student.findOne({stdRoll: 1209});
//     const mydata=await student.findById({});
//     console.log(addeddata);
//     res.status(201).json("data added");
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// };
// export {getStudents, addStudents};

// import student from "../models/studentsModels.js";
// const getStudents = async(req, res) => {
//     try{
//             // const mydata = await student.find();
//             // const mydata = await student.findOne();
//             const mydata = await student.findById({_id: "694b82e0c80115abff46e516"})
//             res.status(200).json(mydata);
//     }catch(error){
//         console.log(error);
//         res.status(500).json({error: error.message})
//     }
// };
// const addStudents = async(req, res) => {
//     try{
//          const data = req.body;
//     console.log(data);
//     // const addeddata = await student.create(data);
//     const addeddata = await student.insertMany(data);
//     console.log(addeddata);
//     res.status(201).json("data added");
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// };
// export {getStudents, addStudents};


import student from "../models/studentsModels.js";

const getStudentByRoll = async (req, res) => {
  try {
    const { stdRoll } = req.params;
    const studentData = await student.findOne({
      stdRoll: Number(stdRoll)
    });

    if (!studentData) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST add student
const addStudents = async (req, res) => {
  try {
    const addedData = await student.create(req.body);
    res.status(201).json({
      message: "Student added successfully",
      data: addedData
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET with query filter
const getStudentsFilter = async (req, res) => {
  try {
    const { stdRoll, stdPhone } = req.query;

    const query = {};

    if (stdRoll) {
      query.stdRoll = Number(stdRoll);
    }

    if (stdPhone) {
      query.stdPhone = Number(stdPhone);
    }

    const students = await student.find(query);

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ PUT update student by roll number
const updateStudentByRoll = async (req, res) => {
  try {
    const { stdRoll } = req.params;

    const updatedStudent = await student.findOneAndUpdate(
      { stdRoll: Number(stdRoll) },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully",
      data: updatedStudent
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getStudentByRoll,
  addStudents,
  getStudentsFilter,
  updateStudentByRoll
};