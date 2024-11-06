import {Router} from "express";
import suspeitosRoutes from "./suspeitosRoutes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).json({ message: "Teste"})
});

routes.use("/suspeitos", suspeitosRoutes);

export default routes;