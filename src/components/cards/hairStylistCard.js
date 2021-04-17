import styled from "styled-components"
import { H3 } from "../styles/TextStyles"

const Wrapper = styled.div`
 margin: 0 auto;
`

const Card = styled.div`
background: #E78413;
border-radius: 30px;
width: 15rem;
height: 20rem;
padding: 2rem;
`

const TitleWrapper = styled.div`
display: grid;
justify-content: center;
align-items: center;
margin-bottom: .5rem;

.titleIcon {
    width: 80px;
    height: 80px;
    margin: 0 auto;
}
`

const Title = styled(H3)`
color: #fff;
margin-top: .5rem;
`

const Text = styled.div`
text-align: center;
display: grid;
`

const Line = styled.div`
height: 1px;
background: #fff;
margin-bottom: .5rem;
`


export default function HairStylistCard(props) {
    const { titleImage, title, text } = props
  return (
    <Wrapper>
        <Card>
            <TitleWrapper>
                <img
                    src={titleImage || "images/logos/logo02_v003.png" }
                    className="titleIcon"
                />
                <Title>{title || "Flexfrisør"}</Title>
            </TitleWrapper>
            <Line></Line>
            <Text> {text || "Flexfrisør"} </Text>
        </Card>
    </Wrapper>
  )
}
