import React from 'react';
import './App.css';
import styled from "styled-components";
import {Link} from "./components/Link.styled";
import {StyledBtn} from "./components/Button.style";

function App() {
    return (
        <div className="App">
            <Box>
                {/*<StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={"red"}>Hello</StyledBtn>*/}
                {/*<StyledBtn fontSize={"30px"}>Hello</StyledBtn>*/}

                <StyledBtn primary>Hello</StyledBtn>
                <StyledBtn outlined>Hello</StyledBtn>
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
