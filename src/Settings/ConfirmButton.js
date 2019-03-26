// Confirm settings from user's local storage
import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import {fontSize3, greenBoxShadow, color3} from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3}
  ${fontSize3}
  padding: 7px;
  cursor: pointer;
    &:hover {
      ${greenBoxShadow}
    }
`


export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function () {
  return <AppContext.Consumer>
      {({confirmFavorites}) => 
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favourites
          </ConfirmButtonStyled>
        </CenterDiv>
      }
    </AppContext.Consumer>;
}