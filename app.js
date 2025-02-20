import express from 'express';
import guestbookRoutes from "./routes/guestbookRoutes.js";
const app = express();

app.use(express.urlencoded({extended: true}));

const loggingMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(loggingMiddleware);

app.use('/', guestbookRoutes);

app.use((req, res) => {
     res.status(404).send('Oops! The page you are looking for does not exist.');
});


app.use((req, res, next) => {
  const timestamp= new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});