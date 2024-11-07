import express from "express";
import { registerTravel, updateTravel, findTravellers } from "../controllers/travel.js";

const router = express.Router();

router.post("/registerTravel", registerTravel);
router.put("/updateTravel/:id", updateTravel);
router.get("/findTravellers/:travelId", findTravellers);

export default router;