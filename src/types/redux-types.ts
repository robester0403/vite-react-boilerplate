export interface UpdateUserAction {
  type: "UPDATE_USER";
  payload: {
    name: string;
    email: string;
    age: number;
  };
}
