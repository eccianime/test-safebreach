import { types } from './types'

export const getContacts = value => dispatch => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  dispatch({ type: types.START_SEARCH })
  fetch('contacts.json', { headers })
    .then(response => response.json())
    .then(json => {
      const contacts = json
      const treatedValue = value.split(' ')
      const results = []
      contacts.forEach(element => {
        let matches = 0
        treatedValue.forEach(value => {
          const conditionA = element.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          const conditionB = new Date().getFullYear() - parseInt(element.birthday.replace(' ', '').substring(0, 4)) === parseInt(value)
          const conditionC = element.phone_number.replace(/[()\s]/g, '') === value
          // const conditionD = element.address.toLowerCase().indexOf(value.toLowerCase()) > -1
          if (conditionA || conditionB || conditionC) matches++
        })
        if (matches === treatedValue.length) {
          const age = new Date().getFullYear() - parseInt(element.birthday.replace(' ', '').substring(0, 4))
          results.push({ ...element, age })
        }
      })
      dispatch({ type: types.SET_RESULTS, results })
    })
}
