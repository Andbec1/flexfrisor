import styled from "styled-components"
import { H3 } from "../styles/TextStyles"

const Wrapper = styled.div`
 padding: 2rem; 
 margin: 0 auto;
`

const Card = styled.div`
background: ${props => props.backgroundColor || "turquoise"};
border-radius: 30px;
width: 40rem;
padding-bottom: 2rem;
`

const TitleWrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
justify-content: center;
align-items: center;
padding: 2rem;

.titleIcon {
    width: 50px;
    height: 50px;
}
`

const Title = styled(H3)`
color: #fff;
text-decoration: underline;
`

const IconRow = styled.div`
display: grid;
  grid-template-columns: auto auto auto auto;
  justify-self: center;
  justify-items: center;
`

const Icon = styled.div`
display: grid;

.icon {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-bottom: .5rem;
}
`

const Text = styled.div`
margin: 0 auto;
`

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
    const { titleImage, title, backgroundColor, icon01, icon02, icon03, icon04, text, text01, text02, text03, text04, text05, buttonTextColor, link } = props
  return (
    <Wrapper>
        <Card>
            <TitleWrapper>
                <Title>{title || "Flexfrisør"}</Title>
                <img
                    src={titleImage || "images/logo/logo02_v003.png" }
                    className="titleIcon"
                />
            </TitleWrapper>
            <IconRow>
            <Icon>
            <img 
                src={icon01 || "images/logo/logo02_v003.png" }
                className="icon" 
            />
            <Text> {text01 || "Flexfrisør"} </Text>
            </Icon>
            <Icon>
            <img 
                src={icon02 || "images/logo/logo02_v003.png" }
                className="icon"
            />
            <Text> {text02 || "Flexfrisør"} </Text>
            </Icon>
            <Icon>
            <img 
                src={icon03 || "images/logo/logo02_v003.png" }
                className="icon" 
            />
            <Text> {text03 || "Flexfrisør"} </Text>
            </Icon>
            <Icon>
            <img 
                src={icon04 || "images/logo/logo02_v003.png" }
                className="icon"
            />
            <Text> {text04 || "Flexfrisør"} </Text>
            </Icon>
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
