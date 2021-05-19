import styled from "styled-components"
import { BodyMain, H1 } from "../styles/TextStyles"

const Wrapper = styled.div`
    padding: 15rem 2rem;
    background: url(https://miro.medium.com/max/12000/0*NEgmVl2J_RRzI9Sr);
    background-size: cover;
    background-position: center;
z-index: -1;
display: grid;
justify-content: center;
`

const Title = styled(H1)`
font-weight: normal;
`

const Subtitle = styled(H1)`
font-weight: normal;
`

const Text = styled(BodyMain)`
`


export default function HairstylistIntroSection() {
    return (
      <Wrapper>
          <Title>Frisør</Title>
          <Subtitle>Når du selv vil bestemme</Subtitle>
          <Text>Er du til Frihed, Indtjening, Fleksibilitet og Bedre Helbred?</Text>
      </Wrapper>
    )
  }