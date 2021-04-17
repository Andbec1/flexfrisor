import styled from "styled-components"
import { BodyMain, H1 } from "../styles/TextStyles"

const Wrapper = styled.div`
    padding-top: 15rem;
    padding-bottom: 15rem;
    background: url(https://miro.medium.com/max/12000/0*NEgmVl2J_RRzI9Sr);
    background-size: cover;
    background-position: center;
z-index: -1;
`

const Title = styled(H1)`
max-width: 60rem;
padding-left: 20rem;
`

const Subtitle = styled(H1)`
padding-left: 20rem;
`

const Text = styled(BodyMain)`
padding-left: 20rem;
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