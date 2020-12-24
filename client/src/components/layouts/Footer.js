import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterContainer>
            <span style={{color: '#fff',left: "1rem", top: "1rem",position: "relative"}}>
                &copy;{new Date().getFullYear()} All Rights Reserved. Techie Blogger
            </span>
        </FooterContainer>
            
        
    )
}

export default Footer

const FooterContainer = styled.footer`
background: #344;
height: 4rem;
width: 100%;
bottom: 10px;
height: 60px;

@media(max-width:765px){
    span{
        font-size: 12px;
    }
  }
  @media(max-width:300px){
      span{
          font-size: 12px;
      }
    }
  

`;

