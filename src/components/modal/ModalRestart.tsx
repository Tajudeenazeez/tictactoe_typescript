import React from 'react'
import './modal.css'
const ModalRestart = () => {
  return (
    <>
        <div className='modal__wrapper'>
            <div className='modal__content'>
              <span className='modal__subtitle modal_subtitle-restart'> restart game?</span>
              <button className='btn btn-primary btn-cancel'>No, cancel</button>
              <button className='btn btn-primary btn-restart'>Yes restart</button>
            </div>

        </div>
    </>
  )
}

export default ModalRestart