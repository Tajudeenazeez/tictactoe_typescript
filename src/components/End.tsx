import React from 'react'

type Props = {
  player: string,
  handleRestart:()=>void
}
const End = (props:Props) => {
  const { player, handleRestart } = props
  return (
    <>
    {
      player &&  `Player ${player} won the game`
    }

    {
      !player && "its a tie"
    }
    <button type="submit">
      restart
    </button>

    </>
  )
}

export default End