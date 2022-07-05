import React, { Dispatch, useReducer } from "react";

type StateType = {
  board: (null | 'O' | 'x')[];
  xJustPlayed: boolean;
  start: boolean;
}

// type PropsState = {
//   board: string[];
//   status: "start" | "end" | "restart";
//   winner: string | null;
//   turn: string;
//   players: string[];
//   handleClick?: (index: number) => void;
//   handleRestart?: () => void;
//   handleStart?: (players: string[]) => void;
// };

enum ActionKind  {
  START = "start",
  END = "end",
  RESTART = "restart"
}

type Action = {
  type: ActionKind
}

type Reducer<State, Action> = (state: State, action: Action) => State;

// const initialState:StateType  = {
//   board: Array(9).fill(null),
//   status: "start",
//   players: [],
// };

// type GameDispatchProps = {
//   game: PropsState,
//   Dispatch: React.Dispatch<Action>
// }


//reducer function
const reducer = (state:StateType, action: Action) => {
  const { START, END, RESTART } = ActionKind;
  switch (action.type) {
    case START:
      return console.log("play game");
    case END:
      return console.log("winner or tie");
    case RESTART:
      return console.log(state);
    default:
      return state;
  }
};

// function useReducer<R extends Reducer<any, any>>(
//   reducer: R,
//   initialState: ReducerState<R>,
//   initializer?: undefined
// ): [ReducerState<R>, Dispatch<ReducerAction<R>>];

const useTicTacToe = () => {
  // const [game, dispatch] = useReducer(reducer: initialState)
  
  // const handleStart = (players:string[]) => {
  //   dispatch({
  //     type: {ActionKind.Start},
  //     payload: 

  //   })
  // }
 
 
  return;
};

export default useTicTacToe;
