import styled from "styled-components"
import CircleCard from "../cards/circleCard"
import { BodyMain, H2, BodyIntro } from "../styles/TextStyles"

const Wrapper = styled.div`
padding: 5rem 2rem;
background-size: cover;
background-position: center;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
justify-content: center;
z-index: -1;
grid-gap: 2rem;
`

const TextWrapper = styled.div`
justify-self: center;
`

const Title = styled(H2)`
color: #E4B603;
font-weight: normal;
margin-bottom: 1rem;
`

const Subtitle = styled(BodyIntro)`
color: #E4B603;
margin-bottom: 1rem;
`

const Text = styled(BodyMain)`
color: black;
margin-bottom: 1rem;
`

const Text02 = styled(BodyMain)`
color: black;
margin-bottom: 1rem;
`

const Text03 = styled(BodyMain)`
color: black;
margin-bottom: 1rem;
`

const Text04 = styled(BodyMain)`
color: black;
margin-bottom: 1rem;
`

const Text05 = styled(BodyMain)`
color: black;
margin-bottom: 1rem;
`

const Text06 = styled(BodyMain)`
color: black;
`

const CardWrapper = styled.div`
display: grid;
justify-self: center;
justify-itmes: center;
grid-gap: 1rem;
`

const Card01 = styled.div`
z-index: 0;
justify-self: center;
`

const Card02 = styled.div`
z-index: 0;
justify-self: center;
`

const Card03 = styled.div`
z-index: 0;
justify-self: center;
`

const Card04 = styled.div`
z-index: 0;
justify-self: center;
`

export default function SaloonInfoSection() {
    return (
      <Wrapper>
        <CardWrapper>
  <Card01>
<CircleCard
titleImage="images/icons/Scissor_v001.svg"
backgroundColor="#E4B603"
title="Hvorfor?"
text="FlexFrisør' vigtigste opgave vil være at servicere
frisørfaget på en sådan måde, at mestre såvel som 
svende får mulighed for at dyrke de 4 nævnte 
værdier, – frihed, indtjening, fleksibilitet og helbred."
/>
</Card01>
<Card02>
<CircleCard 
titleImage="images/icons/moneyBags_v001.svg"
backgroundColor="#E4B603"
title="Løn"
text="En frisør leje timepris er en effektiv lønomkostning. Vikaren er kun på arbejde når du har behov for det, så du har kun lønomkostninger, når der er kunder i salonen."
/>
</Card02>
<Card03>
<CircleCard 
titleImage="images/icons/calc.svg"
backgroundColor="#E4B603"
title="Lønberegning"
text="Hvis en svend har en grundløn på kr. 9.990,- / pr.14 dage, er den direkte timeløn før provisions beregning Kr. 135,- Men den virkelige timeløn er en helt anden."
/>
</Card03>
<Card04>
<CircleCard 
titleImage="images/icons/recruit.svg"
backgroundColor="#E4B603"
title="Rekruttering"
text="Det er ressourcekrævende at ansætte nye medarbejdere, det kræver langt mere tid og overskud end, hvad man i første omgang forestiller sig. Typisk er en frisør leje en tidsbegrænset løsning, som anvendes ved barsel, pludselig opstået sygdom, travlhed eller meget periode orienteret."
/>
</Card04>
</CardWrapper>
<TextWrapper>
          <Title>Hvorfor leje en frisør</Title>
          <Subtitle>Hvorfor frisør leje løsningen?</Subtitle>
          <Text>Frisørmesteren kan uden videre spejles i nedenstående scenarier.
Hvad gør jeg, når der indløber en sygemelding? Hvem tager kunderne? 
Hvad med min omsætning? osv. Mesteren kan selv blive syg, have brug 
for uplanlagt frihed, og endelig blive gravid.</Text>
            <Text02>Afhængighedsforholdet mesteren og svenden i mellem kan i nogle situationer 
virke ulige og skabe ubegrundede ærgrelser. Stress er en yderst velkendt 
diagnose blandt frisørmestre.</Text02>
<Text03>Under spidsbelastning presser mesteren og svendene hinanden til det yderste,
og i de knap så gode perioder føler mange mestre ofte, at der konstant er for 
mange på arbejde.</Text03>
 <Text04>Tanken om at ansætte personale under spidsbelastning og fyre dem igen senere 
er ikke optimal, da omkostningerne vil være alt for store, menneskeligt som 
økonomisk.</Text04>
<Text05>Vikarcentrets vigtigste opgave vil være at servicere frisørfaget på en sådan måde, 
at mestre såvel som svende får mulighed for at dyrke de 4 nævnte værdier, – frihed, 
indtjening, fleksibilitet og helbred.</Text05>
<Text06>Grundtanken med Vikarcentret er at løse ovennævnte lidt fastlåste situation samt at 
tilfører faget en endnu bedre fleksibilitet end den som eksisterer i dag. Er ovenstående 
lige dig? – så kontakt os og hør mere.</Text06>
</TextWrapper>
      </Wrapper>
    )
  }