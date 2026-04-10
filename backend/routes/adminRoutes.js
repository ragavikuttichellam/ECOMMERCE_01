import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);

router.get("/dashboard", protectAdmin, (req, res) => {
  res.json("Admin dashboard access granted");
});

export default router;
