import styled from "styled-components"
import Head from 'next/head'
import HeroSection from "../components/sections/heroSection"
import SlideCard from "../components/cards/slideCard"
import InfoCounter from "../components/additionals/infoCounter"
import FeedbackSection from "../components/sections/feedbackSection"

const Wrapper = styled.div`
 padding-top: 5rem; 
 margin: 0 auto;
 background: white;
`

const SlideWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
justify-content: center;
justify-self: center;
align-content: center;
align-self: center;
`

const InfoWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Home</title>
      </Head>
      <img src="images/icons/Scissor_v001.svg" />
      <HeroSection />
      <SlideWrapper>
        <SlideCard 
          title="Bliv frisør"
          backgroundColor="#E78413"
          text="Ferie og fridage uden dårlig samvittighed, 
          barselperiode med ro, fred og frihed, og 
          pauser efter eget valg mellem"
          text01="Frihed"
          text02="Indtjening"
          text03="Fleksibilitet"
          text04="Helbred"
          text05="Læs mere"
          buttonTextColor="#E78413"
          link="https://codeshape.io"
          titleImage="/images/icons/Scissor_v001.svg"
        />
        <SlideCard 
          title="Find frisør"
          backgroundColor="#E4B603"
          text="FlexFrisør' vigtigste opgave vil være at servicere
          frisørfaget på en sådan måde, at mestre såvel som 
          svende får mulighed for at dyrke de 4 nævnte 
          værdier, – frihed, indtjening, fleksibilitet og helbred."
          text01="Hvorfor?"
          text02="Pris"
          text03="Lønberegning"
          text04="Rekruttering"
          text05="Læs mere"
          buttonTextColor="#E4B603"
          link="https://codeshape.io"
        />
      </SlideWrapper>
      <InfoWrapper>
        <InfoCounter 
          icon=""
          title="654"
          text="Frisører"
        />
        <InfoCounter 
          icon=""
          title="12.501"
          text="Saloner hjulpet"
        />
        <InfoCounter 
          icon=""
          title="512.365"
          text="Timer klippet"
        />
        <InfoCounter 
          icon=""
          title="12.054.025"
          text="Hårstrå klippet"
        />
      </InfoWrapper>
      <FeedbackSection />
    </Wrapper>
  )
}
