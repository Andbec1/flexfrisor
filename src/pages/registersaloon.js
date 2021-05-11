import styled from "styled-components"
import Head from 'next/head'
import { H1, BodyMain } from "../components/styles/TextStyles"
import Link from 'next/link'
import registerSaloonForm from "../components/forms/registerSaloonForm"

const Wrapper = styled.div` 
 background: #F1E579;
`

const TitleWrapper = styled.div`
padding-top: 5rem;
display: grid;
grid-template-columns: 8rem auto;
justify-content: center;
align-items: center;
margin-bottom: 2rem;

.scissor {
    width: 8rem;
    height: 8rem;
}
`

const Title = styled(H1)`
color: #E4B603;
font-weight: normal;
`

const RegisterWrapper = styled.div`
background: #E4B603;
width: 40rem;
border-radius: 30px;
margin: 0 auto;
`

const ContentWrapper = styled.div`
padding: 2rem;
`

export default function RegisterSaloon() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Opret Mester</title>
      </Head>
   <TitleWrapper>
    <img src="images/icons/gold/barberPole_gold_v001.svg" className="scissor"/>
    <Title>Mester</Title>
   </TitleWrapper>
   <RegisterWrapper>
<ContentWrapper>
<registerSaloonForm 
inputColor="#E4B603"
/>
</ContentWrapper>
   </RegisterWrapper>
    </Wrapper>
  )
}

