import styled from "styled-components"
import { H3, BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`
padding: 0;
margin: 0;
`

const IconWrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;
background: #F1E579;
width: 9rem;
height: 9rem;
border-radius: 50%;
margin: 0 auto;

.icon {
  width: 7rem;
  height: 7rem;
}
`


const Title = styled(H3)`
color: #E78413;
text-align: center;
margin-top: 1rem;
`

const Text = styled(BodyMain)`
color: #E78413;
text-align: center;
`

export default function infoCounter(props) {
    const { icon, title, text } = props
    return (
      <Wrapper>
        <IconWrapper>
            <img src={icon || "images/logos/logo02_v003.png" } 
            className="icon"
            />
        </IconWrapper>
        <Title>{title || "Flexfrisør"}</Title>
        <Text> {text || "Flexfrisør"} </Text>
      </Wrapper>
    )
  }