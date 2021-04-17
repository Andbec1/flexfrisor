import styled from "styled-components"
import { BodyMain, H1 } from "../styles/TextStyles"

const Wrapper = styled.div`
    padding-top: 15rem;
    padding-bottom: 15rem;
    background: url(https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2020/04/GettyImages-1040997928-scaled.jpg);
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


export default function SaloonIntroSection() {
    return (
      <Wrapper>
          <Title>Mester</Title>
          <Subtitle>Når du mangler assistance</Subtitle>
          <Text>– Vi står klar til at hjælpe</Text>
      </Wrapper>
    )
  }