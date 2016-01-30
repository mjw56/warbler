import { combineReducers } from 'redux';
import tweets from './tweets';

const rootReducer = combineReducers({
  tweets
});

export default rootReducer;