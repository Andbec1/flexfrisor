import styled from "styled-components"
import Link from 'next/link'

export default function RegisterHairStylistStep01Form(props) {
    const registerUser = event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic
    }
    const { inputColor, borderColor } = props
    return (
      <form onSubmit={registerUser}>
        <Wrapper>
        <Link href="/registerhairstylist">
        <PrevButtonWrapper inputColor={inputColor}>
        <button id="button" type="submit">Forrige</button>
        </PrevButtonWrapper>
        </Link>
        <FormWrapper>
        <ContentWrapper>
        <NameWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="navn">Navn</label><br></br>
        <input id="name" type="text" autoComplete="name" placeholder="Ex: John Doe" required /><br></br>
        </NameWrapper>
        <AdressWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="adress">Adresse</label><br></br>
        <input id="adress" type="text" autoComplete="adress" placeholder="Ex: Egegaardsstræde 1. th." required /><br></br>
        </AdressWrapper>
        <PostalCodeWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="postnr">Postnr</label><br></br>
        <input id="postal" type="text" autoComplete="postalCode" placeholder="Ex: 1250" required /><br></br>
        </PostalCodeWrapper>
        <EmailWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="email">Email</label><br></br>
        <input id="email" type="text" autoComplete="email" placeholder="Ex: mig@mail.com" required /><br></br>
        </EmailWrapper>
        <PhoneWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="phone">Telefon</label><br></br>
        <input id="phone" type="tel" autoComplete="phone" placeholder="Ex: 08080808" required /><br></br>
        </PhoneWrapper>
        <TownWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="town">By</label><br></br>
        <input id="town" type="text" autoComplete="town" placeholder="Ex: Birkerød" required /><br></br>
        </TownWrapper>
        </ContentWrapper>
        <Content02Wrapper>
          <FillWrapper>
        <AgeWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="age">Alder</label><br></br>
        <input id="age" type="text" autoComplete="age" placeholder="Ex: 25" required /><br></br>
        </AgeWrapper>
        <ExperienceWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="experience">Erfaring</label><br></br>
        <input id="experience" type="text" autoComplete="experience" placeholder="Ex: 5 år" required /><br></br>
        </ExperienceWrapper>
        <SocialWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="social">CPR-nummer</label><br></br>
        <input id="social" type="text" autoComplete="social" placeholder="xxxxxx-xxxx" required /><br></br>
        </SocialWrapper>
        <AccountWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="account">Kontonummer</label><br></br>
        <input id="account" type="text" autoComplete="account" placeholder="xxxx xxxxxxxxxx" required /><br></br>
        </AccountWrapper>
        </FillWrapper>
        <AboutWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="about">Skriv kort om dig selv</label><br></br>
        <textarea id="about" rows="10" cols="30" autoComplete="about" /><br></br>
        </AboutWrapper>
        </Content02Wrapper>
        <UploadWrapper inputColor={inputColor} borderColor={borderColor}>
        <label htmlFor="upload">Vedhæft dit billede</label><br></br>
        <input id="upload" type="file" accept="image/*" required /><br></br>
        </UploadWrapper>
        </FormWrapper>
        <Link href="/registerhairstyliststep02">
        <NextButtonWrapper inputColor={inputColor}>
        <button id="button" type="submit">Næste</button>
        </NextButtonWrapper>
        </Link>
        </Wrapper>
      </form>
    )
  }
  
const Wrapper = styled.div`
display: grid;
grid-template-columns: 10rem auto 10rem;
align-items: center;
justify-items: center;
grid-gap: 1rem;
`

const FormWrapper = styled.div`
background: #fff;
border-radius: 30px;
margin: 0 auto;
padding: 2rem;
`

const ContentWrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;
margin: 0 auto;
grid-template-columns: auto auto auto;
grid-temaplte-rows: auto auto;
grid-gap: 1rem;
`

const Content02Wrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;
margin: 0 auto;
grid-template-columns: auto auto;
grid-gap: 1rem;
`

const FillWrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;
margin: 0 auto;
grid-template-columns: auto auto;
grid-temaplte-rows: auto auto;
grid-gap: 1rem;
`

const NameWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#name {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const AdressWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#adress {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const PostalCodeWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#postal {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const EmailWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#email {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const PhoneWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#phone {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const TownWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#town {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const AgeWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#age {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const ExperienceWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#experience {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const SocialWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#social {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const AccountWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#account {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const AboutWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#about {
  margin-top: .5rem;
  color: ${props => props.inputColor || "#000"};
  padding: 1rem;
  border-color: ${props => props.borderColor || "#222"};
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
`

const UploadWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

#upload {
  color: #000;
  margin-top: .5rem;
}
`

const NextButtonWrapper = styled.div`
display: grid;
justify-content: center;

#button {
background: #fff;
padding: 1rem;
text-align: center;
font-size: 2em;
width: 10rem;
height: 5rem;
border-radius: 10px 50px 50px 10px;
border: none;
color: ${props => props.inputColor || "#000"};
}
`

const PrevButtonWrapper = styled.div`
display: grid;
justify-content: center;

#button {
background: #fff;
padding: 1rem;
text-align: center;
font-size: 2em;
width: 10rem;
height: 5rem;
border-radius: 50px 10px 10px 50px;
border: none;
color: ${props => props.inputColor || "#000"};
}
`