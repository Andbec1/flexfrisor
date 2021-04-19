import styled from "styled-components"
import { H4 } from "../styles/TextStyles"
import Link from 'next/link'

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

a {
  color: black;
  color: black;
font-size: 1.3em;
padding: 0 2rem;
}
`

export default function Header() {
  return (
    <Wrapper>
      <Logo>
      <Link href="/">
        <img src="images/logos/logo02_v003.png" className="logo"/> 
      </Link>
      </Logo>
      <TextWrapper>
      <Link href="/hairstylist" className="text"><a>Frisør</a></Link>
      <Link href="/saloon" className="text"><a>Mester</a></Link>
        <text className="text">Login</text>
        <text className="text">Opret bruger</text>
      <Link href="/about" className="text"><a>Om os</a></Link>
      </TextWrapper>
    </Wrapper>
  )
}
