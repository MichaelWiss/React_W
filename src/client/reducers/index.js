import { combinedReducers } from 'redux';
import usersReducer from './usersReducer';

export default combinedReducers ({
   users: usersReducer
});