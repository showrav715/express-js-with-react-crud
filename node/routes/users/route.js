import express from "express"
import { getlIST, singleUser, storeUser } from "../../controllers/UserController.js";
export const router = express.Router();

router.get("/list",getlIST)
router.post("/create",storeUser)
router.get("/single/:id",singleUser)