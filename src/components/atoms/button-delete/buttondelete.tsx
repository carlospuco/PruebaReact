import React, { FC } from 'react'
import './buttondelete.scss'
import { Submit } from '../../molecules/submit';

interface ButtonProps{
  type?: 'string',
  gifList: string[],
  setGifList: React.Dispatch<React.SetStateAction<string[]>>,
  url: string,
}

export const ButtonDelete = ({url, type, gifList}:ButtonProps) => {

    const handleSubmit = (e : React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    
  }

      return (
        <button className='buttondelete' >Eliminar</button>
      )
  }
  

