import { Request, Response } from "express";
import produtoServicoServices from "../services/produtoServicoServices";

class ProdutoServico {

    async get(req: Request, res: Response){
        const produtoServico = await produtoServicoServices.get()
        return res.status(200).json(produtoServico);
    }
    async getServico(req: Request, res: Response){
        const produtoServico = await produtoServicoServices.getServico()
        return res.status(200).json(produtoServico);
    }
    async getProduto(req: Request, res: Response){
        const produtoServico = await produtoServicoServices.getProduto()
        return res.status(200).json(produtoServico);
    }
    
}


export default new ProdutoServico();