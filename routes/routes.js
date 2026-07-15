import {Router} from "express";
import controller from "../Container/Container .js";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "API funcionando" });
});

export default router;