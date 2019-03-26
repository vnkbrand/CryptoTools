import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from "../Shared/Styles";
import {AppContext} from "../App/AppProvider";
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
`

const SearchInput = styled.input`
  ${backgroundColor2}
  color: #33658A;
  ${fontSize2}
  border: 1px solid #33658A;
  height: 25px;
  place-self: center left;
  align-self: center;
`

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
  // Get all the coin symbols
  let coinSymbols = Object.keys(coinList);
  // Get all the coin names, map symbol to name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
  });
  setFilterCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList){
  let inputValue = e.target.value;
  // Reset coin grid if no value in input field
  if(!inputValue){
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}


export default function() {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) => 
      <SearchGrid> 
        <h3>Search coins</h3>
        <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/> 
      </SearchGrid>
      }
    </AppContext.Consumer>
  );
}