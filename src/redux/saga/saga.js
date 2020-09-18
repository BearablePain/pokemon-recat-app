import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getInfoTypesAbility } from '../action';
import { START_FETCH_ABILITY } from '../actionTypes';

const fetchAbility = async (url) => {
  const responce = await fetch(url);
  const result = await responce.json();
  console.log(result.effect_entries[0].effect);
  return result;
};

// создаем воркер, который делает запрос по функции прописанной выше и запускает экшен, который положит информацию в редакс
function* loadInfoAbility(action) {
  // вызываем фетч передавая аргументы через call саги
  const data = yield call(fetchAbility, action.url);
  // кладем экшен в наш редьюсер, который изменяет наш стейт
  yield put(getInfoTypesAbility(data));
}

// создаем слушателя экшенов, который принимает все экшены которые происходят

function* actionWatcher() {
  yield takeLatest(START_FETCH_ABILITY, loadInfoAbility);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
