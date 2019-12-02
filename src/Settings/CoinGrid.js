import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';

import { SelectableThile } from '../Shared/Thile';
export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;
export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map(coinKey => (
            <SelectableThile>{coinKey}</SelectableThile>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
