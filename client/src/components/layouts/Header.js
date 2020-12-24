import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return <MainContainer><h1>Welcome to <br/>Techie Blog</h1></MainContainer>
}

export default Header

//Main container
const MainContainer = styled.header`
background: url(../../images/header-bg.jpg)no-repeat center/cover;
height: 25rem;
h1 {
    position: absolute;
    top: 25%;
    left: 50%;
    color: #fff;
    font-weight: 900;
    transform: translate(-50%,-50%);
}
@media(max-width:765px){
  h1{
      font-size: 26px;
  }
}
@media(max-width:300px){
    h1{
        font-size: 26px;
    }
  }


`;
