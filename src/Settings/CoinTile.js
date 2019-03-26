import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

// Add Coin to Favorites function
function clickCoinHandler(topSection, coinKey, addCoin, removeCoin){
  return topSection ? () => {
    removeCoin(coinKey)
  } : () => {
    addCoin(coinKey)
  }
}

// Display all info of a coin and user sees first favourite coins on top
export default function({coinKey, topSection}){

  return <AppContext.Consumer>
    {({coinList, addCoin, removeCoin, isInFavorites}) =>{
      // Get info from individual coin
      let coin = coinList[coinKey];

      let TileClass = SelectableTile;
      if(topSection){
        TileClass = DeletableTile;
        // Disable adding if in favorites already - makes pointer-events = none and opacity
      } else if(isInFavorites(coinKey)){
          TileClass = DisabledTile;
      }

      
      return <TileClass
        onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
      >
        <CoinHeaderGrid topSection={topSection} 
                        // name={coin.CoinName} 
                        symbol={coin.Symbol}/>
        <CoinImage coin={coin} />
      </TileClass>
    }}
  </AppContext.Consumer>
}