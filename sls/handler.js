const readSheet = require('./readSheet')
const sendMail = require('./mailTransport')

module.exports.get = (event, context, callback) => {
  const response = values => ({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
    body: JSON.stringify({
      message: 'Got!!',
      values,
      input: event,
    }),
  })

  readSheet(`${event.queryStringParameters.list}!A1:G`, values =>
    callback(null, response(values))
  )
}

module.exports.send = (event, context, callback) => {
  const response = res => ({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    },
    body: JSON.stringify({
      message: 'Got!!',
      input: event.body,
      res,
    }),
  })

  sendMail(JSON.parse(event.body), res => callback(null, response(res)))
}
