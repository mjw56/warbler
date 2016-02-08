import { ADD_TWEET } from '../constants/ActionTypes';
import { fromJS } from 'immutable';

const initialState = []

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET:
      return fromJS([
        action.tweet, 
        ...state
      ])

    default:
      return fromJS(state)
  }
}