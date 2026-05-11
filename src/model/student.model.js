import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Turma from './class.model.js';

const Aluno = sequelize.define('Aluno', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  senha: { type: DataTypes.STRING },
  mediaGeral: { type: DataTypes.FLOAT },
});

Turma.hasMany(Aluno, { foreignKey: 'turmaId' });
Aluno.belongsTo(Turma, { foreignKey: 'turmaId' });

export { Turma, Aluno };