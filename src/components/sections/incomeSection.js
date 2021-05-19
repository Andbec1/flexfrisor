import styled from "styled-components"
import CashPile from "../additionals/cashPile"
import HourRate from "../additionals/hourRate"
import { BodyMain, H2, BodyIntro } from "../styles/TextStyles"

const Wrapper = styled.div`
background: #E78413;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
align-items: center;
justify-content: center;
margin: 0 auto;
padding: 0 2rem;
`


export default function IncomeSection() {
    return (
      <Wrapper>
          <CashPile />
            <HourRate />
      </Wrapper>
    )
  }