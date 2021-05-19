import styled from "styled-components"
import Head from 'next/head'
import { H3, BodyIntro } from "../components/styles/TextStyles"

const Wrapper = styled.div` 
 background: #F1E579;
 padding: 0 2rem;
`

const TitleWrapper = styled.div`
padding-top: 5rem;
display: grid;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
`

const Title = styled(H3)`
color: #E78413;
font-weight: normal;
`

const ContentWrapper = styled.div`
padding: 5rem;
background: #fff;
border-radius: 30px;
max-width: 40rem;
display: grid;
align-items: center;
justify-items: center;
margin: 0 auto;
grid-gap: 1rem;
`

const ContentTitle = styled(H3)`
text-align: center;
color: #E78413;
font-weight: normal;
`

const ContentText = styled(BodyIntro)`
text-align: center;
color: #000;
font-weight: normal;
max-width: 30rem;
`

export default function RegisterHairstylistStep01() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Opret Frisør</title>
      </Head>
   <TitleWrapper>
    <Title>Opret profil - Step 4 af 4</Title>
   </TitleWrapper>
<ContentWrapper>
    <ContentTitle>
    Afventer profilgodkendelse
    </ContentTitle>
    <ContentText>
    Tak for din ansøgning. Du hører fra os inden for 24 timer. Hvis du har brug for hurtig godkendelse kan du med fordel ringe til tlf. 70242470.
    </ContentText>
</ContentWrapper>
    </Wrapper>
  )
}
