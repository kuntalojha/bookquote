import express from 'express';
import aggregateCollections from '../controllers/bookquote.controller.js';

const router = express.Router();

// get random book from database using book_id
// router.get('/', bookQuoteRoute);
router.get('/', aggregateCollections);
// router.get('/:id', bookIdQuoteRoute);
// router.get('/random', bookQuoteRandomRoute);

export default router;
