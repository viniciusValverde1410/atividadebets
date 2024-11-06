import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
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

//Rota para cadastrar um novo suspeito;
suspeitosRoutes.post("/", (req ,res) => {
    const { nome, profissao, envolvimento, nivelSuspeita } = req.body;

    //Validação;
    if ( !nome || !profissao || !nivelSuspeita ) {
        return res.status(400).send({
            message: "Os campos de nome, profissão e nivelSuspeita devem ser preenchidos!"
        });
    };

    //Campo de nível de suspeita;     "toLowerCase = se for minusuclo ou maiusuclo ainda vai funcionar"
    if ( nivelSuspeita.toLowerCase () != "baixo" && nivelSuspeita.toLowerCase() != "médio" && nivelSuspeita.toLowerCase () != "alto" ) {
        return res.status(400).send ({
            message: " O campo de nível de suspeita deve ser preenchido com 'baixo', 'médio' ou 'alto'. "
        });
    }
    //Validação envolvimento;
    if (envolvimento.toLowerCase () != "sim" && envolvimento.toLowerCase() != "não"){
        return res.status(400).send ({
            message: "O campo de envolvimento deve ser preenchido com 'sim' ou 'não'."
        });
    };

    const novoSuspeito = {
        id: Math.floor(Math.random() * 100),
        nome,
        profissao,
        envolvimento,
        nivelSuspeita
    };

    suspeitos.push(novoSuspeito);

    return res.status(200).send ({
        message: "Suspeito cadastrado com sucesso",
        novoSuspeito,
    });
});


export default suspeitosRoutes;