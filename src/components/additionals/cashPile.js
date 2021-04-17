import styled from "styled-components"
import { BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`
position: absolute;
`

const CashWrapper = styled.div`
.cash {
    width: 35rem;
}
`

export default function CashPile() {
    return (
      <Wrapper>
        <CashWrapper>
            <img src="images/icons/cash.png" className="cash"/>
        </CashWrapper>
      </Wrapper>
    )
  }