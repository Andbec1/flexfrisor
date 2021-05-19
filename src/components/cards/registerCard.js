import styled from "styled-components"
import { H3 } from "../styles/TextStyles"
import Link from 'next/link'

const Wrapper = styled.div`
 margin: 0 auto;
 width: 20rem;
`

const Card = styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
border: 15px solid #F1E579;
background: ${props => props.backgroundColor || "#000"};
border-radius: 30px;
display: grid;
grid-template-rows: auto auto;
justify-items: center;
align-items: center;

.icon {
  height: 15rem;
  width: 15rem;
}
`

const Text = styled(H3)`
color: #fff;
padding-bottom: 1rem;
text-align: center;
font-weight: normal;
`

export default function RegisterCard(props) {
    const { iconImage, text, link, backgroundColor } = props
  return (
    <Wrapper>
      <Link href={link || "/"} >
        <Card backgroundColor={backgroundColor}>
            <Text>{text || "Flexfrisør"}</Text>
            <img
            className="icon"
            src={iconImage || "images/logos/logo02_v003.png" }
          />
        </Card>
        </Link>
    </Wrapper>
  )
}
