
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
 // eslint-disable-next-line
export default (userRoute = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...userRoute, action.payload];
    case UPDATE:
      return userRoute.map((User) => (User._id === action.payload._id ? action.payload : User));
    case DELETE:
      return userRoute.filter((User) => User._id !== action.payload);
    default:
      return userRoute;
  }
};