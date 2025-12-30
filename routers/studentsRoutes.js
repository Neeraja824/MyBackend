import express from "express";
import {
  getStudentByRoll,
  addStudents,
  getStudentsFilter,
  updateStudentByRoll
} from "../controllers/studentsController.js";

const router = express.Router();
router.get("/students/:stdRoll", getStudentByRoll);
router.get("/students", getStudentsFilter);
router.post("/students", addStudents);
router.put("/student/:stdRoll", updateStudentByRoll);

export default router;