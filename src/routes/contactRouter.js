import express from 'express'
import { ContactController } from '../controllers/contact.controller.js'

export const router = express.Router()

const contactController = new ContactController()

router.get('/', (req, res) => {
  res.render('contact')
})

router.post('/', (req, res) => contactController.postContactPage(req, res))
