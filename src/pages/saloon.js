import styled from "styled-components"
import Head from 'next/head'
import SaloonNav from "../components/nav/saloonNav"
import SaloonIntroSection from "../components/sections/saloonIntroSection"
import SaloonInfoSection from "../components/sections/saloonInfoSection"
import SalarySection from "../components/sections/salarySection"
import SaloonRecruitSection from "../components/sections/saloonRecruitSection"
import SalaryCalcSection from "../components/sections/salaryCalcSection"

const Wrapper = styled.div`
padding-top: 0; 
 margin: 0 auto;
 background: white;
`

export default function Saloon() {
    return (
      <Wrapper>
        <Head>
          <title>Flexfrisør - Mester</title>
        </Head>
        {/* <SaloonNav /> */}
        <SaloonIntroSection />
        <SaloonInfoSection />
        <SalarySection />
        <SalaryCalcSection />
        <SaloonRecruitSection />
      </Wrapper>
    )
  }