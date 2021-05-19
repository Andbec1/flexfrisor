import styled from "styled-components"
import Head from 'next/head'
import RegisterHairstylistForm from "../components/forms/registerHairstylistForm"
import { H1 } from "../components/styles/TextStyles"

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
color: #E78413;
font-weight: normal;
`

const RegisterWrapper = styled.div`
background: #E78413;
width: 40rem;
border-radius: 30px;
margin: 0 auto;
`

const ContentWrapper = styled.div`
padding: 2rem;
`

export default function RegisterHairstylist() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Opret Frisør</title>
      </Head>
   <TitleWrapper>
    <img src="images/icons/orange/Scissor_orange_v001.svg" className="scissor"/>
    <Title>Frisør</Title>
   </TitleWrapper>
   <RegisterWrapper>
<ContentWrapper>
<RegisterHairstylistForm
inputColor="#E78413"
/>
</ContentWrapper>
   </RegisterWrapper>
    </Wrapper>
  )
}
