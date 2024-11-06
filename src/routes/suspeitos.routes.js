import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
        id: Math.floor(Math.random() * 100),
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

//Rota para buscar suspeito pelo id;
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const suspeito = suspeitos.find((suspect) => suspect.id == id);
    if (!suspeito) {
        return res.status(404).send ({
            message: "O id indicado não corresponde à algum suspeito.",
        });
    };

    return res.status(200).send ({
        message: `O suspeito com id ${id} é o:`,suspeito
    });
});


export default suspeitosRoutes;