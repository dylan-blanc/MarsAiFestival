import { Router } from "express";
import { welcome } from "../controllers/home.controller";

const router = Router();
console.log("toto");
router.get("/", welcome);

export default router;
