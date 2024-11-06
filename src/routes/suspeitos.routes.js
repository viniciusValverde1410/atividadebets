import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
        id: Math.floor(Math.random() * 100000),
        nome: "Vinicius Valverde",
        profissao: "Jogador",
        envolvimento: "sim",
        nivelSuspeita: "baixo"
    }
];

//Rota para buscar todos os supeitos;
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeitos);
});

export default suspeitosRoutes;