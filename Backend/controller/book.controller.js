import Book from "../model/book.model.js"

export const getBook = async(rq, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json(error)
    }
}

// export const deleteBook = async (req, res) => {
//     try {
//       const { id } = req.params; // Get the book ID from the request params
//       await Book.findByIdAndDelete(id); // Find and delete the book by its ID
//       res.status(200).json({ message: "Book deleted successfully" });
//     } catch (error) {
//       console.error("Error: ", error);
//       res.status(500).json({ message: "Failed to delete book" });
//     }
// };
export const deleteBook = async (req, res) => {
    const { id } = req.params; // Get the book ID from the request parameters
    try {
      const deletedBook = await Book.findByIdAndDelete(id); // Find and delete the book by its ID
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting book', error });
    }
  };

