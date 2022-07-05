import React from 'react'
import './modal.css'
const Modal = () => {
  return (
    <>
        <div className='modal__wrapper'>
            <div className='modal__content'>
              <h4 className='modal__title'>Player 1 wins</h4>
              <span><strong>&#9900;</strong></span>
              <span className='modal__subtitle'> takes the round</span>
              <button className='btn btn-primary btn-quit'>quit</button>
              <button className='btn btn-primary btn-next'>Next round</button>
            </div>

        </div>
    </>
  )
}

export default Modal