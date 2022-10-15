import React, { useState } from 'react'
import styled from 'styled-components'
import star from '../images/star1.webp'
import disney from '../images/disney1.webp'
import pixar from '../images/pixar1.webp'
import marvel from '../images/marvel1.webp'
import geo from '../images/geo1.webp'
import disneyVid from '../videos/disney.mp4'
import marvelVid from '../videos/marvel.mp4'
import geographicVid from '../videos/geo.mp4'
import { Link } from "react-router-dom";
import pixarVid from '../videos/pixar.mp4'
import warsVid from '../videos/star.mp4'

const BrandComp = () => {
    const [loadind, setLoading] = useState(true)
    setInterval(() => {
        setLoading(false)
    }, 1000)
    return (
        <>
        {
            loadind  ? <Brands>
                <Wrapers></Wrapers>
                <Wrapers></Wrapers>
                <Wrapers></Wrapers>
                <Wrapers></Wrapers>
                <Wrapers></Wrapers>
            </Brands> :
                <Brands>
                    <Wrap>
                        <Link to="DisneyMovies">
                            <img src={disney} alt="..." />
                            <video src={disneyVid} width="300" height="200"
                                autoPlay="autoplay" loop={true} muted playsInline>
                            </video>
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to="PixarMovies">
                            <img src={pixar} alt="..." />
                            <video src={pixarVid} width="300" height="200"
                                autoPlay="autoplay" loop={true} muted playsInline>
                            </video>
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to="MarvelMovise">
                            <img src={marvel} alt="..." />
                            <video src={marvelVid} width="300" height="200"
                                autoPlay="autoplay" loop={true} muted playsInline>
                            </video>
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to="StarWarMovies">
                            <img src={star} alt="..." />
                            <video src={warsVid} width="300" height="200"
                                autoPlay="autoplay" loop={true} muted playsInline>
                            </video>
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to="nat-geo">
                            <img src={geo} alt="..." />
                            <video src={geographicVid} autoPlay="autoplay" loop={true} muted playsInline>
                            </video>
                        </Link>
                    </Wrap>
                </Brands>
        }

        </>
    )
}
const Wrapers = styled.div`
            height: 137px;
            background-color: #192133;
            width: 243px;
            border-radius: 5px;
            animation: mymove 3s infinite alternate-reverse;
            @keyframes mymove { 
              0% {background-color:#192133}
              60% {background-color:#1e2841} 
              100% {background-color:#19243d} 
            }
            @media screen and (max-width: 1345px) {
                height: 112px;
                width: 200px;
           }
            @media screen and (max-width: 1120px) {
                width: 170px;
           }
            @media screen and (max-width: 992px) {
                width: 140px;
                height: 79.33px;
           }
           @media screen and (max-width: 800px) {
                width: 120px;
           }
           @media screen and (max-width: 640px) {
                width: 90px;
                height: 51px;
           }
           @media screen and (max-width: 500px) {
                width: 80px;
                height: 45.33px;
           }
           @media screen and (max-width: 440px) {
                width: 70px;
                padding: 2px;
                height: 41.39px;
           }
           @media screen and (max-width: 400px) {
                width: 60px;
                height: 54px;
           }
           @media screen and (max-width: 350px) {
                width: 55px;
                height: 49px;
           }
           @media screen and (max-width: 320px) {
            width: 50px;
                height: 44px;
           }`
const Brands = styled.div`
                margin: 50px 0px;
                display: flex;
                justify-content: space-between;
                padding: 0px 42px;
                @media screen and (max-width: 992px) {
                    padding: 0px 15px;
                    margin: 48px 0px 22px 0px;
           }
                @media screen and (max-width: 420px) {
                    margin: 25px 0px;
           }
                `
const Wrap = styled.div`
   position: relative;
   transition: 450ms;
   cursor: pointer;
   :hover {
    transform: scale(1.08);
   }
   @media screen and (max-width: 992px) {
    transform: scale(1) !important;
           }
   :hover video {
    opacity: 1;
   }
         img{
            height: 137px;
            width: 243px;
            border-radius: 5px;
            @media screen and (max-width: 1345px) {
                height: auto;
                width: 200px;
           }
            @media screen and (max-width: 1120px) {
                width: 170px;
           }
            @media screen and (max-width: 992px) {
                width: 140px;
           }
           @media screen and (max-width: 800px) {
                width: 120px;
           }
           @media screen and (max-width: 640px) {
                width: 90px;
           }
           @media screen and (max-width: 500px) {
                width: 80px;
           }
           @media screen and (max-width: 440px) {
                width: 70px;
                padding: 2px;
           }
           @media screen and (max-width: 400px) {
                width: 60px;
                height: 54px;
           }
           @media screen and (max-width: 350px) {
                width: 55px;
                height: 49px;
           }
           @media screen and (max-width: 320px) {
            width: 50px;
                height: 44px;
           }
            }
            video{
                position: absolute;
                left: 0;
                height: 137px;
                opacity: 0;
                width: 243px;
                border-radius: 5px;
                transition: opacity 0.25s ease-in;
                @media screen and (max-width: 1345px) {
                    height: auto;
                   width: 200px;
               }
               @media screen and (max-width: 1120px) {
                width: 170px;
           }
            @media screen and (max-width: 992px) {
                display: none;
           }
            }
    
                `
export default BrandComp