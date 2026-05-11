import { Aluno } from '../model/student.model.js';
import bcrypt from 'bcryptjs';

export async function getAllUsers(req, res) {
    //Puxando todos os dados da tabela
    try {
        const allUser = await Aluno.findAll();
        console.log(allUser);
        res.status(201).json(allUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

export async function createUser(req, res) {
    try {
        const { email, senha, nome } = req.body;
        // Convertendo a senha em Hash
        const hashSenha = await bcrypt.hash(senha, 10);

        // Imputando dados no banco de dados
        const userCreate = await Aluno.create({
            email: email, 
            senha: hashSenha, 
            nome: nome});

        // Deletar a senha da RESPOSTA da requisição
        const userResponse = userCreate.toJSON();
        delete userResponse.senha;
        res.status(201).json(userResponse);

    } catch (error) {
        res.status(500).json(error);
    }
}

export async function getUserById(req, res) {
    //Puxando todos os dados da tabela
    try {
        const userId = await User.findByPk(req.params.id);
        if (!userId){
            res.status(404).json({erro: "Usuario nao encontrado!"});
        }
        console.log(userId);
        res.status(201).json(userId);
    } catch (error) {
        res.status(500).json(error);
    } 
}