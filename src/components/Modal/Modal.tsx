import { Dispatch, SetStateAction } from 'react';

import './Modal.scss';


interface IModal {
  setAlertVisibility: Dispatch<SetStateAction<boolean>>,
}

const Modal = ({
  setAlertVisibility
}: IModal) => {
  return (
    <div className='backdrop'>
      <dialog>
        <label>Value can not be empty</label>
        <button onClick={() => setAlertVisibility(false)}>Ok</button>
      </dialog>
    </div>
  )
}

export default Modal