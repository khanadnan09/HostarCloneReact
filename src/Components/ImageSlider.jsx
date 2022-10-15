import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firebase from '../Firebase';

const ImageSlider = () => {

    const ref = firebase.firestore().collection("disney_plus_Banners")
    // console.log(ref);

    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        const getBannerData = () => {
            ref.get().then((item) => {
                setBannerData(item.docs.map((doc) => doc.data()))
            })
        }
        getBannerData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    centerMode: false,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <>
            {
                    bannerData.length ?  
                    <Carousel {...settings}>
                    {
                        bannerData.map((val) => {
                            return <ImageDiv key={val.id}>
                                <DsecriptionBox>
                                    <span>{val.title}</span>
                                    <p>{val.description}</p>
                                </DsecriptionBox>
                                <img src={val.img} alt="..." />
                            </ImageDiv>
                        })
                    }
                </Carousel>
                :
                <LoadingBanner>
                    <LeftBanner></LeftBanner>
                    <MiddleBanner></MiddleBanner>
                    <RightBanner></RightBanner>
                </LoadingBanner>
            }

        </>
    )
}
const LoadingBanner = styled.div`
    padding-top:10px;
    display: flex;
    height: 430px;
  @media screen and (max-width: 768px) {
        height: 320px;
        }
  @media screen and (max-width: 500px) {
        height: 230px;
        }
  @media screen and (max-width: 350px) {
    height: 190px;
        }
`
const LeftBanner = styled.div`
      height: 100%;
        width: 36px;
        margin-right: 20px;
        background-color: #192133;
        animation: mymove 3s infinite alternate-reverse;
        @media screen and (max-width: 420px) {
            margin-right: 0px;
        }
`
const MiddleBanner = styled.div`
        height: 100%;
        width: 100%;
        background-color: #192133;
        animation: mymove 3s infinite alternate-reverse;
        @keyframes mymove { 
            0% {background-color:#192133}
             60% {background-color:#1e2841} 
             100% {background-color:#19243d} 
            }
`
const RightBanner = styled.div`
        height: 100%;
        width: 36px;
        margin-left: 20px;
        background-color: #192133;
        animation: mymove 3s infinite alternate-reverse;
        @media screen and (max-width: 420px) {
            margin-left: 0px;
        }
        
    `

const Carousel = styled(Slider)`
   padding: 10px 0px;
   width: 100vw;
`
const DsecriptionBox = styled.div`
    width: 36%;
    padding: 67px 40px 40px 40px;
    background-color: #030b17;
    position: relative;
    @media screen and (max-width: 992px) {
       display:none;
        }
    ::before{
        content: "";
        content: "";
        position: absolute;
        right: -312px;
        top: 0;
        background: linear-gradient(to right,#030b17,rgba(0,0,0,0));
        z-index: 11;
        height: 100%;
        width: 313px;
     }

    span {
        font-size: 30px;
        color: #fff;
        font-weight: 700;
        background-color: #030b17;
    }
    p {
        font-size: 14px;
        line-height: 28px;
        color: #c7c7c7;
        font-weight: 600;
        letter-spacing: 1.2px;
        margin-top: 10px;
        background-color: #030b17;
    }
`

const ImageDiv = styled.div`
display: flex !important;
img{
  width: 64%;
  height: 100%;
  border-bottom-right-radius: 14px;
  border-top-right-radius: 14px;
  height: 430px;
  padding: 0px 20px 0px 0px;
  @media screen and (max-width: 992px) {
        width: 100% !important;
        }
  @media screen and (max-width: 768px) {
        height: 320px;
        }
  @media screen and (max-width: 500px) {
        height: 230px;
        }
  @media screen and (max-width: 420px) {
       padding: 0;
       border-radius: 0;
        }
  @media screen and (max-width: 350px) {
    height: 190px;
        }
}
`
export default ImageSlider