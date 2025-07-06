import nodemailer from 'nodemailer'
/**
 *
 */
export class ContactController {
  /**
   * Handles contact form submissions.
   *
   * @param {object} req - The request object containing the form data.
   * @param {object} res - The response object used to redirect after submission.
   */
  postContactPage (req, res) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vimmerbydiamantverktyg@gmail.com',
        pass: process.env.Gmailpass
      }
    })

    const mailOptions = {
      from: 'vimmerbydiamantverktyg@gmail.com',
      to: 'christian.linderson@gmail.com',
      subject: 'New contact form submission',
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\n\nMessage: ${req.body.message}`
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
    res.redirect('/contact')
  }
}
