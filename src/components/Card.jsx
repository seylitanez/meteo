import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { weatherData } from '../contextes/WeatherContext'
import './card.scss'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {FaTemperatureLow,FaFlag} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'
import {GrMapLocation} from 'react-icons/gr'
import Image from './image'

export default function Card() {

    const {data} =useContext(weatherData)
    const [image,setImage]=useState()

    console.log(data);


    useLayoutEffect(()=>{
        setImage()
        console.log("change");
    },[data])
    
    useEffect(()=>{
        setImage(<img className='icone' width={100} src={data.icon} />)

    },[data])
  return (
    <div className='card__container'>
        <div className='card__container__front'>
            <img className='texture' src='public/texture.jpg' alt="" />
            {data.icon? image:<TiWeatherPartlySunny size={'100px'} />}
            {
                <div className='temp'>
                    <FaTemperatureLow className='temp__icon' size={'40px'}/>
                    {data.temp_c?<h1 >{data.temp_c} °C</h1>:<h1>00 °C</h1>}
                </div>
            }
            <div className='divider'>
            <div className='divider__inside'></div>
            </div>
            <div className='ville'>
            <ImLocation />
            {data.name?<h4 >{data.name}</h4>:<h2>ville</h2>}
            </div>

            <div className='pays'>
                <FaFlag color='white'/>
                {data.country?<h3 >{data.country}</h3>:<h2>pays</h2>}
            </div>
        </div>
        <div className='card__container__back'>
                {data.humidity&& <h2>humidity :{data.humidity}</h2>}
            {data.localtime&& <h2> date :{data.localtime}</h2>}
            {data.text&& <h2>{data.text}</h2>}

        </div>
    </div>
  )
}
