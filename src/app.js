import express from 'express';
import sequelize from './config/db.js';
import classRouter from './router/class.route.js';
import studentRouter from './router/class.route.js';

const app = express();

app.get('/student', studentRouter);
app.get('/class', classRouter);

sequelize.sync({ alter: true }).then( 
    ()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Server rodando em localhost:${process.env.API_PORT}`);
        });
}).catch(err => console.log("Erro ao sicronizar ou iniciar o server: ", err));