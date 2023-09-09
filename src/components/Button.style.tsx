import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #d91495;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #4053cc;
  }

  &:last-child {
    background-color: chartreuse;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffd737;
  color: #250707;

&:hover {
  animation: ${MyAnimation} 2s ease-in-out infinite;
}
`