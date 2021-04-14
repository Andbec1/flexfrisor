import styled from "styled-components"
import { H2 } from "../styles/TextStyles"

const Wrapper = styled.div`
 padding-top: 10rem; 
 margin: 0 auto;
 max-width: 70rem;
`

const Card = styled.div`
border: 20px solid #F1E579;
background: rgba(35,35,35,0.4);
border-radius: 30px;
`

const Text = styled(H2)`
color: #F1E579;
`

const IconImage = styled.div`

`

export default function heroCard(props) {
    const { iconImage, text } = props
  return (
    <Wrapper>
        <Card>
        <IconImage
            className="icon"
            Image src={iconImage || "/static/images/logo02_v003.png" }
          />
            <Text>{text || "Flexfrisør"}</Text>
        </Card>
    </Wrapper>
  )
}
