import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
  margin-bottom: 20px;
  place-self: left;
  color: #33658A;
`

// CSS Grid
const Bar = styled.div`
  display: inline-grid;  
  margin-bottom: 40px; 
  grid-template-columns: 1fr 1fr;
  place-self: center right;
  color: #ee3c3d;
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    font-weight: 300;
  `}
`

function toProperCase(lower){
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}){
  return (
  <AppContext.Consumer>
    {/* Pulling page from state from object and determine what page is active! */}
    {({page, setPage}) => (
    <ControlButtonElem active={page === name}
      onClick={()=> setPage(name)}
    >
      {toProperCase(name)}
    </ControlButtonElem>
  )}
  </AppContext.Consumer>
  )
}

export default function() {
  return (
    <Bar> 
      <Logo> CryptoTools </Logo>
      <div />
      <ControlButton active name="dashboard"/>
      <ControlButton name="settings"/>
    </Bar>
  )
}