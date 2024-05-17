import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 49%;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`