import styled from "styled-components"
import { H1, H2 } from "../styles/TextStyles"

const Wrapper = styled.div`
background: #fff;
border-radius: 50%;
width: 30rem;
height: 30rem;
display: grid;
justify-content: center;
align-items: center;
margin: 0 auto;
`

const Text01 = styled(H2)`
text-align: center;
font-weight: normal;
text-transform: uppercase;
color: #E4B603;
line-height: 2em;

.two_sixtyfive {
font-size: 4em;
color: #E78413;
}
`

export default function PriceRate() {
    return (
      <Wrapper>
          <Text01>Fra<br></br><span className="two_sixtyfive">265</span><br></br>Kroner i timen<br></br>Exl. Moms*</Text01>
      </Wrapper>
    )
  }