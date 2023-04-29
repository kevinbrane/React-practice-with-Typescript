import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaRegTimesCircle } from 'react-icons/fa'

import './Validation.scss'

const Validation = () => {
  const navigate = useNavigate();
  const [ characters, setCharacters ] = useState<Array<string>>(['']);
  const [ validString, setValidString ] = useState<boolean>(false);
  const [ charColors, setCharColors ] = useState<Object>({});
  const [ searchParams ] = useSearchParams();

  const value = searchParams.get('value');

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const assignColor = (characters: Array<string>) => {
    type Color = {[key: string] : string}
    const colors: Color = {};
    characters.forEach((char: string) => {
      if (!(char in colors)) {
        colors[char] = getRandomColor();
      }
    })
    return colors;
  }

  const removeDuplicate = (char: string, charIndex: number) => {
    const newString = characters.filter((item: string, index: number) => {
      return item !== char || index === charIndex
    })
    setCharacters(newString)
  }

  const duplicateExists = () => {
    return characters.some((item: string, index: number, array: string[]) => array.indexOf(item) !== index)
  }

  useEffect(() => {
    const charactersArray = Array.from(value || '');
    setCharacters(charactersArray);
    setCharColors(assignColor(charactersArray))
  }, []);

  useEffect(() => {
    setValidString(!duplicateExists())
  }, [ characters ])

  return (
    <div className='validationContainer'>
      {validString && <div className='successHeader'>Each caracter was successfully deleted</div>}
      <label> <span>Original string: </span>{value}</label>
      <label> <span>Resultant string: </span>{characters.join('')}</label>
      <div className='cardsContainer'>
        {characters.map((char: string, index: number) => {
          const colorKey = char as keyof typeof charColors;
          return ( 
          <div className='card' key={index} style={{ backgroundColor: `${charColors[colorKey]}` }}>
            <FaRegTimesCircle className='closeCircle' size='10' onClick={() => removeDuplicate(char, index)} />
            <span>{char}</span>
          </div>
        )})}
      </div>
      <FaArrowAltCircleLeft className='backArrow' size='30' onClick={() => navigate('/')} />
    </div> 
  )
}

export default Validation