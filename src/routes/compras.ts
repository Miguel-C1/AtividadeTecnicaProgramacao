import { Router } from "express";
import { compras } from "../controller";

const router = Router();

router.get("/", compras.get)
router.get("/:id", compras.getPorId)
router.post("/", compras.post)
router.put("/:id", compras.put)
router.delete("/:id", compras.delete)

export default router;
