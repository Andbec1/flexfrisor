import styled from "styled-components"
import Head from 'next/head'
import RegisterHairStylistStepTwoForm from "../components/forms/registerHairstylistStepTwoForm"
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

const ContentWrapper = styled.div`
padding: 0 2rem;
`

export default function RegisterHairstylistStepTwo() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Opret Frisør</title>
      </Head>
   <TitleWrapper>
    <Title>Opret profil - Step 2 af 4</Title>
   </TitleWrapper>
<ContentWrapper>
<RegisterHairStylistStepTwoForm 
inputColor="#E78413"
borderColor="#E78413"
/>
</ContentWrapper>
    </Wrapper>
  )
}
