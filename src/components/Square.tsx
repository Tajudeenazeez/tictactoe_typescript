import React from 'react'
type Props = {
  index: number,
  value: number,
  handleClick:(index:number)=>void
}
const Square = (props: Props) => {
  const {index, value, handleClick} = props
  return (
    <>
    <button onClick={() => handleClick(index)}>
      {value}
    </button>

      
    </>
  )
}

export default Square