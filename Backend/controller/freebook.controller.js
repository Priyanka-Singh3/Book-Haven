import Book from "../model/freebook.model.js"

export const getFreeBook = async(rq, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json(error)
    }
}