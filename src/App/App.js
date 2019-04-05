import React from 'react'
import { System, Galaxy } from '../components';
import { SYSTEM } from '../constants';

export default function App ()
{
  return (
    <div className='App'>

      <Galaxy color={ '555555' } elements={ SYSTEM }>

        <System elements={ SYSTEM } />

      </Galaxy>

    </div>
  )
}