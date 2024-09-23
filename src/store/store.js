import { combineReducers, legacy_createStore } from "redux";
import {todoReducer} from './reducer.js';

const rootReducer = combineReducers({
    todo: todoReducer
  });

export const store = legacy_createStore(rootReducer);