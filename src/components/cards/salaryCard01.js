import styled from "styled-components"
import { H2, BodyMain } from "../styles/TextStyles"
import BenefitsCard from "./benefitsCard"

const Wrapper = styled.div`
 padding-bottom: 8rem;
 margin: 0 auto;
max-width: 40rem;
`

const Card = styled.div`
background: #F1E579;
border-radius: 30px;
`

const Title = styled(H2)`
padding: 2rem;
color: #E4B603;
text-align: center;
font-weight: normal;
`

const Text = styled(BodyMain)`
color: #000;
height: 14rem;
width: 30rem;
margin: 0 auto;
`

const Text02 = styled(BodyMain)`
height: 2rem;
margin-top: -2.5rem;
margin-left: 2rem;
color: #000;
font-size: 1em;

.dofk {
    color: #0034FF;
    text-decoration: underline;
}
`

export default function SalaryCard01(props) {
    const { title, text } = props
  return (
    <Wrapper>
        <Card>
            <Title>{title || "Flexfrisør"}</Title>
            <Text>{text || "Flexfrisør"}</Text>
            <BenefitsCard />
            <Text02></Text02>
        </Card>
    </Wrapper>
  )
}
