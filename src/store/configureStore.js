import { 
  applyMiddleware, 
  createStore, 
  combineReducers, 
  compose 
} from 'redux';
import { browserHistory } from 'react-router';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
  const store = createStore(
    reducers, 
    initialState,
    compose(
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}