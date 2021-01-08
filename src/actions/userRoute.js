import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getUserDetails = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUserDetails();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (User) => async (dispatch) => {
  try {
    const { data } = await api.createUser(User);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUserDetails = (id, User) => async (dispatch) => {
  try {
    const { data } = await api.updateUserDetails(id, User);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUserDetails = (id) => async (dispatch) => {
  try {
    await await api.deleteUserDetails(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
