
import  { Axios } from "./CallerServices"

const getWeather=(name)=>{

    return Axios.get("current.json?key=e76258306d4b4f81b41170033230206&q="+name)
}

export {getWeather}