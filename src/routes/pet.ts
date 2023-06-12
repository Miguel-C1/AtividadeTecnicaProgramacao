import { Router } from "express";
import { pet } from "../controller";

const router = Router();

router.get("/", pet.get)
router.get("/:id", pet.getPorId)
router.get("/porNome/:nome", pet.getPorNome)
router.post("/", pet.post)
router.put("/:id", pet.put)
router.delete("/:id", pet.delete)

export default router;
