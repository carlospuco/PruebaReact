import React, { FC } from 'react'
import './button.scss'
import { Submit } from '../../molecules/submit';

interface ButtonProps{
    type?: 'submit',
    gifList: string[],
    setGifList: React.Dispatch<React.SetStateAction<string[]>>,
    url: string,
}

  export const Button = ({type, gifList, setGifList, url}: ButtonProps) => {

    const handleSubmit = (e : React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setGifList(gifList.concat(url));
    }

    return (
      <button className='button' type={type} onClick={e => handleSubmit(e)}>Agregar</button>
    )
}
