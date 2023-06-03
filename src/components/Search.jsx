import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import './search.scss'
import { getWeather } from '../services/WeatherLocation'
import { weatherData } from '../contextes/WeatherContext'

export default function Search() {

    const {data,setData}= useContext(weatherData)
    
    
    const [ville,setVille]=useState("")

    const [suggestion,setSuggestion]=useState([])



    const [complitions,setComplitions]=useState([])

    const [complit,setComplit]=useState("")


    function handleChoice(e){

        setVille(e.target.innerText)
    }

    function handleKeyPress(e){
         if (e.keyCode===9) {
             setVille(complitions[complitions.length-1])
         }
    }

    function handleSubmit(e){
        setVille("")

        e.preventDefault();
        console.log(ville);
        
        getWeather(ville).then(res=>{
            const {current,location}=res.data
            const {name,region,country,localtime}=location;
            const {humidity,temp_c,condition}=current;
            const {text,icon}=condition
            setData({name,region,country,localtime,humidity,temp_c,text,icon})
        }).catch(
            er=>console.log(er)
        )
        
        console.log(data);
    }

    function handleChange(e){
        setVille(v=>v=e.target.value)
    }
    
    
    useLayoutEffect(()=>{
        console.log("eg");
        setComplitions([])
        fetch("countries.json").then(res=>res.json()).then(res=>setSuggestion(res))
        // setComplit()
        console.log('-----------layout effect');
        console.log(complitions);
        
    },[ville])
    
    useEffect(()=>{
        console.log('-----------effect');
        console.log(complitions);
        // suggestion.forEach(sug=>{
        //     sug.name.toLocaleUpperCase().includes(ville.toLocaleUpperCase()) && setComplitions([sug.name]) 
        // })
        for (let index = 0; index < suggestion.length; index++) {
            if(suggestion[index].name.toLocaleUpperCase().includes(ville.toLocaleUpperCase()) ){
            setComplitions([suggestion[index].name]) 
            break
            }
           
            
        }

        console.log(complitions);
        },[ville])
        
  return (

    <div className='all__search'>
    <form onSubmit={handleSubmit} className='search__container'>
        <input  type="text" onChange={handleChange} placeholder="Search" value={ville} onKeyDown={handleKeyPress}/>
        <button type='submit'>chercher</button>
        <div className='complition'>
        {ville!=""&& complitions[complitions.length-1]!=ville&&complitions[complitions.length-1]}
    </div>
    </form>
    <div className='suggestions'>
        {suggestion.map((sug=>sug.name.toLocaleUpperCase().includes(ville.toLocaleUpperCase())&&ville!=""&&sug.name.toLocaleUpperCase()!==ville.toLocaleUpperCase()?<div onClick={handleChoice}>{sug.name}</div>:null))}
    </div>
    
    </div>
  )
}
