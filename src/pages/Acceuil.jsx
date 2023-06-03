import React from 'react'
import Card from '../components/Card'
import Search from '../components/Search'
import './acceuil.scss'

export default function Acceuil() {
  return (
    <div className='acceuil'>
        <img width={'200px'} height={'200px'} src="public/sun.svg" />
        <Search/>
        <Card />
    </div>
  )
}
