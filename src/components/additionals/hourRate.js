import styled from "styled-components"
import { H2 } from "../styles/TextStyles"

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
line-height: 3em;

.two_hundred {
font-size: 4em;
color: #E78413;
}
`

export default function HourRate() {
    return (
      <Wrapper>
          <Text01>Tjen op til<br></br><span className="two_hundred">200</span><br></br>Kroner i timen</Text01>
      </Wrapper>
    )
  }