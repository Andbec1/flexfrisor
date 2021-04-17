import styled from "styled-components"
import HairStylistCard from "../cards/hairStylistCard"
import { BodyMain, H2, BodyIntro } from "../styles/TextStyles"

const Wrapper = styled.div`
    padding-top: 5rem;
    padding-bottom: 15rem;
    background-size: cover;
    background-position: center;
z-index: -1;
`

const Title = styled(H2)`
max-width: 60rem;
padding-left: 20rem;
color: #E78413;
font-weight: normal;
margin-bottom: 1rem;
`

const Subtitle = styled(BodyIntro)`
padding-left: 20rem;
color: #E78413;
margin-bottom: 1rem;
`

const Text = styled(BodyMain)`
padding-left: 20rem;
color: black;
margin-bottom: 3rem;
width: 45rem;
`

const Text02 = styled(BodyMain)`
padding-left: 20rem;
color: black;
margin-bottom: 4rem;
width: 45rem;
`

const Text03 = styled(BodyMain)`
padding-left: 20rem;
color: black;
margin-bottom: 2rem;
padding-right: 2rem;
`

const Text04 = styled(BodyMain)`
padding-left: 20rem;
color: black;
padding-right: 2rem;
`

const CardWrapper = styled.div`
position: absolute;
right: 2rem;
display: grid;
grid-template-columns: 15rem 15rem;
grid-template-rows: 20rem 20rem;
grid-gap: 1.5rem;
transition: .2s;
`

const Card01 = styled.div`
z-index: 0;
transition: .2s;
opacity: .5;

:hover {
  z-index: 1;
  transform: scale(1.4, 1.4) translate(5rem, 5rem);
  opacity: 1;
}
`

const Card02 = styled.div`
z-index: 0;
transition: .2s;
opacity: .5;

:hover {
  z-index: 1;
  transform: scale(1.2, 1.2) translate(-5rem, 5rem);
  opacity: 1;
}
`

const Card03 = styled.div`
z-index: 0;
transition: .2s;
opacity: .5;

:hover {
  z-index: 1;
  transform: scale(1.2, 1.2) translate(5rem, -5rem);
  opacity: 1;
}
`

const Card04 = styled.div`
z-index: 0;
transition: .2s;
opacity: .5;

:hover {
  z-index: 1;
  transform: scale(1.2, 1.2) translate(-5rem, -5rem);
  opacity: 1;
}
`

export default function HairstylistInfoSection() {
    return (
      <Wrapper>
        <CardWrapper>
  <Card01>
<HairStylistCard
titleImage="images/icons/wings_v001.svg"
title="Frihed"
text="Ferie og fridage uden dårlig samvittighed, 
barselperiode med ro, fred og frihed, og 
pauser efter eget valg mellem"
/>
</Card01>
<Card02>
<HairStylistCard 
titleImage="images/icons/moneyBags_v001.svg"
title="Indtjening"
text="Få en høj fast timebetaling, startløn 175,- 
kroner. Du behøver ikke stresse over om
du når provisionen."
/>
</Card02>
<Card03>
<HairStylistCard 
titleImage="images/icons/flexibility_v001.svg"
title="Fleksibilitet"
text="Du bestemmer selv arbejdsmængden, og 
forpligter dig ikke til mere end du selv 
vælger."
/>
</Card03>
<Card04>
<HairStylistCard 
titleImage="images/icons/heart_v001.svg"
title="Helbred"
text="Mindre stressend hverdag. 
Du arbejder den mængde du kan klare. 
Tag en fridag, når du har behov for det. 
Hold barsel, så længe som du behøver."
/>
</Card04>
</CardWrapper>
          <Title>Job som frisør</Title>
          <Subtitle>Når du selv vil bestemme</Subtitle>
          <Text>Er du til Frihed, Indtjening, Fleksibilitet og Bedre Helbred? 
            Så skulle du måske blive frisørvikar i branchens eget vikarbureau, 
            nemlig FlexFrisør. Er et vikarjob lige dig? – så kontakt os og hør mere.
            Vi søger hele tiden gode frisører landet over.</Text>
            <Subtitle>Kender du det?</Subtitle>
            <Text02>Mange frisører er ofte meget hårdt spændt op i deres dagligdag; 
konkurrence, indtjening og kvalitetssikring er nogle af de faktorer, 
der præger den moderne frisør i dag. Som en del af et hårdtarbejdende 
team er det alt for ofte, at frisøren ikke søger om frihed i ”utide” og måske 
ikke altid tager de sygedage, der måtte være nødvendige. Frygten for at 
svigte kunderne, kollegaerne og mesteren sidder konstant i baghovedet.</Text02>
<Text03>Stress er et velkendt fænomen blandt frisører. Fornemmelsen af dårlig 
samvittighed dukker op, så snart frisøren ”falder” udenfor det faste skema. 
Også ved barsel dukker problemet op; hvem skal tage mine kunder, mens
 jeg er væk? Hvor er mine kunder, når jeg kommer tilbage?</Text03>
 <Text04>Det er derfor ofte, at beskeden om graviditet gives med bøjet nakke til mesteren. Som tingene ser ud i dag, løses problemerne omkring sygdom, impulsiv frihed eller
barsel ved, at frisørerne deler kunderne imellem sig eller tilkalder kollegaer, der har fridag. Man kan sige, der er tale om en slags indbygget vikarordning, som efter 
nutidens normer er utilstrækkelig og i længden uholdbar. Det bremser muligheden for kundetilgang og dermed omsætningsfremgang for den enkelte frisør.</Text04>
      </Wrapper>
    )
  }