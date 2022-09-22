import React from 'react'
import { StyledLeadershipLink } from './styles/Leader.style'

export default function Leader(props) {
    // console.log(props)
  return (
    <StyledLeadershipLink>
        <img src={props.img} alt={props.name}></img>
        <h3>{props.name}</h3>
          <h4>{props.title}</h4>
    </StyledLeadershipLink>
  )
}

