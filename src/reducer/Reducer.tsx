import React, { Dispatch, useReducer } from "react";

export type StateType = {
  board: (null | 'O' | 'X')[];
  xJustPlayed: boolean;
  start: boolean;
}

export enum ActionKind  {
  PLAY = "play",
  START = "start",
  CHOOSE = "choose",
  RESTART = "restart"
}

export type Action = {
  type: ActionKind,
  index: number
}


export const initialState:StateType  = {
  board: Array(9).fill(null),
  start: false,
  xJustPlayed: false,
};



//reducer function
const reducer = (state:StateType, action: Action) => {
  const { START, CHOOSE, RESTART, PLAY } = ActionKind;
  switch (action.type) {
    case PLAY:
      const boardIndex = action.index
      const boards = state.board.slice()
      boards[boardIndex] = state.xJustPlayed ? "X":"O"   
      return {
        ...state,
        type: START,
        xJustPlayed: !state.xJustPlayed
      }
      case START:
      return {
        ...state,
        start: true
      }
    case CHOOSE:
      return {
        ...state,
        xJustPlayed: !state.xJustPlayed
      }
    case RESTART:
      return {
        ...state,
        board: Array(9).fill(null),
        start: true,
        xJustPlayed: false,
      }
    default:
      return state;
  }
};
export default reducer