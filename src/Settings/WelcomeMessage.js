import React from 'react';
import {AppContext} from "../App/AppProvider";

// If 1st visit, then return Div. If not, return null
export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) => 
        firstVisit ? <div>
          Welcome to CryptoTools, please select your coins to begin.{' '}
        </div> : null
    }
    </AppContext.Consumer>
  );
};