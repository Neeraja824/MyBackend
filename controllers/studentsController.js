const getStudents=(req,res)=>{
    let stdData={name:"aditya",roll:"12345"};
    res.status(200).json({data: stdData});
};

const addStudents=(req,res)=>{
    res.status(201).json({message: "Student added successfully"});
}

export {getStudents, addStudents};