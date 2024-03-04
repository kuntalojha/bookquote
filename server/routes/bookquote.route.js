import express from 'express';
import {
  bookQuoteRoutes,
  bookQuoteIdRoute,
  bookIdQuoteRoute,
  bookQuoteRandomRoute,
} from '../controllers/bookquote.controller.js';

const router = express.Router();

// get random book from database using book_id
router.get('/', bookQuoteRoutes);
router.get('/:id', bookQuoteIdRoute);
router.get('/:id', bookIdQuoteRoute);
router.get('/random', bookQuoteRandomRoute);

export default router;
