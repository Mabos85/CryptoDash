import styled from 'styled-components';

import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from '../Shared/Styles';

export const Thile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding:10px;
`;

export const SelectableThile = styled(Thile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
