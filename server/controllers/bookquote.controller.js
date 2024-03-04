import Quote from '../models/quotes.model.js';
import Book from '../models/books.model.js';

// This is use for get all the data from database
export const bookQuoteRoutes = async (req, res) => {
  try {
    const quote = await Quote.find({});
    const book = await Book.find({});

    // Check if any  quote  was found
    if (!quote || !book) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No quotes found' });
    }
    const data = { quote, book };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const bookQuoteIdRoute = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const quote = await Quote.find({ id: parseInt(id) });
    const bookId = quote[0].book_id;
    const book = await Book.find({ book_id: parseInt(bookId) });

    // Check if any  quote  was found
    if (!quote || !book) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No quotes found' });
    }
    const data = { quote, book };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const bookIdQuoteRoute = async (req, res) => {
  try {
    const { book_id } = req.params;
    console.log(id);

    const book = await Book.find({ book_id: parseInt(book_id) });
    const bookId = book[0].id;
    const quote = await Quote.findOne({ id: parseInt(id) });

    // Check if any  quote  was found
    if (!quote || !book) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No quotes found' });
    }
    const data = { quote, book };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const bookQuoteRandomRoute = async (req, res) => {
  try {
    const totalQuates = await Quote.countDocuments();

    // Generate a random index (1 to totalQutes) within the range of the total number of books
    const randomIndex = Math.floor(Math.random() * totalQuates);
    const quote = await Quote.find({ id: parseInt(randomIndex) });
    const bookId = quote[0].book_id;
    const book = await Book.find({ book_id: parseInt(bookId) });

    // Check if any  quote  was found
    if (!quote || !book) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No quotes found' });
    }
    const data = { quote, book };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
