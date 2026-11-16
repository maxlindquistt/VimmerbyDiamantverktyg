import nodemailer from 'nodemailer'

const SENDER = 'vimmerbydiamantverktyg@gmail.com'
const RECIPIENT = 'christian.linderson@gmail.com'

export interface ContactMessage {
  name: string
  email: string
  message: string
}

/**
 * Sends a contact form submission to the company inbox.
 *
 * Fire-and-forget, like the old Express controller: this function returns
 * right away and never throws or rejects. A delivery failure (for example a
 * missing `Gmailpass` environment variable) is only logged, so the visitor
 * is still redirected and the server keeps running.
 */
export function sendContactMail ({ name, email, message }: ContactMessage): void {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER,
        // Read at request time (not at build time) from the server environment.
        pass: process.env['Gmailpass']
      }
    })

    transporter
      .sendMail({
        from: SENDER,
        to: RECIPIENT,
        subject: 'New contact form submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
      })
      .then((info) => {
        console.log('Email sent: ' + info.response)
      })
      .catch((error: unknown) => {
        console.log(error)
      })
  } catch (error) {
    console.log(error)
  }
}
