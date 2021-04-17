import styled from "styled-components"
import { BodyIntro } from "../styles/TextStyles"

const Wrapper = styled.div`
position: fixed;
right: 0;
background: url("images/icons/Hair_v001.svg");
background-size: contain;
background-repeat: no-repeat;
backdrop-filter: brightness(50%) blur(10px);
padding: 8rem 4rem;
border-radius: 10px;
height: 100vh;
`

const ListItem01 = styled(BodyIntro)`
text-align: center;
padding-bottom: 1rem;
font-weight: 700;
document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
`

const ListItem02 = styled(BodyIntro)`
text-align: center;
padding-bottom: 1rem;
font-weight: 700;
`

const ListItem03 = styled(BodyIntro)`
text-align: center;
padding-bottom: 1rem;
font-weight: 700;
`

const ListItem04 = styled(BodyIntro)`
text-align: center;
padding-bottom: 1rem;
font-weight: 700;
`

const ListItem05 = styled(BodyIntro)`
display: grid;
background: #E78413;
text-align: center;
border-radius: 10px;
padding: .4rem 1rem .6rem 1rem;
font-weight: 700;
`

export default function SaloonNav() {
    return (
      <Wrapper>
          <ListItem01>Hvorfor?</ListItem01> 
          <ListItem02>Pris</ListItem02>
          <ListItem03>Lønberegning</ListItem03>
          <ListItem04>Rekruttering</ListItem04>
          <ListItem05>Opret profil</ListItem05>
      </Wrapper>
    )
  }