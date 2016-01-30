import { ADD_TWEET } from '../constants/ActionTypes'

const initialState = []

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET:
      return [
        {
          tweet: action.tweet
        }, 
        ...state
      ]

    default:
      return state
  }
}