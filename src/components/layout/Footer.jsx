import styled from "styled-components"
import Link from 'next/link'
import Image from 'next/image'

const Wrapper = styled.div`
 position: fixed;
 left: 0;
 bottom: 0;
 width: 100%;
 `

const ContentWrapper = styled.div`
 text-align: center;
 padding: 1.875rem;
`

export default function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Link href="https://www.codeshape.io" >
            <a target="_blank">Made by Code Shape</a> 
        </Link>  
      </ContentWrapper>
    </Wrapper>
  )
}
