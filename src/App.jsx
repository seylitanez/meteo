import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Acceuil from './pages/Acceuil'
import { weatherData } from './contextes/WeatherContext'
import ReactGA from 'react-ga';

function App() {
  const[data,setData]=useState({location:{},current:{}})


  useEffect(()=>{
    const script=document.createElement('script')
    script.src ="https://www.googletagmanager.com/gtag/js?id=G-GZ9KKG4WHJ" 
    script.async=true
    document.body.appendChild(script)
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments) };
    gtag('js', new Date());
    gtag('config', 'G-GZ9KKG4WHJ');
  },[])
  ReactGA.initialize('G-GZ9KKG4WHJ');
  ReactGA.pageview('/');

  return (
    <>
      <weatherData.Provider value={{data,setData}}>
        <Acceuil />
      </weatherData.Provider>
    </>
  )
}

export default App
