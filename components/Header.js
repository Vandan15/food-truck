import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
const logo = '/img/logo.png';
export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className='container'>
      <div className='header-wrapper'>
        <div className='img-wrapper'>
          <img src={logo} width="200"></img>
        </div>
        <div className='btn-wrapper'>
          <button onClick={() => setShow(true)}>Regsiter</button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-wrapper'>
            <div className='input-wrapper'>
              <input type='text' placeholder='Enter Your Name'></input>
            </div>
            <div className='input-wrapper'>
              <input type='email' placeholder='Enter Your Email'></input>
            </div>
            <div className='input-wrapper'>
              <input type='number' placeholder='Enter Your Phone'></input>
            </div>
            <div className='input-wrapper'>
              <select>
                <option value="Food Truck">Food Truck</option>
                <option value="Band">Band</option>
                <option selected disabled>Select Type</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </button>
          <button variant="primary">Understood</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
