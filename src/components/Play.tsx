import React, {FormEvent, useMemo, useState } from 'react'

type Props = {
    handleStart: (player:string[]) => void
}
const Play = (props:Props) => {
    const {handleStart} = props

    const [players, setPlayers] = useState<string[]>(['',''])

    const handlePlayerInput = (event:FormEvent<HTMLInputElement>, index:number) => {
        const newPlayers = [...players]
        newPlayers.splice(index, 1, event.currentTarget.value)
        setPlayers(newPlayers)
    }
      
    
    // const readyToPlay = useMemo((players) => {
    //     players.every(player:string => player && player.length > 0),
    //     [players]
    // })
    // }
     const readyToPlay = () => { 
        console.log("ready")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!readyToPlay) return;
        handleStart(players)
    }
  return (
    <>
        <h1>Tic Tac Toe</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='player1'>player 1</label>
                <input type="text"
                 value= {players[0]}
                //  onInput={ (event: FormEvent<HTMLInputElement>, i:number) => {handlePlayerInput(event, i)}}
                />
            <button type="submit" disabled={!readyToPlay}> start</button>
            </div>

        </form>

    </>
  )
}
}
export default Play