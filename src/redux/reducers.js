import { types } from './types'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RESULTS:
      return { ...state, results: action.results, isLoaded: true }
    case types.START_SEARCH:
      return { ...state, results: [], isLoaded: false }
    case types.CLEAR_ALL:
      return { ...state, results: [], isLoaded: false, searchText: '' }
    default:
      return { ...state }
  }
}

export default reducer
