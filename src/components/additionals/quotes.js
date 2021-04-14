import styled from "styled-components"
import { BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`
margin: 0 5rem;
`

const Quote = styled.div`
width: 30rem;
padding: 0 4rem;
`

const Text = styled(BodyMain)`
color: #000;
font-size: .8em;
text-align: center;
`

const Author = styled(BodyMain)`
color: #000;
text-align: center;
font-size: 1.2em;
`

const Position = styled(BodyMain)`
color: #000;
text-align: center;
font-size: 1.2em;
`

export default function quotes(props) {
    const { text, author, position } = props
  return (
    <Wrapper>
        <Quote>
            <Text>{text || "Flexfrisør"}</Text>
            <Author>{author || "Flexfrisør"}</Author>
            <Position>{position || "Flexfrisør"}</Position>
        </Quote>
    </Wrapper>
  )
}