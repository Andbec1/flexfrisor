import styled from "styled-components"
import { H1, H2 } from "../styles/TextStyles"

const Wrapper = styled.div`
background: #fff;
border-radius: 50%;
width: 30rem;
height: 30rem;
display: grid;
grid-template-rows: 5rem 10rem 9rem 1rem;
grid-gap: 0;
justify-items: center;
align-items: center;
`

const Text01 = styled(H2)`
text-align: center;
font-weight: normal;
text-transform: uppercase;
color: #E4B603;
`

const Text02 = styled(H1)`
text-align: center;
font-weight: normal;
font-size: 13em;
color: #E78413;
`

const Text03 = styled(H2)`
text-align: center;
font-weight: normal;
text-transform: uppercase;
color: #E4B603;
`

const Text04 = styled(H2)`
text-align: center;
font-weight: normal;
text-transform: uppercase;
color: #E4B603;
`

export default function PriceRate() {
    return (
      <Wrapper>
          <Text01>Fra</Text01>
          <Text02>265</Text02>
          <Text03>Kroner i timen</Text03>
          <Text04>Exl. Moms*</Text04>
      </Wrapper>
    )
  }