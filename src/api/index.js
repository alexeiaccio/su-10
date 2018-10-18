/* global fetch */
import { loadState, saveState } from './localStorage'

const SLS_URL = 'https://3pc83kxpa5.execute-api.us-east-1.amazonaws.com/dev/'

const fetchValues = async location => {
  const values = await fetch(`${SLS_URL}get?list=${location}`, {
    cors: 'no-cors',
  })
    .then(res => res.json())
    .then(json => json.values)
    .then(result => {
      saveState(location, result)
      return result
    })
    .catch(err => err.message)

  return values
}

const sendMail = async message => {
  const values = await fetch(`${SLS_URL}send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
    cors: 'no-cors',
  })
    .then(res => res.json())
    .catch(err => err.message)

  return values
}

const getValues = location => loadState(location) || fetchValues(location)

export { getValues, sendMail }
