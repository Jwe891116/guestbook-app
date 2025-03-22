import { getAllGuest, addGuest } from "../models/userModel.js";

export const getHome = (req, res) => {
    res.send("Welcome to the Guestbook.\n");
    };

export const getGuestbook = async (req, res) => {
    res.render("guestbook", {
        title: "GuestBook Page",
        message: "Leave your message below",
        confirm: "Thank you",
      });
    try{
      const guestbook = await getAllGuest();
      return res.json(guestbook);
    } catch (error) {
      res.status(500).send("An error occurred fetching guests.");
    }
  };

export const getGuests = async (req, res) => {
  try {
    const guests = await getAllGuest();
    return res.json(guests);
  } catch (error) {
    res.status(500).send("An error occurred fetching guests.");
  }
  };

export const postGuestbook = async (req, res) => {
    const {name, message} = req.body;
    if (!name || !message) {
      return res.status(400).send('Name and message required.');
    }
    try {
      const newGuest = await addGuest(name, message);
      return res.render("thankyou", { title: "Thank You", username: newGuest.username, message: newGuest.message });
  } catch (error) {
      res.status(500).send("An error occurred during message post.");
  }
};