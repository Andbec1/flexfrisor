import styled from "styled-components"
import { H1, MediumText } from "../components/styles/TextStyles"
import Head from 'next/head'

const Wrapper = styled.div`
 padding-top: 10rem; 
 margin: 0 auto;
 max-width: 70rem;
`

const Intro = styled(H1)`
 text-align: center;
 
 .Intro {
   color: #309DBC;
 }
`

const Description = styled(MediumText)`
 text-align: center;
`

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Home</title>
      </Head>
      <Intro>Welcome to <span className="Intro">Flexfrisør</span></Intro>
      <Description>The early stage of a new journey</Description>
    </Wrapper>
  )
}
