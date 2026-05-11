import { getAllStudentsInRisk, getById, createStudent } from '../controller/student.controller.js'
import { Router } from 'express';

const studentRouter = Router()

studentRouter.get('/', getAllStudentsInRisk);
studentRouter.get('/:id', getById);
studentRouter.post('/', createStudent);

export default studentRouter 