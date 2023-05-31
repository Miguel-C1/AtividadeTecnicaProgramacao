import { Request, Response } from "express";
import petServices from "../services/petServices";

class Pet{

    async get(req: Request, res: Response){
        const pet = await petServices.get()
        return res.status(200).json(pet);
    }

    async getPorId(req: Request, res: Response){
        const { id } = req.params
        const pet = await petServices.getPorId(parseInt(id))
        return res.status(200).json(pet);
    }
    
    async getPorNome(req: Request, res: Response){
        const { nome } = req.params
        const pet = await petServices.getPorNome(nome)
        return res.status(200).json(pet);
    }

    async post(req: Request, res: Response){
        const { data } = req.body
        const pet = await petServices.post(data)
        return res.status(201).json(pet);
    }

    async put(req: Request, res: Response){
        const { data } = req.body
        const { id } = req.params
        const pet = await petServices.update(data, parseInt(id))
        return res.status(201).json(pet);
    }
    async delete(req: Request, res: Response){
        const { id } = req.params
        await petServices.delete(parseInt(id))
        return res.status(200)
    }
}

export default new Pet();