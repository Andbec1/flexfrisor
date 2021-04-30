import styled from "styled-components"
import HeroCard from "../cards/heroCard"
import { H1 } from "../styles/TextStyles"


const Wrapper = styled.div`
 padding-top: 10rem; 
 padding-left: 1.875rem;
 padding-right: 1.875rem;
 margin: 0 auto;
 background: url(https://hips.hearstapps.com/ghk.h-cdn.co/assets/15/50/1449507755-cutting-wet-hair-bad.jpg);
background-size: cover;
background-position: center;
z-index: -1;
padding-bottom: 8rem;
`

const Intro = styled(H1)`
text-transform: uppercase;
max-width: 60rem;
margin: 0 auto;
padding-bottom: 5rem;

 .fleksibilitet {
   color: #E78413;
 }

 .frisørfaget {
    color: #E4B603;
  }
`

const CardWrapper = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 2rem;
`

export default function heroSection() {
  return (
    <Wrapper>
      <Intro>Vi får <span className="fleksibilitet">fleksibilitet</span> ind i <span className="frisørfaget">frisørfaget</span></Intro>
      <CardWrapper>
        <HeroCard
            iconImage="images/icons/yellow/Scissor_yellow_v001.svg" 
            text="Til dig som
            er frisør"
            link="/hairstylist"
        />
        <HeroCard 
          iconImage="images/icons/yellow/barberPole_yellow_v001.svg"
          text="Til dig som er mester"
          link="/saloon"
        />
        </CardWrapper>
    </Wrapper>
  )
}
