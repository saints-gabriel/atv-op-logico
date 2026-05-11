import { Aluno } from "../model/student.model.js";
import { Op } from 'sequelize'


    export async function getAllStudentsInRisk(req, res) {
        try {
            const allStudents = await Aluno.findAll({
            attributes: ['nome','email','mediaGeral'],
            include: {
                model: Turma,
                attributes: ['nome', 'mediaGeral'],
                where: {
                    semestre: {[Op.in]:[1,2]}
                }
            },
            where: {
                mediaGeral: {[Op.lt]:[7.0]}
            },
            order: [['mediaGeral','ASC']]
        })
    console.log('Estudantes em risco: ' + allStudents.length)
    res.status(201).json({alunosEmRisco: allStudents, total_risco: allStudents.length});
    }
        catch(e){
            res.status(500).json({message: 'Erro ao buscar ' + e})
        }
    }

    export async function getById(req, res){
    try {
        const studentId = await Aluno.findByPk(req.params.id);
        if (!studentId) {
            return res.status(404).json({ erro: "Estudante nao encontrado!" });
        }
        res.status(200).json(studentId);
    } catch (e) {
        res.status(500).json(e);
    }
    }

    export async function createStudent(req, res){
        try {
            const { nome, email, senha, mediaGeral } = req.body;

            const studentCreate = await User.create({
            email: email, 
            senha: senha, 
            nome: nome,
            media: mediaGeral});

        const studentResponse = studentCreate.toJSON();
        res.status(201).json(studentResponse);

    } catch (error) {
        res.status(500).json(error);
    }
    }