import styled from "styled-components"
import { BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`

`

const CashWrapper = styled.div`
.cash {
    width: 35rem;
}
`

export default function CashPile02() {
    return (
      <Wrapper>
        <CashWrapper>
            <img src="images/icons/cash02.png" className="cash"/>
        </CashWrapper>
      </Wrapper>
    )
  }