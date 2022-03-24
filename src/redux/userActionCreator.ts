import { type } from "os";
import React from "react";
import { Action, ActionType } from "./userActionType";

function userActionCreator({user}) {
  return { type: ActionType.FETCH_USER, payload: user };
}

export default userActionCreator;
