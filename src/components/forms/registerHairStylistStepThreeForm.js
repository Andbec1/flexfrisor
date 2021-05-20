import styled from "styled-components"
import Link from 'next/link'

export default function RegisterHairStylistStepThreeForm(props) {
    const registerUser = event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic
    }
    const { inputColor, borderColor } = props
    return (
      <form onSubmit={registerUser}>
        <Wrapper>
            <Link href="/registerhairstyliststeptwo">
                <PrevButtonWrapper inputColor={inputColor}>
                    <button id="button" type="submit">Forrige</button>
                </PrevButtonWrapper>
            </Link>
            <FormWrapper>
                <TermsWrapper inputColor={inputColor} borderColor={borderColor}>
                    <span className="terms">Privatlivspolitik, generelle betingelser og vilkår</span><br></br>
                    <div className="scrollBox">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies mi eget mauris. Odio facilisis mauris sit amet massa vitae tortor. Convallis tellus id interdum velit laoreet. Faucibus vitae aliquet nec ullamcorper sit amet risus. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Turpis in eu mi bibendum. Amet mattis vulputate enim nulla aliquet. Sed elementum tempus egestas sed. Quis varius quam quisque id. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Id donec ultrices tincidunt arcu non sodales. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Velit egestas dui id ornare arcu odio ut sem. Pulvinar elementum integer enim neque. Ut eu sem integer vitae justo eget magna fermentum. Sodales ut etiam sit amet nisl.

Feugiat nisl pretium fusce id velit. Suspendisse in est ante in nibh. Pellentesque habitant morbi tristique senectus et. Faucibus purus in massa tempor nec feugiat nisl. Elit eget gravida cum sociis natoque penatibus et magnis dis. Etiam non quam lacus suspendisse faucibus interdum posuere. Elit ut aliquam purus sit amet luctus. Nec tincidunt praesent semper feugiat nibh sed. Diam vel quam elementum pulvinar etiam. Arcu cursus euismod quis viverra nibh. Egestas purus viverra accumsan in. Scelerisque fermentum dui faucibus in ornare quam viverra. Est placerat in egestas erat imperdiet sed euismod nisi.
</div>
                    <br></br>
                    <input id="terms" name="terms" type="checkbox" required />
                    <label htmlFor="terms">Jeg accepterer privatlivspolitik og retningslinjer*.</label>
                </TermsWrapper>
            </FormWrapper>
            <Link href="/registerhairstylistcomplete">
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

const TermsWrapper = styled.div`
color: ${props => props.inputColor || "#000"};
margin-bottom: 1rem;

.terms {
    display: grid;
    font-size: 2em;
    text-align: center;
}

.scrollBox {
    overflow: scroll;
    color: #000;
    border: 1px solid black;
    padding: 2rem;
    margin: 1rem auto;
    max-height: 20rem;

}

#terms {
margin-right: .5rem;
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