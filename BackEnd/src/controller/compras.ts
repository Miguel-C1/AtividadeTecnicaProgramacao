import { Request, Response } from "express";
import comprasServices from "../services/comprasServices";

class Compras {

    async get(req: Request, res: Response) {
        //
        const compra = await comprasServices.get();
        return res.json(compra)
    }
    async getPorId(req: Request, res: Response) {
        const { id } = req.params
        const compra = await comprasServices.getId(parseInt(id))
        return res.json(compra)
    }

    async post(req: Request, res: Response) {
        const data = req.body
        const compra = await comprasServices.post(data)
        return res.json(compra)
    }
    async getTop10ClientesMaisConsumiram(req: Request, res: Response) {
        const compra = await comprasServices.getTop10ClientesMaisConsumiram();
        return res.json(compra)
    }
    async getTopProdutosMaisConsumidos(req: Request, res: Response) {
        const compra = await comprasServices.getTopProdutosMaisConsumidos();
        return res.json(compra)
    }
    async getTop5ClientesMaisConsumiramEmValor(req: Request, res: Response) {
        const compra = await comprasServices.getTop5ClientesMaisConsumiramEmValor();
        return res.json(compra)
    }
  

    async put(req: Request, res: Response) {
        const data = req.body
        const { id } = req.params
        const compras = await comprasServices.put(data, parseInt(id))
        return res.json(compras)
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        await comprasServices.delete(parseInt(id))
        return res.status(204)
    }

}

export default new Compras();