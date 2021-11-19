import { combineReducers } from 'redux';

import posts from './posts';
import blogs from './blogs';

export const reducers = combineReducers({ posts , blogs });
