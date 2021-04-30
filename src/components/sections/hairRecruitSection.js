import styled from "styled-components"
import { H1, H3, BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`
padding: 2rem;
background: url(https://i.pinimg.com/originals/c5/5a/de/c55ade0f3c23b62ff5b7eb6af21ecdc6.jpg);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
z-index: 5;
display: grid;
justify-items: center;
`

const Title = styled(H1)`
color: #E78413;
text-align: center;
font-weight: normal;
margin-bottom: 5rem;
`

const Text01 = styled.div`
width: 30rem;
margin-bottom: 5rem;
`

const Text02 = styled.div`
width: 30rem;
`

const Subtitle01 = styled(H3)`
font-weight: normal;
`

const Subtitle02 = styled(H3)`
font-weight: normal;
`

const Body01 = styled(BodyMain)`
`

const Body02 = styled(BodyMain)`

`

export default function HairRecruitSection() {
    return (
      <Wrapper>
          <Title>Rekruttering</Title>
          <Text01>
          <Subtitle01>Bliv headhuntet</Subtitle01>
          <Body01>En udvikling vi naturligvis kun er glade for, da det jo viser at vi har de rigtige 
frisører i vores stand. Så det at være vikar kan faktisk ende med et fast job, 
i så fald, at du ønsker det. Vikaren er jo naturligvis frit stillet, om denne ønsker 
at acceptere rekrutteringen.
Alle frisørsvende kan blive skrevet op i vores emnedatabase. Som kandidat 
i vores emnedatabase vil man blive kontaktet, i så fald af at ens profil passer 
til en forespørgelse fra en salon. På den måde kan du ende med at blive 
Headhuntet eller Rekrutteret.</Body01>
</Text01>
<Text02>
<Subtitle02>Fra vikar til rekrutteret</Subtitle02>
          <Body02>Manglen på gode frisører kan mærkes i denne tid over hele landet. 
Det sidste års tid har der været en generel stor mangel på uddannede 
frisører. Dette er naturligvis noget, vi mærker i forbindelse med antallet 
af vikarforespørgelser fra vores kunder. Typisk er en vikarløsning en 
midlertidig løsning, men pga. efterspørgslen på frisørarbejdskraften, har 
vi den seneste tid ydet en del rekruttering. Det forekommer nemlig tit at 
Salonen, hvor vikaren er på opgave, bliver så glade for vores vikar, at de 
ganske enkelt ønsker at rekruttere denne.</Body02>
</Text02>
      </Wrapper>
    )
  }