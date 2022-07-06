import React, { Dispatch, useReducer } from "react";

export type StateType = {
  board: (null | 'O' | 'X')[];
  xJustPlayed: boolean;
  start: boolean;
}

// export enum ActionKind  { 
//   RESTART = "restart",
//   REFRESH = 'refresh',
//   START = "start",
//   CHOOSE = "choose",
// }

export type  ActionPlay = {
  type: "PLAY",
  index: number,
}
export type  ActionStart ={
  type: "START"
}
export type ActionChoose = {
  type: "CHOOSE",
}
export type ActionRestart = {
  type: "RESTART",
}
export type ActionRefresh = {
  type: "REFRESH"
}
 export type ActionKind = ActionPlay | ActionRestart | ActionRefresh | ActionChoose


export const initialState:StateType  = {
  board: Array(9).fill(null),
  start: false,
  xJustPlayed: false,
};



//reducer function
const reducer = (state:StateType, action: ActionKind) => {
  switch (action.type) {
    case "PLAY":
      const boardIndex = action.index
      const boards = state.board.slice()
      boards[boardIndex] = state.xJustPlayed ? "X":"O"   
      return {
        ...state,
        boards,
        xJustPlayed: !state.xJustPlayed
      }
    case "RESTART":
      return {
        ...state,
        start: true
      }
    case "CHOOSE":
      return {
        ...state,
        xJustPlayed: !state.xJustPlayed
      }
    case "RESTART":
      return {
        ...state,
        board: Array(9).fill(null),
        start: true,
        xJustPlayed: false,
      }
      case "REFRESH":
        return {
          initialState
        }
    default:
      return state;
  }
};
export default reducer