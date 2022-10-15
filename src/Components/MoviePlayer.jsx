import React from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import styled from 'styled-components'


const MoviePlayer = () => {
    const selctCard = JSON.parse(localStorage.getItem("reduxState"))
    const cardData = selctCard.card[0]
    const cardDataTrailer = selctCard.card[0].trailer
    const videoSrc = {
        type: "video",
        sources: [
            {
                src: cardDataTrailer,
                // provider: "youtube"
            }
        ]
    };
    return (
        <>
            {
                cardDataTrailer !== "" ?
                    <VideoPlayer>
                        <Plyr source={videoSrc} />
                    </VideoPlayer> :
                    <h3 style={{
                        display: "flex",
                        height: "50vh",
                        padding: " 0 50px",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        backgroundColor: "#000"
                    }}>Sorry, This Request is not available 😞😞😞...</h3>
            }
            <MobileDescription>
                <MobileTitle>{cardData.name}</MobileTitle>
                <MobileConditions>{cardData.cond}</MobileConditions>
                <MobileDescriptions>{cardData.desc}</MobileDescriptions>
                <SocialMedia><ion-icon name="add-outline"></ion-icon><ion-icon name="logo-facebook"></ion-icon><ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="link-outline"></ion-icon>
                </SocialMedia>
            </MobileDescription>
        </>
    )
}
const VideoPlayer = styled.div`
    video{
        height: 500px;
        /* max-height: 100%; */
        min-height: 300px;
        object-fit: fill;
        @media screen and (max-width: 600px){
            height: 300px;
       }
    }
`
const MobileDescription = styled.div`
    padding: 0px 50px;
     margin-top: 30px;
     @media screen and (max-width: 992px){
        padding: 0px 15px;
       }
  `
const MobileTitle = styled.div`
      color: #fff;
      font-weight:700;
      font-size: 24px;
      margin-bottom: 7px;
      @media screen and (max-width: 992px){
        font-size: 20px;
        font-weight:600;
       }
  `
const MobileConditions = styled.div`
        color: #0053ad;
        font-size: 13px;
        margin-bottom: 7px;
        font-weight: 700;
        @media screen and (max-width: 992px){
            font-size: 11px;
       }
  `
const MobileDescriptions = styled.div`
    color: #b3b3b3;
    font-size: 15px;
    line-height: 20px;
    @media screen and (max-width: 992px){
            font-size: 13px;
       }
  `
const SocialMedia = styled.div`
  font-size: 22px;
    color: #fff;
    ion-icon{
        padding: 10px 20px 10px 0;
    }
  `
export default MoviePlayer