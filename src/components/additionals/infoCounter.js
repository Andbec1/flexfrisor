import styled from "styled-components"
import { H3, BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div``

const IconWrapper = styled.div`
background: #F1E579;
width: 8rem;
height: 8rem;
border-radius: 50%;
margin: 0 auto;
`

const Icon = styled.div``

const Title = styled(H3)`
color: #E78413;
text-align: center;
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
            <Icon
                Image src={icon || "/static/images/logo02_v003.png" }
            />
        </IconWrapper>
        <Title>{title || "Flexfrisør"}</Title>
        <Text> {text || "Flexfrisør"} </Text>
      </Wrapper>
    )
  }