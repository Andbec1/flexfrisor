import styled from "styled-components"
import Head from 'next/head'
import { H2, BodyMain } from "../components/styles/TextStyles"
import RegisterCard from "../components/cards/registerCard"

const Wrapper = styled.div` 
 background: #F1E579;
`

const Fill = styled.div`
width: 50rem;
margin: 0 auto;
padding-bottom: 5rem;
 padding-top: 5rem;
`

const Logo = styled.div`
display: grid;
justify-content: center;

.logo{
    width: 15rem;
}
`

const CardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
justify-content: center;
align-items: center;
`

export default function Register() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Opret</title>
      </Head>
      <Fill>
      <Logo>
          <img src="images/logos/logo02_v003.png" className="logo"/>
      </Logo>
      <CardWrapper>
        <RegisterCard 
        iconImage="images/icons/white/Scissor_white_v001.svg"
        text="Frisør"
        link="/registerhairstylist"
        backgroundColor="#E78413"
        />
        <RegisterCard
        iconImage="images/icons/white/barberPole_white_v001.svg"
        text="Mester"
        link="/registersaloon"
        backgroundColor="#E4B603"
        />
      </CardWrapper>
      </Fill>
    </Wrapper>
  )
}
