import styled from "styled-components"
import { H2, BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`
margin: 0 auto;
`

const Text = styled(BodyMain)`
text-align: center;
`

const Circle = styled.div`
background: #E78413;
width: 5rem;
height: 5rem;
border-radius: 50%;
margin-top: -3.3rem;
margin-left: auto;
margin-right: auto;
`

export default function InfoBubble(props) {
    const { title, text } = props
    return (
    <Wrapper>
        <Text>{text || "Flexfrisør"}</Text>
            <Circle></Circle>
    </Wrapper>
  )
}
