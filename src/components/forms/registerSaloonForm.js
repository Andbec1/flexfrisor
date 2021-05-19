import styled from "styled-components"
import Link from 'next/link'

export default function registerSaloonForm(props) {
    const registerUser = event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic
    }
    const { inputColor } = props
    return (
      <form onSubmit={registerUser}>
        <EmailWrapper inputColor={inputColor}>
        <label htmlFor="email">Email</label><br></br>
        <input id="email" type="text" autoComplete="email" required /><br></br>
        </EmailWrapper>
        <PasswordWrapper inputColor={inputColor}>
        <label htmlFor="Password">Kode</label><br></br>
        <input id="password" type="password" autoComplete="password" required /><br></br>
        </PasswordWrapper>
        <Link href="/registersaloonstep01">
        <ButtonWrapper inputColor={inputColor}>
        <button id="button" type="submit">Opret bruger</button>
        </ButtonWrapper>
        </Link>
      </form>
    )
  }
  
const EmailWrapper = styled.div`
color: #000;
margin-bottom: 1rem;

#email {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-radius: 10px;
  border: none;
  width: 34rem;
}
`

const PasswordWrapper = styled.div`
color: #000;
margin-bottom: 2rem;

#password {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-radius: 10px;
  border: none;
  width: 34rem;
}
`

const ButtonWrapper = styled.div`
display: grid;
justify-content: center;

#button {
background: #fff;
padding: 1rem;
text-align: center;
font-size: 2em;
width: 14rem;
border-radius: 10px;
border: none;
color: ${props => props.inputColor || "#000"};
}
`