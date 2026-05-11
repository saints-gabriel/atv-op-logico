import { Router } from "express";
import * as controller from '../controller/student.controller.js'

const studentRouter = Router()

studentRouter.get('/', controller.getAllStudentsInRisk);
studentRouter.get('/:id', controller.getByID);
studentRouter.post('/', controller.createStudent);

export default studentRouter;