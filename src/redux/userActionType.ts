interface User {
  name: string;
  phone: number;
  password: string;
  confirmPassword: string;
  email: string;
}
export enum ActionType {
  FETCH_USER = "FETCH_USER",
}

interface ActionFetching {
  type: ActionType.FETCH_USER;
  payload: User[];
}
export type Action = ActionFetching;
