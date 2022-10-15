import React from 'react'
import styled from 'styled-components'
import play from '../images/play-icon-white.png'
import watchlist from '../images/watchlist-icon.svg'
import share from '../images/share.png'
import { Link } from "react-router-dom";
const SingleMovie = () => {
    const selctCard = JSON.parse(localStorage.getItem("reduxState"))
    const cardData = selctCard.card[0]
    // console.log(cardData)
    return (
        <>
            <MovieContainer>
                <DescribeWrapper>
                    <Wrap>
                        <Subscribe>SUBSCRIBER</Subscribe>
                        <Title>{cardData.name}</Title>
                        <Conditions>{cardData.cond}</Conditions>
                        <Description>{cardData.desc}</Description>
                        <Controls>
                            <Link to="movie" style={{ textDecoration: "none" }}><span style={{ color: "#fff" }}><img src={play} alt="..." />Watch Movie</span></Link>
                            <OtherControl>
                                <span>
                                    <img src={watchlist} alt="" />Watchlist
                                </span>
                                <span>
                                    <img src={share} alt="" />Share
                                </span>
                            </OtherControl>
                        </Controls>
                    </Wrap>
                </DescribeWrapper>
                <MobileWatch>
                    <Subscribe>SUBSCRIBER</Subscribe>
                    <Link to="movie" style={{ textDecoration: "none" }}><span style={{ color: "#fff" }}><ion-icon name="play"></ion-icon>Watch Movie</span>
                    </Link>
                </MobileWatch>
                <ImageWrapper>
                    <img src={cardData.img} alt="..." />
                </ImageWrapper>
            </MovieContainer>

            <MobileDescription>
                <MobileTitle>{cardData.name}</MobileTitle>
                <MobileConditions>{cardData.cond}</MobileConditions>
                <MobileDescriptions>{cardData.desc}</MobileDescriptions>
                <SocialMedia><ion-icon name="add-outline"></ion-icon><ion-icon name="logo-facebook"></ion-icon><ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="link-outline"></ion-icon>
                </SocialMedia>
            </MobileDescription>

            <Heading>Trailers & Extras</Heading>
            <TrailerContainer>
                <Trailer>
                    <img src={cardData.img} alt="..." />
                    <TextWrapper>
                        <p>1 min</p>
                        <Link to="movie" style={{ textDecoration: "none", color: "#fff" }}><span><img src={play} alt="..." />{cardData.name} - Trailer</span></Link>
                    </TextWrapper>
                </Trailer>
                <Trailer>
                    <img src={cardData.img} alt="..." />
                    <TextWrapper>
                        <p>58 sec</p>
                        <Link to="movie" style={{ textDecoration: "none", color: "#fff" }}>  <span><img src={play} alt="..." />{cardData.name} - Most Viewed Scene </span></Link>
                    </TextWrapper>
                </Trailer>
            </TrailerContainer>
        </>
    )
}
const MobileWatch = styled.div`
display: none;
     position: absolute;
     bottom: 34px;
    left: 15px;
     @media screen and (max-width: 860px){
        display: block;
       }
       span{
        display: flex;
        align-items: center;
        font-weight: 700;
        cursor: pointer;
        ion-icon{
            padding-right: 7px;
        }
       }
  `
const MobileDescription = styled.div`
     padding: 0px 15px;
     display: none;
     @media screen and (max-width: 860px){
        display: block;
       }
  `
const MobileTitle = styled.div`
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 7px;
  `
const MobileConditions = styled.div`
        color: #0053ad;
        font-size: 11px;
        margin-bottom: 7px;
        font-weight: 700;
  `
const MobileDescriptions = styled.div`
    color: #b3b3b3;
    font-size: 13px;
    line-height: 20px;
  `
const SocialMedia = styled.div`
  font-size: 22px;
    color: #fff;
    ion-icon{
        padding: 10px 20px 10px 0;
    }
  `
const Heading = styled.h3`
  margin: 15px 70px;
    color: rgb(255, 255, 255);
    @media screen and (max-width: 860px){
    margin: 15px 15px !important;
       }
  `
const TrailerContainer = styled.div`
   display: flex;
   margin: 15px 70px;
   padding-bottom: 10px;
   @media screen and (max-width: 860px){
    margin: 15px 15px !important;
    overflow-x: auto;
       }
  `
