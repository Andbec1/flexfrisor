import styled from "styled-components"
import Head from 'next/head'
import { H1, BodyMain } from "../components/styles/TextStyles"
import Link from 'next/link'
import RegisterForm from "../components/forms/registerUser"

const Wrapper = styled.div` 
 background: #F1E579;
`

const TitleWrapper = styled.div`
padding-top: 5rem;
display: grid;
grid-template-columns: 7rem auto;
justify-content: center;
align-items: center;
margin-bottom: 2rem;

.scissor {
    width: 6rem;
    height: 6rem;
}
`

const Title = styled(H1)`
color: #E4B603;
font-weight: normal;
`

const LoginWrapper = styled.div`
background: #E4B603;
width: 40rem;
border-radius: 30px;
margin: 0 auto;
`

const ContentWrapper = styled.div`
padding: 2rem;
`

export default function LoginSaloon() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Login Mester</title>
      </Head>
   <TitleWrapper>
    <img src="images/icons/Saloon_v001.svg" className="scissor"/>
    <Title>Mester</Title>
   </TitleWrapper>
   <LoginWrapper>
<ContentWrapper>
<RegisterForm 
inputColor="#E4B603"
/>
</ContentWrapper>
   </LoginWrapper>
    </Wrapper>
  )
}

