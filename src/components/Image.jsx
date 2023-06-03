import React from 'react'

export default function Image({className, icon}) {
  return (
    <img className={className} width={100} src={icon}/>
  )
}
