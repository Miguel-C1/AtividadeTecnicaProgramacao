import { Router } from "express";
import { cliente } from "../controller";

const router = Router();

router.get("/", cliente.get)
router.get("/:id", cliente.getPorId)
router.get("/porNome/:nome", cliente.getPorNome)
router.post("/", cliente.post)
router.put("/:id", cliente.update)
router.delete("/:id", cliente.delete)

export default router;
