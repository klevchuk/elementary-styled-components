import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary: boolean
    outlined: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  //background-color: #fb3f78;
  // background-color: ${props => props.color || "#fb3f78"};
  padding: 10px 20px;
  color: snow;
  font-size: ${props => props.fontSize};
  font-weight: bold;

  &:hover {
    background-color: #4053cc;
  }

  
  
`