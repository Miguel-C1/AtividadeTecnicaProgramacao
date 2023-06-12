import { Request, Response } from "express";
import telefoneService from "../services/telefoneService";

class Telefone {

    async get(req: Request, res: Response) {
        //
        const telefone = await telefoneService.get()
        return res.json(telefone)
    }

    async getPorId(req: Request, res: Response) {
        const { id } = req.params
        const telefone = await telefoneService.getId(parseInt(id))
        return res.json(telefone)
    }

    async post(req: Request, res: Response) {
        const data = req.body
        const telefone = await telefoneService.post(data)
        return res.json(telefone)
    }

    async put(req: Request, res: Response) {
        const { id } = req.params
        const data = req.body
        const telefone = await telefoneService.put(data, parseInt(id))
        res.json(telefone)
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        await telefoneService.delete(parseInt(id))
        return res.send(204)
    }

}

export default new Telefone();
