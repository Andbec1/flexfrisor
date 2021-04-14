import styled from "styled-components"
import Head from 'next/head'
import HeroSection from "../components/sections/heroSection"
import InfoSection from "../components/sections/infoSection"
import FeedbackSection from "../components/sections/feedbackSection"
import SlideSection from "../components/sections/slideSection"

const Wrapper = styled.div`
 padding-top: 0; 
 margin: 0 auto;
 background: white;
`

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Home</title>
      </Head>
      <HeroSection />
      <SlideSection />
      <InfoSection />
      <FeedbackSection />
    </Wrapper>
  )
}
