import styled from "styled-components"
import { H3 } from "../styles/TextStyles"

const Wrapper = styled.div`
 margin: 0 auto;
`

const Card = styled.div`
background: ${props => props.backgroundColor || "#000"};
padding: 2rem;
display: grid;
align-items: center;
justify-items: center;
width: 15rem;
height: 15rem;
transition: .3s ease;
border-radius: 50%;

   .text {
        display: none;
        transition-delay: .3s;
    }
    
    :hover {
        width: 24rem;
        height: 24rem;
        border-radius: 30px;
    
        .text {
            display: grid;
        }
    }
`

const TitleWrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;

.titleIcon {
    width: 80px;
    height: 80px;
    margin: 0 auto;
}
`

const Title = styled(H3)`
color: #fff;
font-weight: normal;
`

const Text = styled.div`
text-align: center;
`


export default function CircleCard(props) {
    const { titleImage, title, text, backgroundColor } = props
  return (
    <Wrapper>
        <Card backgroundColor={backgroundColor}>
            <TitleWrapper>
                <img
                    src={titleImage || "images/logos/logo02_v003.png" }
                    className="titleIcon"
                />
                <Title>{title || "Flexfrisør"}</Title>
            </TitleWrapper>
            <Text className="text"> {text || "Flexfrisør"} </Text>
        </Card>
    </Wrapper>
  )
}
