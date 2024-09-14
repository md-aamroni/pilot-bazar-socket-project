import { Router } from "express";
import {
    RegisterController,
    StatusController
} from "../app/Controllers/AccountController.mjs";

const router = Router()

router.post('/register', async (req, res) => {
    try {
        const arr = await RegisterController(req.body);
        return res.status(arr.code).json(arr.data);
    } catch (err) {
        return res.status(err.code).json(err.data);
    }
})

router.patch('/status', async (req, res) => {
    try {
        const arr = await StatusController(req.body);
        return res.status(arr.code).json(arr.data);
    } catch (err) {
        return res.status(err.code).json(err.data);
    }
})

export default router