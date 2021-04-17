import styled from "styled-components"
import { H1, H3, BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`
padding: 2rem;
background: url(https://i.pinimg.com/originals/c5/5a/de/c55ade0f3c23b62ff5b7eb6af21ecdc6.jpg);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
z-index: 5;
`

const Title = styled(H1)`
color: #E4B603;
text-align: center;
font-weight: normal;
margin-bottom: 5rem;
margin-right: 20rem;
`

const Text01 = styled.div`
width: 30rem;
margin-bottom: 5rem;
margin-left: 35rem;
`

const Text02 = styled.div`
width: 30rem;
`

const Subtitle02 = styled(H3)`
font-weight: normal;
`

const Body01 = styled(BodyMain)`
`

const Body02 = styled(BodyMain)`

`

export default function SaloonRecruitSection() {
    return (
      <Wrapper>
          <Title>Rekruttering</Title>
          <Text01>
          <Body01>Det er ressourcekrævende at ansætte nye medarbejdere, det kræver langt mere 
tid og overskud end, hvad man i første omgang forestiller sig. Typisk er en 
frisør leje en tidsbegrænset løsning, som anvendes ved barsel, pludselig opstået 
sygdom, travlhed eller meget periode orienteret. Frisør leje løsningen er dog 
yderst interessant i forbindelse med ansættelse af nye medarbejdere. Dette 
kan vi konstatere, da flere og flere saloner ønsker at rekruttere vores frisører.
Mange af vores kunder oplever at kvaliteten på vores frisører er så god, at 
de ønsker at sikre sig frisøren permanent. Derfor er det selvfølgelig muligt at 
rekruttere vores frisører, imod et fast beløb, hvis begge parter er enige om det.
Derfor er frisørleje en super god start på en ansættelse.</Body01>
</Text01>
<Text02>
<Subtitle02>Headhunting & Rekruttering</Subtitle02>
          <Body02>I mange år har man anvendt headhunting/rekruttering med stor succes i dansk 
erhvervsliv. Men ikke mange jobfunktioner findes der, hvor personligheden
spiller en så stor rolle som i frisørbranchen. Frisøren er ALTID grunden til at en 
kunde vender tilbage. Derfor er det helt afgørende at frisøren passer perfekt ind 
i det miljø og kundesegment, som salonen betjener.</Body02>
</Text02>
      </Wrapper>
    )
  }