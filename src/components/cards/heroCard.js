import styled from "styled-components"
import { H2 } from "../styles/TextStyles"
import Link from 'next/link'

const Wrapper = styled.div`
 margin: 0 auto;
 max-width: 70rem;
`

const Card = styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
border: 15px solid #F1E579;
background: rgba(35,35,35,0.4);
border-radius: 30px;
display: grid;
grid-template-columns: auto auto;
justify-items: center;
align-items: center;

.icon {
  height: 150px;
  width: 150px;
}
`

const Text = styled(H2)`
color: #F1E579;
width: 17rem;
padding-right: 2rem;
`

export default function heroCard(props) {
    const { iconImage, text, link } = props
  return (
    <Wrapper>
      <Link href={link || "/"} >
        <Card>
        <img
            className="icon"
            src={iconImage || "images/logos/logo02_v003.png" }
          />
            <Text>{text || "Flexfrisør"}</Text>
        </Card>
        </Link>
    </Wrapper>
  )
}
