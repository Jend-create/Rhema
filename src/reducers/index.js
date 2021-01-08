import { combineReducers } from 'redux';

import posts from './posts';
import userRoute from './userRoute'

 const reducers = combineReducers({ posts, userRoute });
export default reducers;