import styled from "styled-components"
import InfoBubble from "../additionals/infoBuble"
import { H2, BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`
 margin: 3rem auto;
 background: #fff;
 width: 40rem;
 padding-top: 3rem;
`

const Card = styled.div`
margin: 0 auto;
padding: 3rem 5rem;
background: #E4B603;
border-radius: 30px 30px 0 0;
width: 30rem;
height: 50rem;
display: grid;
justify-content: center;
align-self: center;
`

const CardLine01 =  styled.div`
display: grid;
grid-template-columns: 10rem 10rem 10rem;
align-content: center;
justify-content: center;
margin-bottom: 3rem;
`

const CardLine02 =  styled.div`
display: grid;
grid-template-columns: 13rem 13rem;
align-content: center;
justify-content: center;
margin-bottom: 3rem;
`

const Text = styled(BodyMain)`
text-align: center;
margin-bottom: 2.5rem;
`

export default function BenefitsCard() {
  return (
    <Wrapper>
        <Card>
            <CardLine01>
            <InfoBubble 
            text="Feriepenge"
            />
            <InfoBubble 
            text="Lønservice"
            />
            <InfoBubble 
            text="S/H betaling"
            />
            </CardLine01>
            <CardLine01>
            <InfoBubble 
            text="ATP"
            />
            <InfoBubble 
            text="PKS pension"
            />
            <InfoBubble 
            text="Barselsordning"
            />
            </CardLine01>
            <CardLine01>
            <InfoBubble 
            text="Forsikringer"
            />
            <InfoBubble 
            text="Div. kontingenter"
            />
            <InfoBubble 
            text="AER"
            />
            </CardLine01>
            <CardLine02>
            <InfoBubble 
            text="Dagpengeforsikring"
            />
            <InfoBubble 
            text="Svendeprøvegebyr"
            />
            </CardLine02>
            <Text>Samt øvrige relaterede udgifter:</Text>
            <CardLine02>
            <InfoBubble 
            text="Kurser / ind og udland"
            />
            <InfoBubble 
            text="Efteruddannelse"
            />
            </CardLine02>
            <CardLine02>
            <InfoBubble 
            text="Evt. andel af elevudgift"
            />
            <InfoBubble 
            text="Spildtid m.m."
            />
            </CardLine02>
        </Card>
    </Wrapper>
  )
}
