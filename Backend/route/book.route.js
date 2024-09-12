import express from 'express'
import {deleteBook, getBook} from '../controller/book.controller.js'


const router = express.Router()
router.get('/', getBook)
router.delete('/:id', deleteBook); 


export default router;