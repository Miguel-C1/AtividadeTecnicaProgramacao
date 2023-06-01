import { Request, Response } from "express";
import produtoServicoServices from "../services/produtoServicoServices";

class ProdutoServico {
  async get(req: Request, res: Response) {
    const produtoServico = await produtoServicoServices.get();
    return res.status(200).json(produtoServico);
  }
  async getServico(req: Request, res: Response) {
    const produtoServico = await produtoServicoServices.getServico();
    return res.status(200).json(produtoServico);
  }
  async getProduto(req: Request, res: Response) {
    const produtoServico = await produtoServicoServices.getProduto();
    return res.status(200).json(produtoServico);
  }
  async getId(req: Request, res: Response) {
    const { id } = req.params;
    const produtoServico = await produtoServicoServices.getId(parseInt(id));
    return res.status(200).json(produtoServico);
  }
  async getNomeServico(req: Request, res: Response) {
    const { nome } = req.params;
    const produtoServico = await produtoServicoServices.getServicoNome(nome);
    return res.status(200).json(produtoServico);
  }
  async getNomeProduto(req: Request, res: Response) {
    const { nome } = req.params;
    const produtoServico = await produtoServicoServices.getProdutoNome(nome);
    return res.status(200).json(produtoServico);
  }
  async post(req: Request, res: Response) {
    const { data } = req.body;
    const produtoServico = await produtoServicoServices.post(data);
    return res.status(201).json(produtoServico);
  }
  async put(req: Request, res: Response) {
    const { id } = req.params;
    const { data } = req.body;
    const produtoServico = await produtoServicoServices.put(data, parseInt(id));
    return res.status(200).json(produtoServico);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await produtoServicoServices.delete(parseInt(id));
    return res.status(204);
  }
}

export default new ProdutoServico();
