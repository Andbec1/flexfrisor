import styled from "styled-components"
import CashPile02 from "../additionals/cashPile02"
import PriceRate from "../additionals/priceRate"
import { BodyMain, H2, BodyIntro } from "../styles/TextStyles"

const Wrapper = styled.div`
width: 100%;
background: #E4B603;
display: grid;
grid-template-columns: 33rem 35rem;
align-items: center;
z-index: 1;
`


export default function SalarySection() {
    return (
      <Wrapper>
          <PriceRate />
          <CashPile02 />
      </Wrapper>
    )
  }