import styled from 'styled-components';
import { Section } from './StyledComponents';

export const ColorPickerContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectedColorsText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
`;

export const SearchContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CombinedColorContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColorBox = styled.div`
  background-color: ${props => props.color || '#fff'};
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #000;
  margin-bottom: 10px;
`;
