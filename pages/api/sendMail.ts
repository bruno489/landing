import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  status: boolean
  message: any
}

export default async function sendMail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { name, email, phone, message } = req.body

    const transporter = nodemailer.createTransport({
      host: 'smtp.umbler.com',
      port: 587,
      secure: true,
      auth: {
        user: process.env.AUTH_MAIL,
        pass: process.env.PASS_MAIL,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    })

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error)
          reject(error)
        } else {
          console.log('Server is ready to take our messages')
          resolve(success)
        }
      })
    })

    const mailOptions = {
      from: 'bguedes563@coopteam.com.br',
      to: 'bguedes563@gmail.com',
      subject: `[CONTATO PELO SITE] - ${name}`,
      text: `Cliente: ${name}
      E-mail: ${email}, Telefone: ${phone}

      ${message}`,
    }

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('FALHA AO ENVIAR O E-MAIL')
          console.error(error)
          reject(error)
          // throw new Error(JSON.stringify(error))
        } else {
          console.log('Email sent: ' + info.response)
          resolve(info)
        }
      })
    })
    return res.status(200).send({ status: true, message: 'OK' })
  } catch (error) {
    console.log(error)
    return res.status(500).send({ status: false, message: error })
  }
}
