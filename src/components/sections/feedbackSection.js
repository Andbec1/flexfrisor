import styled from "styled-components"
import Quotes from "../additionals/quotes"

const Wrapper = styled.div`
background: #F1E579;
margin 5rem auto;
padding: 3rem;
overflow: hidden;
`

const QuotationMarkLeft = styled.div`
position: absolute;
left: 0;
zindex: 1;
`

const QuotationMarkRight = styled.div`
position: absolute;
transform: rotate(180deg);
right: 0;
zindex: 1;
`

const QuoteWrapper = styled.div`
display: flex;
animation-name: quote;
animation-duration: 20s;
animation-iteration-count: infinite;
animation-direction: alternate;
animation-timing-function: ease;
z-index: 0;

@keyframes quote {
    from   {transform: translate(0,0)}
    to  {transform: translate(-100%,0)}
  }
` 

export default function feedbackSection() {
    return (
      <Wrapper>
        <QuotationMarkLeft>
            <img src="images/icons/quoteLower.svg" />
        </QuotationMarkLeft>
        <QuotationMarkRight>
            <img src="images/icons/quoteUpper.svg" />
        </QuotationMarkRight>
        <QuoteWrapper className="Quote">
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
                author="- Helle Kisum"
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