import React from 'react'
import { System, Galaxy } from '../components';
import { SYSTEM, COLOR } from '../constants';

export default function App ()
{
  return (
    <div className='App'>

      <Galaxy color={ COLOR } elements={ SYSTEM }>

        <System elements={ SYSTEM } />

      </Galaxy>

    </div>
  )
}