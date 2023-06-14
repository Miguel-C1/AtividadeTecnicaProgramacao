import { Request, Response } from "express";
import rgService from "../services/rgService";

class Rg {
  async get(req: Request, res: Response) {
    const rg = await rgService.get();
    return res.status(200).json(rg);
  }
  async getPorId(req: Request, res: Response) {
    const { id } = req.params;
    const rg = await rgService.getId(parseInt(id));
    return res.status(200).json(rg);
  }
  async getPorValor(req: Request, res: Response) {
    const { valor } = req.params;
    const rg = await rgService.getPorValor(valor);
    return res.status(200).json(rg);
  }
  async post(req: Request, res: Response) {
    const  data  = req.body;
    const rg = await rgService.post(data);
    return res.status(201).json(rg);
  }
  async put(req: Request, res: Response) {
    const  data  = req.body;
    const { id } = req.params;
    const rg = await rgService.put(data, parseInt(id));
    return res.status(200).json(rg);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const rg = await rgService.delete(parseInt(id));
    return res.status(204).json(rg);
  }
}

export default new Rg();
