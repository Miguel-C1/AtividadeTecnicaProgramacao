import { Router } from "express";
import { compras } from "../controller";

const router = Router();

router.get("/", compras.get)
router.get("/:id", compras.getPorId)
router.get("/listagem/Consumo-qtd-cli", compras.getTop10ClientesMaisConsumiram)
router.get("/listagem/Consumo-qtd-prd", compras.getTopProdutosMaisConsumidos)
router.get("/listagem/Consumo-qtd-cli-val", compras.getTop5ClientesMaisConsumiramEmValor)

router.post("/", compras.post)
router.put("/:id", compras.put)
router.delete("/:id", compras.delete)

export default router;
