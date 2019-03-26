import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function(props){
  return <AppContext.Consumer>
    {({coinList, prices, firstVisit}) => {
      if(!coinList){
        return <div> Loading Coins </div>
      }
      // If not first visit, then show loading indicator - will not load prices on first visit
      if(!firstVisit && !prices){
        return <div> Loading Prices </div>
      }
        return <div> {props.children} </div>
    }}
  </AppContext.Consumer>
}