import React from 'react';
import reducer,{initialState, StateType, ActionKind } from '../reducer/Reducer';

export type GameContextType = {
    game: StateType,
    dispatchActionGame: React.Dispatch<ActionKind>,
}

export type GameProviderProps = {
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