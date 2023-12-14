import { UserState } from "../types/redux-types";
import { UpdateUserAction } from "../types/redux-types";

const initialState: UserState = {
  name: "",
  email: "",
  age: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
