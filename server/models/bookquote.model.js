import mongoose, { Schema } from 'mongoose';

const bookquoteSchema = new mongoose.Schema(
  {
    book: [{ type: Schema.Types.ObjectId, ref: 'all_books' }],
    quote: [{ type: Schema.ObjectId, ref: 'all_quotes' }],
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('bookquote', bookquoteSchema);

export default Book;
