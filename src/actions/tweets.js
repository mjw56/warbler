import * as types from '../constants/ActionTypes'

export function addTweet(tweet) {
  return { type: types.ADD_TWEET, tweet }
}