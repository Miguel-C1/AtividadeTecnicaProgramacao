import { Router } from "express";

import { default as cliente } from "./cliente"

import { default as compras } from "./compras"

import { default as pet } from "./pet"

import { default as produtoServico } from "./produtoServico"

import { default as telefone } from "./telefone"

import { default as rg } from "./rg"
 

const router = Router();

router.use("/cliente", cliente)
router.use("/compras", compras)
router.use("/pet", pet)
router.use("/produtoServico", produtoServico)
router.use("/telefone", telefone)
router.use("/rg", rg)

export default router;
