import styled from "styled-components"
import { H3 } from "../styles/TextStyles"

const Wrapper = styled.div`
 padding: 2rem; 
 margin: 0 auto;
`

const Card = styled.div`
background: ${props => props.backgroundColor || "turquoise"};
border-radius: 30px;
width: 55vw;
`

const TitleWrapper = styled.div`
display: grid;
justify-content: center;
`

const Title = styled(H3)`
color: #fff;
text-decoration: underline;
padding: 2rem;
`

const TitleImage = styled.div``

const IconRow = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  justify-self: center;
  justify-content: center;
`

const Icon = styled.div``

const Text = styled.div``

const InfoBox = styled.div`
    Background: #fff;
    color: #000;
    max-width: 30rem;
    margin: 2rem auto;
    border-radius: 30px;
    padding: 3rem;
`

const Link = styled.div`
width: 8rem;
 margin: 0 auto;
 background: #fff;
 color: ${props => props.buttonTextColor || "#000"};
 text-align: center;
 padding 1rem 0;
 border-radius: 10px;
`

export default function slideCard(props) {
    const { titleImage, title, backgroundColor, icon, text, text01, text02, text03, text04, text05, buttonTextColor, link } = props
  return (
    <Wrapper>
        <Card>
            <TitleWrapper>
                <Title>{title || "Flexfrisør"}</Title>
                <TitleImage
                    Image src={titleImage || "/images/logo02_v003.png" }
                />
            </TitleWrapper>
            <IconRow>
            <Icon 
                src={icon || "/images/logo02_v003.png" } 
            />
            <Text> {text01 || "Flexfrisør"} </Text>
            <Icon 
                src={icon || "/images/logo02_v003.png" } 
            />
            <Text> {text02 || "Flexfrisør"} </Text>
            <Icon 
                src={icon || "/images/logo02_v003.png" } 
            />
            <Text> {text03 || "Flexfrisør"} </Text>
            <Icon 
                src={icon || "/images/logo02_v003.png" } 
            />
            <Text> {text04 || "Flexfrisør"} </Text>
        </IconRow>
        <InfoBox>
            <Text> {text || "Læs mere nedenfor"} </Text>
        </InfoBox>
        <Link to={link || "/"}>
            <Text> {text05 || "Læs mere"} </Text>
        </Link>
        </Card>
    </Wrapper>
  )
}
