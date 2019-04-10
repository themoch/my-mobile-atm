import { createStore } from 'redux';
import { myMobileAtm } from './reducers.js';

export const store = createStore(myMobileAtm);

