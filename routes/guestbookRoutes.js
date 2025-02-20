import express from 'express';
const router = express.Router();

let guests = [];

router.get('/', (req, res) => {
    res.send("Welcome to the Guestbook.\n");
});

router.get('/guestbook', (req, res) => {
    res.send(
        `<h1>GuestBook</h1>
        <form method = "POST" action = "/guestbook">
        <label for name>Name:</label>
        <input type = "text" id = "name" name = "name" required ><br></br>
        <label for = "message">Message:</label>
        <input type = "text" id = "message" name = "message" required><br></br>
        <button type = "Submit">Add to Guestbook.</button>
        </form>`
    );
});

router.post('/guestbook', (req, res) => {
    const {name, message} = req.body;
    if (!name || !message) {
        return res.status(400).send('Name and message required.');
    }

    guests.push({name, message});
    res.send(`Thank you for visiting, ${name}!`);

  });

router.get('/guests', (req, res) => {
    res.json(guests);
});

export default router;