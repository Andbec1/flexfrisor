import styled from "styled-components"
import { BodyMain, H1 } from "../styles/TextStyles"

const Wrapper = styled.div`
    background: url(https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2020/04/GettyImages-1040997928-scaled.jpg);
    background-size: cover;
    background-position: center;
z-index: -1;
display: grid;
justify-content: center;
padding: 15rem 2rem;
`

const Title = styled(H1)`
font-weight: normal;
`

const Subtitle = styled(H1)`
font-weight: normal;
`

const Text = styled(BodyMain)`
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