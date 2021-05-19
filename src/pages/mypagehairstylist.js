import styled from "styled-components"
import Head from 'next/head'
import { H1, BodyMain } from "../components/styles/TextStyles"
import LoginForm from "../components/forms/loginForm"
import JobProfileHairstylist from "../components/sections/jobProfileHairstylist"

const Wrapper = styled.div` 
 background: #F1E579;
`

const Title = styled(H1)`
font-weight: normal;
`

const Subtitle = styled(BodyMain)`
font-weight: normal;
`


export default function MyPageHairstylist() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Min side - Frisør</title>
      </Head>
   <Title>
   Jobprofil
   </Title>
   <Subtitle>
   Velkommen til FlexFrisør. Vi er glade for at have dig med i teamet. 
Du skal nu oprette din jobprofil. Det er denne jobprofil, der vil matche dig med 
relevante mestre. Husk derfor løbende at holde din jobprofil opdateret.
   </Subtitle>
   <JobProfileHairstylist />
    </Wrapper>
  )
}
