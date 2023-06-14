import { Router } from "express";
import { rg } from "../controller";

const router = Router();

router.get("/", rg.get)
router.get("/:id", rg.getPorId)
router.get("/porNome/:nome", rg.getPorValor)
router.post("/", rg.post)
router.put("/:id", rg.put)
router.delete("/:id", rg.delete)

export default router;
