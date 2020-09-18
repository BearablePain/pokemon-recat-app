import { reducer } from  './reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/saga';

const tempStore = { pokemons: [], searchPokemons: [], ability: {}, };
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducer,
  tempStore,
  composeWithDevTools(applyMiddleware(thunk, logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);


export default store;
