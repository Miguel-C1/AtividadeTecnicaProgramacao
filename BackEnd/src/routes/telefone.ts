import { Router } from "express";
import { telefone } from "../controller";

const router = Router();

router.get("/", telefone.get)
router.get("/:id", telefone.getPorId)
router.post("/", telefone.post)
router.put("/:id", telefone.put)
router.delete("/:id", telefone.delete)

export default router;
