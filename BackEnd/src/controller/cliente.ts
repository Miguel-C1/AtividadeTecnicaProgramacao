import { Request, Response } from "express";
import clienteServices from "../services/clienteServices";

class Cliente {
  async get(req: Request, res: Response) {
    const cliente = await clienteServices.get();
    return res.status(200).json(cliente);
  }
  async getPorNome(req: Request, res: Response) {
    const { nome } = req.params;
    const cliente = await clienteServices.getPorNome(nome);
    return res.status(200).json(cliente);
  }
  async getPorId(req: Request, res: Response) {
    const { id } = req.params;
    const cliente = await clienteServices.getPorId(parseInt(id));
    return res.status(200).json(cliente);
  }
  async post(req: Request, res: Response) {
    const  data  = req.body;
    const cliente = await clienteServices.post(data);
    return res.status(201).json(cliente);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const  data  = req.body;
    const cliente = await clienteServices.update(parseInt(id), data);
    return res.status(201).json(cliente);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await clienteServices.delete(parseInt(id));
    return res.status(200);
  }
}

export default new Cliente();
