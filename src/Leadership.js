import {React, useState, useEffect} from 'react';
import axios from 'axios';
import { StyledLeadershipContainer, StyledLeadershipHeadline, StyledLeadershipLink, StyledLeadershipLinksContainer } from './styles/Leadership.style';
import  Leader  from './Leader.js';

//build fetch function 
const leadershipUrl='https://beamtech.github.io/responsive-web-app-kata/leadership-team.json'
export default function Leadership() {
  const [leaders,setLeaders]=useState([])
  useEffect(() => {
    axios.get(leadershipUrl)
        .then(res => {
          setLeaders(res.data)
        })
        .catch(err=>console.log(err))
},[]);
  return (
    <StyledLeadershipContainer>
      <StyledLeadershipHeadline data-testid='leadership-headline-test-id'>
        Our Leadership Team 
      </StyledLeadershipHeadline>
      <div>────────</div>
      <StyledLeadershipLinksContainer>
        {leaders.length>1 ? leaders.map((leader)=>{
        return <Leader img={leader.image} name={leader.name} title={leader.title} url={leader.title}/>
        }):<div>Leaders loading</div>}
      </StyledLeadershipLinksContainer>
    </StyledLeadershipContainer>
  )
}
