import styled from "styled-components"
import { H1 } from "../styles/TextStyles"
import Quotes from "../additionals/quotes"

const Wrapper = styled.div`
background: #F1E579;
margin 5rem auto;
padding: 3rem;
`

const QuoteWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 10rem;
overflow: hidden;
` 

export default function feedbackSection() {
    return (
      <Wrapper>
        <QuoteWrapper>
            <Quotes 
                text="At være vikar kræver mere af mig end, hvis jeg stod det samme sted dag ind og dag ud. Som vikar skal jeg kunne omstille mig til de forskellige saloner. Selvom man kun skulle være i en salon nogle få dage, så er det vigtigt at man indstiller sig til deres miljø. "
                author="- Kamilla G. Ploug"
                position="Vikar"
            />
            <Quotes 
                text="Jeg syntes Vikarcentret er nemt, hurtigt og fleksibelt. Jeg stod med en ansat der blev sygemeldt før barsel, jeg var heldig at min vikar kunne komme fra den ene dag til den anden. Vi fik hurtigt lavet en plan der passede os begge og nu holder hun, da jeg har fundet en fuldtidsansat. "
                author="- Karina Mølgaard"
                position=" "
            />
            <Quotes 
                text="Fleksibelt, nemt og professionelt. Vi prøvede det første gang af, da vi havde en periode med ekstra travlhed i salonen. Det er nu endt med fast frisørleje, som vi er super glade for. "
                author="- Hell Kisum"
                position="Frisør Kisum"
            />
            <Quotes 
                text="Jeg har kun haft gode oplevelser med Vikarcentret. Senest da min
                assistent brækkede armen, og jeg skulle afsted på ferie om lørdagen.
                I løbet af en dag havde vikarcentret løst det, og fået en erfaren frisør
                klar til at passe butikken, mens jeg var væk. Vikaren blev hos os til min
                assistent kom tilbage, så hun med god samvittighed kunne komme sig. 
                "
                author="- Hilde"
                position="Hot'n tot, Silkeborg"
            />
        </QuoteWrapper>
      </Wrapper>
    )
  }