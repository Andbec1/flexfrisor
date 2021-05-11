import styled from "styled-components"
import Head from 'next/head'
import { H1 } from "../components/styles/TextStyles"
import LoginForm from "../components/forms/loginForm"

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

export default function Login() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Log ind</title>
      </Head>
   <TitleWrapper>
    <img src="images/logos/logo02_v003.png" className="logo"/>
   </TitleWrapper>
   <RegisterWrapper>
<ContentWrapper>
  <LoginForm 
  inputColor="#E78413"
  />
</ContentWrapper>
   </RegisterWrapper>
    </Wrapper>
  )
}
