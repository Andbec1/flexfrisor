import styled from "styled-components"
import CashPile from "../additionals/cashPile"
import HourRate from "../additionals/hourRate"
import { BodyMain, H2, BodyIntro } from "../styles/TextStyles"

const Wrapper = styled.div`
width: 100%;
background: #E78413;
display: grid;
grid-template-columns: auto auto;
align-items: center;
padding-left: 20rem;
z-index: 1;
`


export default function IncomeSection() {
    return (
      <Wrapper>
          <CashPile />
            <HourRate />
      </Wrapper>
    )
  }