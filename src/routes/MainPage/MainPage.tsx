import { useEffect, useState } from 'react'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'

import './MainPage.scss'

const MainPage = () => {
  const [ alertVisibility, setAlertVisibility ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');

  return (
    <div className='mainContainer'>
      <h1>Duplicate character remover</h1>
      <Input setInputValue={setInputValue} />
      <Button value={inputValue} setAlertVisibility={setAlertVisibility} />
      {alertVisibility && <Modal setAlertVisibility={setAlertVisibility} />}
    </div>
  )
}

export default MainPage