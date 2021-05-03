import styled from "styled-components"
import Head from 'next/head'
import RegisterHairStylistStep01Form from "../components/forms/registerHairStylistStep01Form"
import { H3 } from "../components/styles/TextStyles"

const Wrapper = styled.div` 
 background: #F1E579;
`

const TitleWrapper = styled.div`
padding-top: 5rem;
display: grid;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
}
`

const Title = styled(H3)`
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

export default function RegisterHairstylistStep01() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Opret Frisør</title>
      </Head>
   <TitleWrapper>
    <Title>Opret profil - Step 1 af 4</Title>
   </TitleWrapper>
   <RegisterWrapper>
<ContentWrapper>
<RegisterHairStylistStep01Form 
inputColor="#E78413"
/>
</ContentWrapper>
   </RegisterWrapper>
    </Wrapper>
  )
}
