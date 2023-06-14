import { Router } from "express";
import { produtoServico } from "../controller";

const router = Router();

router.get("/", produtoServico.get)
router.get("/porId/:id", produtoServico.getId)
router.get("/produto/", produtoServico.getProduto)
router.get("/servico/", produtoServico.getNomeServico)
router.get("/produto/:nome", produtoServico.getNomeProduto)
router.get("/servico/:nome", produtoServico.getNomeServico)
router.post("/", produtoServico.post)
router.put("/:id", produtoServico.put)
router.delete("/:id", produtoServico.delete)

export default router;
