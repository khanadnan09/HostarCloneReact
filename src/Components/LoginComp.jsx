import React from 'react'
import styled from 'styled-components'
import loginBackground from '../images/login-background.jpg'
import cta from '../images/cta-logo-two.png'
import ctaOne from '../images/cta-logo-one.svg'
const LoginComp = () => {
  return (
    <LoginContainer>
        <Image src={loginBackground} alt="..." />
        <LoginWrapper>
            <img src={ctaOne} alt="..." />
            <Button>GET ALL THERE</Button>
            <Text>Get Premier Access to Raya and the Last Dragon for an additional free with a Disney+ subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1.</Text>
            <img src={cta} alt="..." style={{minHeight:"30px"}} />
        </LoginWrapper>
    </LoginContainer>
  )
}
const LoginContainer = styled.div`
    color: #fff;
    height: calc(100vh - 71.7px);
    position: relative;
`
const Image = styled.img`
     width: 100%;
       height: 100%;
       object-fit: cover;
       position: absolute;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
       z-index: 0;
`
const LoginWrapper = styled.div`
       z-index: 99;
    position: absolute;
    background-color: transparent;
    width: 90%;
    height: 100%;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        background-color: transparent;
        max-width: 500px;
        min-width: auto;
        width: 100%;
    }
`
const Button = styled.button`
     background-color: #0053a5;
     font-weight: 600;
     border-radius: 5px;
    border: none;
    color: #fff;
    padding: 17px;
    font-size: 18px;
    width: 100%;
    max-width: 500px;
    margin: 20px 0px;
    cursor: pointer;
    transform: 450ms;
    :hover{
        background-color: #003c79;
    }
`
const Text = styled.div`
       background-color: transparent;
    width: 100%;
    font-size: 15px;
    max-width: 700px;
    margin: 6px 0px 20px 0px;
    line-height: 22px;
    color: #c1c1c1;
    font-weight: 500;
    @media screen and (max-width: 800px) {
        font-size: 13px;
           }
`
export default LoginComp