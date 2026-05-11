import { Router } from 'express';
import * as controller from '../controller/user.controller.js'

const classRouter = Router();

// Criar as rotas
classRouter.get('/', controller.getAllUsers); // READ all
classRouter.get('/:id', controller.getUserById); // READ id
classRouter.post('/criar', controller.createUser); // CREATE

export default classRouter;