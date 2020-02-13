import { createStore } from 'redux';
import rootReducer from './Reducer';

let store = createStore(rootReducer);
export default store;