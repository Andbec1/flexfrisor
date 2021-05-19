import styled from "styled-components"
import InfoCounter from "../additionals/infoCounter"

const Wrapper = styled.div`
 padding-top: 5rem; 
 margin: 0 auto;
 background: white;
`

const InfoWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 1rem;
`

export default function InfoSection() {
    return (
      <Wrapper>
        <InfoWrapper>
          <InfoCounter 
            icon="images/icons/orange/Scissor_orange_v001.svg"
            title="654"
            text="Frisører"
          />
          <InfoCounter 
            icon="images/icons/orange/location.svg"
            title="12.501"
            text="Saloner hjulpet"
          />
          <InfoCounter 
            icon="images/icons/orange/watch.svg"
            title="512.365"
            text="Timer klippet"
          />
          <InfoCounter 
            icon="images/icons/orange/hair_orange_v001.svg"
            title="12.054.025"
            text="Hårstrå klippet"
          />
        </InfoWrapper>
      </Wrapper>
    )
  }