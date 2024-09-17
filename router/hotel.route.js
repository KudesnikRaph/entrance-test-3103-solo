import { Router } from "express";
import hotelController from "../controller/hotel.controller.js";

const router = new Router();

router.post('/hotel', hotelController.createHotel);

export default router;  