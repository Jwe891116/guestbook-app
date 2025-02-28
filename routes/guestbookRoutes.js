import express from 'express';
const router = express.Router();
import path from "path";

let guests = [];

router.get('/', (req, res) => {
    res.send("Welcome to the Guestbook.\n");
});

router.get("/guestbook", (req, res) => {
  res.render("guestbook", {
    title: "GuestBook Page",
    message: "Leave your message below",
    confirm: "Thank you",
  });
});

router.post('/guestbook', (req, res) => {
    const {name, message} = req.body;
    if (!name || !message) {
      return res.status(400).send('Name and message required.');
    }

    guests.push({ name, message});
    res.render("thankyou", {title: "Thank You", name, message});

  });

router.get('/guests', (req, res) => {
    res.json(guests);
});

export default router;