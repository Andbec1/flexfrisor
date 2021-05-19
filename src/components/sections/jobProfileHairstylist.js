import styled from "styled-components"
import { H1, H3, BodyMain } from "../styles/TextStyles"
import Image from "next/image";

const Wrapper = styled.div`
padding: 2rem;
background: #fff;
border-radius: 30px;
border: 2px solid #E78413;;
`

const Title = styled(H3)`
color: #E78413;
text-align: center;
font-weight: normal;
margin-bottom: 2rem;
`

const ContentWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const HairstylistWrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;

.image {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: #000;
    margin: 0 auto;
}
`

const Name = styled(H3)`
color: #E78413;
font-weight: normal;
text-align: center;
`

const Description = styled(BodyMain)`
background: #E78413;
padding: 2rem;
border-radius: 30px;
`

const Period = styled.div``

const PeriodTitle = styled(BodyMain)`
color: #000;
`

const PeriodContent = styled.div`
background: #E78413;
border-radius: 30px;
padding: 2rem;
`

const StartDate = styled.div``

const StartDateTitle = styled(BodyMain)`
color: #000;
`

const StartDateContent = styled.div`
background: #E78413;
border-radius: 30px;
padding: 2rem;
`

const Hours = styled.div``

const HoursTitle = styled(BodyMain)`
color: #000;
`

const HoursContent = styled.div`
background: #E78413;
border-radius: 30px;
padding: 2rem;
`

const Town = styled.div``

const TownTitle = styled(BodyMain)`
color: #000;
`

const TownContent = styled.div`
border: 2px solid #E78413;
border-radius: 30px;
padding: 2rem;
color: #E78413;
display: grid;
grid-template-columns: auto auto;

.image {
    background: #E78413;
    padding: 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}
`

const Salary = styled.div``

const SalaryTitle = styled(BodyMain)`
color: #000;
`

const SalaryContent = styled(BodyMain)`
background: #E78413;
border-radius: 30px;
padding: 2rem;
`

const Booking = styled.div`
.switch {
    position: relative;
    display: inline-block;
    width: 10rem;
    height: 3rem;
  }
  
  .switch input {display:none;}
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2ab934;
    -webkit-transition: .4s;
    transition: .4s;
    border: 2px solid #E78413;
     border-radius: 30px;
     overflow: hidden;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 5rem;
    width: 5rem;
    left: -3rem;
    background-color: #E78413;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #ca2222;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    transform: translateX(11rem);
  }

  .slider:after
  {
   content:'Ledig';
   color: white;
   display: block;
   position: absolute;
   transform: translate(-50%,-50%);
   top: 50%;
   left: 50%;
   font-size: 1.5em;
   font-family: Verdana, sans-serif;
  }
  
  input:checked + .slider:after
  {  
    content:'Booket';
  }
`

const BookingTitle = styled(BodyMain)`
color: #000;
`

const ButtonWrapper = styled.div`

#button {
background: #E78413;
padding: 1rem;
text-align: center;
font-size: 1.5em;
border-radius: 10px;
border: none;
color: #fff;
}
`

export default function JobProfileHairstylist() {
    return (
      <Wrapper>
          <Title>Min jobprofil</Title>
        <ContentWrapper>
      <HairstylistWrapper>
        <Image
            src="/images/icons/orange/Scissor_orange_v001.svg"
            width="150"
            height="150"
            className="image"
    />
        <Name>Andreas, 27</Name>
        <Description>
      Lorem ipsum dolor sit amet, consectetur
do eiusmod tempor incididunt ut labore et dolore 
aliqua. Aliquam id diam maecenas ultricies mi 
Odio facilisis mauris sit amet massa vitae tortor.
id interdum velit laoreet. Faucibus vitae aliquet 
ullamcorper sit amet risus. Luctus venenatis 
fringilla urna porttitor rhoncus. Turpis in eu mi. 
Amet mattis vulputate enim nulla aliquet. Sed.
      </Description>
      </HairstylistWrapper>
      <Period>
          <PeriodTitle>Periode:</PeriodTitle>
          <PeriodContent>
      <input type="checkbox" id="period1" name="period1" value="0-1 måned"/>
<label for="period1"> 0-1 måned</label><br></br>
<input type="checkbox" id="period2" name="period2" value="1-3 måneder"/>
<label for="period2"> 1-3 måneder</label><br></br>
<input type="checkbox" id="period3" name="period3" value="3-6 måneder"/>
<label for="period3"> 3-6 måneder</label><br></br>
<input type="checkbox" id="period4" name="period4" value="Ubestemt"/>
<label for="period4"> Ubestemt</label>
</PeriodContent>
      </Period>
      <StartDate>
          <StartDateTitle>Startdato:</StartDateTitle>
          <StartDateContent>
      <input type="checkbox" id="startdate1" name="startdate1" value="hurtigst"/>
<label for="startdate1"> Hurtigst muligt</label><br></br>
<input type="checkbox" id="startdate2" name="startdate2" value="1 uge"/>
<label for="startdate2"> Om en uge</label><br></br>
<input type="checkbox" id="startdate3" name="startdate3" value="1 måned"/>
<label for="startdate3"> Om en måned</label><br></br>
<input type="checkbox" id="startdate4" name="startdate4" value="1+ måned"/>
<label for="startdate4"> Om mere end en måned</label>
</StartDateContent>
      </StartDate>
      <Hours>
          <HoursTitle>Arbejdsmængde:</HoursTitle>
          <HoursContent>
      <input type="checkbox" id="hours1" name="hours1" value="deltid"/>
<label for="hours1"> Deltid</label><br></br>
<input type="checkbox" id="hours2" name="hours2" value="fuldtid"/>
<label for="hours2"> Fuldtid</label><br></br>
</HoursContent>
      </Hours>
      <Town>
          <TownTitle>By:</TownTitle>
          <TownContent>
  <input type="text" id="town" name="town" placeholder="Indtast by"/>
  <Image
            src="/images/icons/white/location_white.svg"
            width="150"
            height="150"
            className="image"
    /> 
          </TownContent>
      </Town>
      <Salary>
          <SalaryTitle>Min løn:</SalaryTitle>
          <SalaryContent>220,- i timen</SalaryContent>
      </Salary>
      <Booking>
          <BookingTitle>Status:</BookingTitle>
      <label class="switch">
 <input type="checkbox" id="togBtn" />
 <div class="slider round">
 </div>
</label>
      </Booking>
      <ButtonWrapper>
        <button id="button" type="submit">Gem</button>
        </ButtonWrapper>
      </ContentWrapper>
      </Wrapper>
    )
  }