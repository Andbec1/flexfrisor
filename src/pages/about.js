import styled from "styled-components"
import Head from 'next/head'
import { H2, BodyMain } from "../components/styles/TextStyles"

const Wrapper = styled.div`
 padding-top: 0; 
 margin: 0 auto;
 background: white;
 padding-bottom: 5rem;
`

const Intro = styled(H2)`
color: #E78413;
text-align: center;
padding-top: 5rem;
width: 80vw;
margin: 0 auto;
padding-bottom: 3rem;
`

const Fill = styled.div`
margin: 0 auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
justify-items: center;
align-items: center;
`

const Text = styled(BodyMain)`
color: #000;
width: 50vw;
padding-bottom: 3rem;
`

const Info = styled(BodyMain)`
color: #000;
text-align: right;
list-style-type: none;
`

export default function About() {
  return (
    <Wrapper>
      <Head>
        <title>Flexfrisør - Om</title>
      </Head>
      <Intro>Velkommen! Vi er Flexfrisør, en fleksibel frisørordning, der hver eneste dag hjælper saloner over hele landet.</Intro>
      <Fill>
      <Text>
Flexfrisør fungerer som koordinator imellem kunden (frisørmesteren) og assistenten (frisøren). Dette bliver gjort fra vores hovedkontor i Charlottenlund, hvorfra vi hver dag hjælper frisører og mestre i hele landet. <br></br><br></br>
Er du i eller på vej ind i frisørbranchen, så ansøg på Flexfrisør.dk. Når du er oprettet i vores system, har du muligheden for enten at leje eller komme i arbejde hos os. Her ud over, vil du løbende modtage nyheder og andre tilbud fra os. <br></br><br></br>
Faget beskæftiger i dag godt 12.000 organiserede frisører og mestre. <br></br><br></br>
Et vikarbureau for frisørfaget skal medvirke til at gøre det nemmere og mere overskueligt for den enkelte, det vil forbedre forholdene omkring frihed, indtjening, fleksibilitet og helbred, 4 faktorer som unægtelig er meget vigtige byggesten hos os alle.
</Text>
<Info><li>Flexfrisør har telefontid: </li>
<li>Mandag – Fredag kl. 8.30 – 16.00</li>
<li>Telefon: +45 7024 2470</li>
<li>Mail: info@flexfrisør.dk</li></Info>
</Fill>
    </Wrapper>
  )
}
