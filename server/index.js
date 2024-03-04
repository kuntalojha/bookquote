import express from 'express';
import mongoose from 'mongoose';


import randomQuoteRoute from './routes/randomquote.route.js';

const app = express();
const PORT = 3000;
app.use(express.json()); // Add this line to parse JSON data
// This one is use for send data as a form url
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect('mongodb://127.0.0.1:27017/quotesapi')
  .then(() => console.log('Connected to the database!'))
  .catch(() => {
    console.log('Connection faield!!!');
  });

// ROUTER Here
app.use('/api/quotes', quoteRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});