import styled from "styled-components"
import Head from 'next/head'
import HairStylistIntroSection from "../components/sections/hairStylistIntroSection"
import HairstylistInfoSection from "../components/sections/hairStylistInfoSection"
import IncomeSection from "../components/sections/incomeSection"
import HairRecruitSection from "../components/sections/hairRecruitSection"
import HairStylistNav from "../components/nav/hairStylistNav"

const Wrapper = styled.div`
padding-top: 0; 
 margin: 0 auto;
 background: white;
`

export default function Hairstylist() {
    return (
      <Wrapper>
        <Head>
          <title>Flexfrisør - Frisør</title>
        </Head>
        {/* <HairStylistNav /> */}
        <HairStylistIntroSection />
        <HairstylistInfoSection />
        <IncomeSection />
        <HairRecruitSection />
      </Wrapper>
    )
  }