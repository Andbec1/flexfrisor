import styled from "styled-components"
import { H2, BodyMain } from "../styles/TextStyles"
import CalculationsCard from "./calculationsCard"

const Wrapper = styled.div`
 padding-bottom: 8rem;
 margin: 0 auto;
width: 40rem;
`

const Card = styled.div`
background: #F1E579;
border-radius: 30px;
height: 60rem;
`

const Title = styled(H2)`
padding: 2rem 0 0 5rem;
color: #E4B603;
padding-right: 2rem;
font-weight: normal;
`

const Text = styled(BodyMain)`
color: #000;
padding: 1rem 5rem 0 5rem;
`

const Text02 = styled(BodyMain)`
margin-top: -2.5rem;
margin-left: 2rem;
color: #000;
font-size: 1em;

.dofk {
    color: #0034FF;
    text-decoration: underline;
}
`

export default function SalaryCard02(props) {
    const { title, text } = props
  return (
    <Wrapper>
        <Card>
            <Title>{title || "Flexfrisør"}</Title>
            <Text>{text || "Flexfrisør"}</Text>
            <CalculationsCard />
            <Text02>Se i øvrigt <span className="dofk">www.dofk.dk</span> under MEDLEMSINFO og beregn selv!</Text02>
        </Card>
    </Wrapper>
  )
}
