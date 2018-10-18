/* eslint-disable */
const nodemailer = require('nodemailer')

const makeMessage = obj => {
  const keys = Object.keys(obj)
  return keys
    .reduce((acc, key) => {
      return acc.concat(`<p>${key}: <strong>${obj[key]}</strong></p>`)
    }, [])
    .join('')
}

const sendMail = (options, callback) => {
  const transporter = nodemailer.createTransport(
    {
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'info@su-10.ru',
        pass: '4MvVLX_D',
      },
      tls: {
        rejectUnauthorized: false,
      },
      logger: false,
      debug: false,
    },
    {
      from: 'СУ-10 <info@su-10.ru>',
    }
  )

  const message = {
    to: 'СУ-10 <info@su-10.ru>',
    subject: 'Заявка с сайта www.su-10.ru',
    text: 'Hello to myself!',
    html: makeMessage(options),
  }

  transporter.sendMail(message, (error, info) => {
    const res = []
    res.push(info)
    if (error) {
      res.push(`Ошибка: ${error.message}`)
      return process.exit(1)
    }
    res.push('Спасибо! Ваша заявка принята!')
    return callback(res)
  })
}

module.exports = sendMail
