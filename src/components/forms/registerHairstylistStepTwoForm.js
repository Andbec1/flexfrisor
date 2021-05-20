import styled from "styled-components"
import Link from 'next/link'
import Image from "next/image";

export default function RegisterHairStylistStepTwoForm(props) {
    const registerUser = event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic
    }
    const { inputColor, borderColor } = props
    return (
      <form onSubmit={registerUser}>
        <Wrapper>
            <Link href="/registerhairstyliststepone">
                <PrevButtonWrapper inputColor={inputColor}>
                    <button id="button" type="submit">Forrige</button>
                </PrevButtonWrapper>
            </Link>
            <FormWrapper>
                <ResumeWrapper inputColor={inputColor} borderColor={borderColor}>
                    <span className="cv">CV</span><br></br>
                    <Image
                        src="/images/icons/orange/document_orange_v001.svg"
                        width="100"
                        height="150"
                        className="image"
                    />
                    <br></br>
                    <label htmlFor="resume">Vedhæft dit CV med billede</label><br></br>
                    <input id="resume" name="resume" type="file" accept="file_extention(.jpg, .png, .doc, .docx, .pdf)" required /><br></br>
                </ResumeWrapper>
                <CertificateWrapper inputColor={inputColor} borderColor={borderColor}>
                    <span className="diplom">Diplom</span><br></br>
                    <Image
                        src="/images/icons/orange/document_orange_v001.svg"
                        width="100"
                        height="150"
                        className="image"
                    />
                    <br></br>
                    <label htmlFor="certificate">Vedhæft dit diplom</label><br></br>
                    <input id="certificate" name="certificate" type="file" accept="file_extention(.jpg, .png, .doc, .docx, .pdf)" required /><br></br>
                </CertificateWrapper>
            </FormWrapper>
            <Link href="/registerhairstyliststepthree">
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
display: grid;
grid-template-columns: auto auto;
grid-gap: 1rem;
align-items: center;
justify-items: center;
`

const ResumeWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;
display: grid;
justify-items: center;

.cv {
    font-size: 2em;
    text-align: center;
    margin: 0 auto;
}

.image {
    margin: 0 auto;
    width: 5rem;
}

#resume {
  color: #000;
  margin-top: .5rem;
  margin-left: auto:
  margin-right: auto;
}
`

const CertificateWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;
display: grid;
justify-items: center;

.diplom {
    font-size: 2em;
    text-align: center;
    margin: 0 auto;
}

.image {
    margin: 0 auto;
    width: 5rem;
}

#certificate {
  color: #000;
  margin-top: .5rem;
  margin-left: auto:
  margin-right: auto;
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