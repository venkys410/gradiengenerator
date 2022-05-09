// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 10px;
  margin-left: 10px;
`
export const DirectionButton = styled.button`
  background-color: #ffffff;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: 'Roboto';
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  opacity: ${props => (props.activeBtn ? 1 : 0.5)};
  font-weight: 500;
`
