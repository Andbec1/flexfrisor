import styled from "styled-components"
import { H4 } from "../styles/TextStyles"

const Wrapper = styled.div`
background: white;
display: grid;
grid-template-columns: auto auto;
align-items: center;
padding: 1rem;
`

const Logo = styled.div`

.logo{
  width: 86px;
}
`

const TextWrapper = styled.div`
color: black;
font-size: 1.3em;

.text{
  padding: 0 2rem;
}
`

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <img src="images/logos/logo02_v003.png" className="logo"/>
      </Logo>
      <TextWrapper>
        <text className="text">Frisør</text>
        <text className="text">Mester</text>
        <text className="text">Login</text>
        <text className="text">Opret bruger</text>
        <text className="text">Om os</text>
      </TextWrapper>
    </Wrapper>
  )
}
