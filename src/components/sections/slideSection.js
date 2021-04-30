import styled from "styled-components"
import SlideCard from "../cards/slideCard"

const Wrapper = styled.div`
 padding-top: 5rem; 
 margin: 0 auto;
`

const SlideWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
justify-content: center;
justify-self: center;
align-content: center;
align-self: center;
`

export default function SlideSection() {
    return (
      <Wrapper>
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
            link="/hairstylist"
            titleImage="images/icons/white/Scissor_white_v001.svg"
            icon01="images/icons/white/wings_white_v001.svg"
            icon02="images/icons/white/moneyBags_white_v001.svg"
            icon03="images/icons/white/flexibility_white_v001.svg"
            icon04="images/icons/white/heart_white_v001.svg"
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
            link="/saloon"
            titleImage="images/icons/white/barberPole_white_v001.svg"
            icon01="images/icons/white/Scissor_white_v001.svg"
            icon02="images/icons/white/moneyBags_white_v001.svg"
            icon03="images/icons/white/calc.svg"
            icon04="images/icons/white/recruit.svg"
          />
        </SlideWrapper>
      </Wrapper>
    )
  }