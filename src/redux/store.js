import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';

import rootSaga from './saga/saga';

//  формирование хранилища в стор

const tempStore = { pokemons: [], searchPokemons: [], ability: {} };

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  tempStore,
  composeWithDevTools(applyMiddleware(thunk, logger, sagaMiddleware)),
);

//  запуск саги
sagaMiddleware.run(rootSaga);

export default store;
