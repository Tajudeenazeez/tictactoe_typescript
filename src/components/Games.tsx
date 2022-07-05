import React from 'react'
import Square from './Square'

type Props ={
  // index: number
  board: string[],
  handleClick:() =>void,
  // Square: React.ReactComponentElement<typeof Square>
 

}
const Games = (props:Props) => {
  const { board, handleClick} = props
  return (
    <>
    <div>
      {/* {
        board.map((value, index) => {
          <Square key={index} value = {value} handleClick={handleClick} />
        })
      } */}
      
    </div>
    </>
  )
}

export default Games