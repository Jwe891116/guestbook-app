import { getAllGuest, addGuest } from "../models/userModel.js";

export const getHome = (req, res) => {
    res.send("Welcome to the Guestbook.\n");
    };

export const getGuestbook = (req, res) => {
    res.render("guestbook", {
        title: "GuestBook Page",
        message: "Leave your message below",
        confirm: "Thank you",
      });
  };

export const getGuests = (req, res) => {
    res.json(getAllGuest());
  };

export const postGuestbook = (req, res) => {
    const {name, message} = req.body;
    if (!name || !message) {
      return res.status(400).send('Name and message required.');
    }

    const newGuest = addGuest(name, message);
    res.render("thankyou", { title: "Thank You", ...newGuest });
};