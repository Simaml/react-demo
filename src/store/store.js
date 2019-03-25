import { createStore } from 'redux';

import rootReducer from '../reducers/reducer';

const store = createStore(rootReducer);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

unsubscribe();
export { store };
