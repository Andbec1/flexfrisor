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
`

const CardLine = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 2rem;
align-items: center;
justify-content: center;
margin-bottom: 2rem;
`

const Text = styled(BodyMain)`
background: #fff;
color: #E4B603;
text-align: center;
border-radius: 10px;
padding: .5rem;
width: 7rem;
`

export default function CalculationsCard() {
  return (
    <Wrapper>
        <Card>
            <CardLine>
                <Text>kr. 135,-</Text>
                <img src="images/icons/arrow_v001.svg" />
                <Text>kr. 239,-</Text>
            </CardLine>
            <CardLine>
                <Text>kr. 145,-</Text>
                <img src="images/icons/arrow_v001.svg" />
                <Text>kr. 252,-</Text>
            </CardLine>
            <CardLine>
                <Text>kr. 155,-</Text>
                <img src="images/icons/arrow_v001.svg" />
                <Text>kr. 265,-</Text>
            </CardLine>
            <CardLine>
                <Text>kr. 165,-</Text>
                <img src="images/icons/arrow_v001.svg" />
                <Text>kr. 278,-</Text>
            </CardLine>
            <CardLine>
                <Text>kr. 175,-</Text>
                <img src="images/icons/arrow_v001.svg" />
                <Text>kr. 292,-</Text>
            </CardLine>
            <CardLine>
                <Text>kr. 185,-</Text>
                <img src="images/icons/arrow_v001.svg" />
                <Text>kr. 305,-</Text>
            </CardLine>
        </Card>
    </Wrapper>
  )
}
