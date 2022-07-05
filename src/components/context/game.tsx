import React from 'react';
import reducer,{initialState, StateType, Action } from '../reducer/Reducer';

type GameContextType = {
    game: StateType,
    dispatchActionGame: React.Dispatch<Action>,
}

type GameProviderProps = {
    children: React.ReactNode 
}

export const GameContextWrapper = React.createContext<GameContextType | null>(null)

const GameProviderContext = ({children}: GameProviderProps) => {
    const [game, dispatchActionGame] = React.useReducer(reducer,initialState);
    return (
        <GameContextWrapper.Provider value={{game, dispatchActionGame}}>
            {children}
        </GameContextWrapper.Provider>

    ) 
}

export default GameProviderContext