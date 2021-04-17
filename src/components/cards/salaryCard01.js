import styled from "styled-components"
import { H2, BodyMain } from "../styles/TextStyles"
import BenefitsCard from "./benefitsCard"

const Wrapper = styled.div`
 padding-bottom: 8rem;
 margin: 0 auto;
width: 40rem;
`

const Card = styled.div`
background: #F1E579;
border-radius: 30px;
`

const Title = styled(H2)`
padding: 2rem 0 0 5rem;
color: #E4B603;
width: 17rem;
padding-right: 2rem;
font-weight: normal;
`

const Text = styled(BodyMain)`
color: #000;
padding: 1rem 5rem 0 5rem;
`

export default function SalaryCard01(props) {
    const { title, text } = props
  return (
    <Wrapper>
        <Card>
            <Title>{title || "Flexfrisør"}</Title>
            <Text>{text || "Flexfrisør"}</Text>
            <BenefitsCard />
        </Card>
    </Wrapper>
  )
}
