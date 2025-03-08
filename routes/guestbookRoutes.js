import express from 'express';
const router = express.Router();
import path from "path";
import { getGuestbook, getGuests, getHome, postGuestbook} from "../controllers/userController.js";

router.get("/", getHome);

router.get("/guestbook", getGuestbook);

router.get("/guests", getGuests);

router.post("/guestbook", postGuestbook);

export default router;