const TextWrapper = styled.div`
    position: absolute;
    top: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
        p{
            color: #fff;
            font-size: 11px;
            background-color: transparent;
            margin-left: auto;
            font-weight: 700;
            padding: 10px;
        }
    span {
        font-weight: 600;
        background-color: transparent;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #fff;
        font-size: 13px;
        padding: 10px;
        z-index: 1;
        img{
            height: 20px;
            width: 20px;
            background-color: transparent;
        }
        ::before{
            content: "";
            position: absolute;
            background-image: linear-gradient(to bottom,rgba(4,8,15,0),#19213940,#192139f0);
            height: 100%;
            width: 100%;
            left: 0;
            bottom: 0;
            z-index: -1;
            border-bottom-left-radius: 5px;
             border-bottom-right-radius: 5px;
        }
    }
  `
const Trailer = styled.div`
  position: relative; 
  margin-right:20px;
  cursor: pointer;
  -webkit-transition: transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    -o-transition: transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    -webkit-transition: -webkit-transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    transition: -webkit-transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    -o-transition: -o-transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    transition: transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    transition: transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93), -webkit-transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93), -o-transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    transform-origin: center;
    z-index: 999999;
  img {
    height: 150px;
    width: 210px;
    border-radius: 5px;
    @media screen and (max-width: 860px){
                height: 114px;
             }
    }
    :hover{
        transform: scale(1.15);
    }
    @media screen and (max-width: 860px){
        :hover{
        transform: scale(1);
    }
       }
`
const MovieContainer = styled.div`
    margin: 15px 70px;
    display: flex;
    color: #fff;
    height: 400px;
    position: relative;

    @media screen and (max-width: 860px){
    margin: 15px 0px !important;
    height: auto;
    ::before{
            content: "";
            position: absolute;
            background-image: linear-gradient(to bottom,rgba(4,8,15,0),#19213940,#192139f0);
            height: 56%;
            width: 100%;
            left: 0;
            bottom: 0;
        }
       }
`
const DescribeWrapper = styled.div`
    background-color: #030b17;
    border-bottom-left-radius:5px;
    border-top-left-radius:5px;
    position: relative;
    height: 400px;
    width: 100%;

    ::before {
        content: "";
        position: absolute;
        right: -214px;
        top: 0;
        background: linear-gradient(to right,#030b17,rgba(0,0,0,0));
        z-index: 11;
        height: 100%;
        width: 214px;
        }
        @media screen and (max-width: 860px){
        display:none;
       }
`
const Wrap = styled.div`
      position: absolute;
    word-wrap: break-word;
    top: 55px;
    left: 0px;
    padding-left: 55px;
    z-index: 999;
    width: max-content;
    max-width: 470px;
`
const ImageWrapper = styled.div`
        img{
            border-bottom-right-radius:5px;
            border-top-right-radius:5px;
            @media screen and (max-width: 860px){
             width: 100vw !important;
             max-height:380px;
             min-height: 250px;
           }
        }
`
const Subscribe = styled.div`
    font-size: 12px;
    color: #d5b300;
    font-weight: bold;
    letter-spacing: .6px;
    padding-bottom: 17px;
`
const Title = styled.div`
    background-color: transparent;
    font-size: 30px;
    font-weight: 600;
    width: 123%;
    margin-bottom: 20px;
`
const Conditions = styled.div`
       margin-bottom: 20px;
       font-size: 15px;
       font-weight: 600;
       color: #bebebe;
`
const Description = styled.div`
     background-color: transparent;
    font-size: 16px;
    color: #bebebe;
    font-weight: 400;
    line-height: 22px;
    width: 120%;
    margin-bottom: 20px;
`
const Controls = styled.div`
    margin-top: 50px;
    background-color: transparent;      
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        background-color: transparent;      
        display: flex;
        align-items: center;
        font-weight: 600;
        cursor: pointer;
        img{
            background-color: transparent;      
            padding-right: 10px;   
        }
    }
`
const OtherControl = styled.div`
   display: flex;
   background-color: transparent;     
   position: relative;
    left: 130px; 
    span {
        display: flex;
        flex-direction: column;
        padding: 0 40px 0 0;
        font-size: 14px;
        font-weight: 500;
        color: #979797;
        img{
            background-color: transparent;      
            height: 20px;
        }
    }
`
export default SingleMovie