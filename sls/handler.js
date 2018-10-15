const readSheet = require('./readSheet')

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
