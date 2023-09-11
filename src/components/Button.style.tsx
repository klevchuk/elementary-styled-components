import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  //background-color: #fb3f78;
  // background-color: ${props => props.color || "#fb3f78"};
  padding: 10px 20px;
  //color: snow;
  font-size: ${props => props.fontSize || `2rem`};
  font-weight: bold;

  &:hover {
    background-color: #4053cc;
  }

  ${props => props.outlined && css<StyledBtnPropsType>`
border: 2px solid ${props => props.color || "#fb3f78"};
color: ${props => props.color || "#fb3f78"};
background-color: transparent;
    &:hover {
      border-color: #4053cc;
      color: #4053cc;
      background-color: transparent;
    }
    
`}
  
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#fb3f78"};
  `}
`