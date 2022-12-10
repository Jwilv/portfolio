import React from 'react'

export const SkillsItem = ({id,desc,img}) => {
  return (
    <div>
        <p>{desc}</p>
        <img src={img} alt={desc}/>
        <span>{id}</span>
    </div>
  )
}
