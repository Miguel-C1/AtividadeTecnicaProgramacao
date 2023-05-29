import { Request, Response } from "express";
import clienteServices from "../services/clienteServices";

class Cliente {

    async get(req: Request, res: Response) {
        const cliente = await clienteServices.get()
        return res.status(200).json(cliente);
    }

}

export default new Cliente();
