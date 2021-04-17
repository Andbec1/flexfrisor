import styled from "styled-components"
import SalaryCard01 from "../cards/salaryCard01"
import SalaryCard02 from "../cards/salaryCard02"
import { H1, H3, BodyMain } from "../styles/TextStyles"

const Wrapper = styled.div`
margin-top: 5rem;
`

const Title = styled(H1)`
color: #E4B603;
text-align: center;
font-weight: normal;
margin-bottom: 5rem;
margin-right: 20rem;
`

const CardWrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
`

export default function SalaryCalcSection() {
    return (
      <Wrapper>
          <Title>Lønberegning 2018</Title>
          <CardWrapper>
            <SalaryCard01 
                title="Lønomkostning"
                text="Hvis en svend har en grundløn på kr. 9.990,- / pr.14 dage, er 
                den direkte timeløn før provisions beregning Kr. 135,- Men 
                den virkelige timeløn er en helt anden. Ud over min. 15 % 
                provision, skal der yderligere lægges nedenstående til den 
                direkte timeløn:"
            />
            <SalaryCard02 
            title="Herefter kan den virkelige timeløn se
            således ud:"
            text="Tallene til VENSTRE er din svends direkte timeløn 
            (altså fast timeløn minus provision)
            
            Tallene til HØJRE er din svends virkelige timeløn (fast timeløn + 
            provision* + ovenstående tillæg )
            *provisionen er udregnet efter ugentlig omsætning på kr. 15.000,-"
            />
          </CardWrapper>
      </Wrapper>
    )
  }