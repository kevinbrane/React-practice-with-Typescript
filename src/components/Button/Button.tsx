import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from "react-router-dom";

interface IButton {
  setAlertVisibility: Dispatch<SetStateAction<boolean>>,
  value: string
}

const Button = ({
  setAlertVisibility,
  value
}: IButton) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const noSpaceValue = value.trim();

    if (noSpaceValue.length === 0) {
      setAlertVisibility(true);
    } else {
      setAlertVisibility(false);
      // localhost:3000/validations/?value=marutica
      navigate({
        pathname: '/validation',
        search: `?value=${value}`
      });
    }
  }

  return (
    <button onClick={handleClick}>Submit</button>
  )
}

export default Button