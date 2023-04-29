import { Dispatch, SetStateAction } from 'react'

interface IInput {
  setInputValue: Dispatch<SetStateAction<string>>
}

const Input = ({
  setInputValue,
}: IInput) => {

  return (
    <>
      <input type='text' id='textField' name='textField' onChange={(event: any) => { 
        setInputValue(event.target.value)
       }} />
    </>
  )
}

export default Input