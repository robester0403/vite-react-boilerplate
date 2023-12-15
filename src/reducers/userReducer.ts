import { UserState } from "../types/redux-types";
import { UpdateUserAction } from "../types/redux-types";

const initialState: UserState = {
  name: "",
  email: "",
  age: 0,
};

const userReducer = (
  state: UserState = initialState,
  action: UpdateUserAction
): UserState => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
      };
    default:
      return state;
  }
};

export default userReducer;
