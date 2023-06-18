import React from 'react'

function Modal() {
  return (
    <div className='modalBackground'>
        <div className="modalContainer">
            <button className="modalCloseBtn">X</button>
            <div className="modalTitle">
                <h1>Are you Sure?</h1>
            </div>
            <div className="modalBody">
                <p>Are you sure want to logout from travelMate?</p>
            </div>
            <div className="modalFooter">
                <button>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
