import { GET_AUTH } from './types'

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: '',
  access_token: '',
  account_type: '',
  useremail: '',
  login: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        access_token: action.payload.data.authentication.access_token
      }
    default:
      return {
        ...state
      }
  }
}