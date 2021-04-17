import styled from "styled-components"
import { H1, H2 } from "../styles/TextStyles"

const Wrapper = styled.div`
background: #fff;
border-radius: 50%;
width: 30rem;
height: 30rem;
display: grid;
grid-template-rows: 10rem 10rem 10rem;
justify-items: center;
align-items: center;
margin-left: 68%;
margin-top: -2rem;
margin-bottom: -1rem;
`

const Text01 = styled(H2)`
text-align: center;
font-weight: normal;
text-transform: uppercase;
color: #E4B603;
line-height: 1em;
`

const Text02 = styled(H1)`
text-align: center;
font-weight: normal;
font-size: 13em;
color: #E78413;
line-height: 1em;
`

const Text03 = styled(H2)`
text-align: center;
font-weight: normal;
text-transform: uppercase;
color: #E4B603;
line-height: 1em;
`

export default function HourRate() {
    return (
      <Wrapper>
          <Text01>Tjen op til</Text01>
          <Text02>200</Text02>
          <Text03>Kroner i timen</Text03>
      </Wrapper>
    )
  }