import styled from "styled-components"
import CashPile02 from "../additionals/cashPile02"
import PriceRate from "../additionals/priceRate"
import { BodyMain, H2, BodyIntro } from "../styles/TextStyles"

const Wrapper = styled.div`
background: #E4B603;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
align-items: center;
justify-content: center;
margin: 0 auto;
padding: 0 2rem;
`


export default function SalarySection() {
    return (
      <Wrapper>
          <PriceRate />
          <CashPile02 />
      </Wrapper>
    )
  }