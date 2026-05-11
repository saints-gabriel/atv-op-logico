import express from 'express';
import sequelize from './config/db.js';
import studentRouter from './router/student.route.js';

const app = express();
app.use(express.json())

app.use('/students', studentRouter);

sequelize.sync({ alter: true }).then( 
    ()=>{
        app.listen(process.env.PORT || 3000, ()=>{
            console.log(`Server rodando em localhost:${process.env.API_PORT}`);
        });
}).catch(err => console.log("Erro ao sicronizar ou iniciar o server: ", err));