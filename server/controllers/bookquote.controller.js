import Quote from '../models/quotes.model.js';
import Book from '../models/books.model.js';

// This is use for get all the data from database
export const getBookQuote = async (req, res) => {
  try {
    const quote = await Quote.find({});
    const book = await Book.find({});

    // Check if any  quote  was found
    if (!quote || !book) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No quotes found' });
    }
    res.status(200).json(quote, book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
