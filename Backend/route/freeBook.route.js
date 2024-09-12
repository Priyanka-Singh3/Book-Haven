import express from 'express'
import {getFreeBook} from '../controller/freebook.controller.js'


const router = express.Router()
router.get('/', getFreeBook)

export default router;