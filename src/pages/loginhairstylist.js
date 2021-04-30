import RegisterForm from "../components/forms/registerUser"

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

const LoginWrapper = styled.div`
background: #E78413;
width: 40rem;
border-radius: 30px;
margin: 0 auto;
`

const ContentWrapper = styled.div`
padding: 2rem;
`

export default function LoginHairstylist() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Login Frisør</title>
      </Head>
   <TitleWrapper>
    <img src="images/icons/orange/Scissor_orange_v001.svg" className="scissor"/>
    <Title>Frisør</Title>
   </TitleWrapper>
   <LoginWrapper>
<ContentWrapper>
<RegisterForm 
inputColor="#E78413"
/>
</ContentWrapper>
   </LoginWrapper>
    </Wrapper>
  )
}
