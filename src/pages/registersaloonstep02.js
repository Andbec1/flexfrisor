import styled from "styled-components"
import Head from 'next/head'
import { H3 } from "../components/styles/TextStyles"
import RegisterSaloonStep02Form from "../components/forms/registerSaloonStep02Form"

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
color: #E4B603;
font-weight: normal;
`

const ContentWrapper = styled.div`
padding: 0 2rem;
`

export default function RegisterSaloonStep02() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Opret Mester</title>
      </Head>
   <TitleWrapper>
    <Title>Opret profil - Step 2 af 3</Title>
   </TitleWrapper>
<ContentWrapper>
    <RegisterSaloonStep02Form 
    inputColor="#E4B603"
    />
</ContentWrapper>
    </Wrapper>
  )
}
