import React from 'react'
import styled from 'styled-components'
import GEO from '../videos/Geo2.mp4'
import Movies from './Movies'
import { useEffect, useState } from 'react'
import firebase from '../Firebase';

const NationalGeoComp = () => {
    const ref = firebase.firestore().collection("disney_plus_movies")
    const ref2 = firebase.firestore().collection("disney_plus_originals")
    const ref3 = firebase.firestore().collection("Pixar_Movies")

    const [disneyMovies, setDisneyMovies] = useState([])
    const [recommandMovies, setRecommandMovies] = useState([])
    const [PixarMovies, setPixarMovies] = useState([])

    useEffect(() => {
        const getCardsData = () => {
            ref.get().then((item) => {
                setRecommandMovies(item.docs.map((doc) => doc.data()))
            })
            ref2.get().then((item) => {
                setDisneyMovies(item.docs.map((doc) => doc.data()))
            })
            ref3.get().then((item) => {
                setPixarMovies(item.docs.map((doc) => doc.data()))
            })
        }
        getCardsData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <VideoContainer>
                <video src={GEO} autoPlay="autoplay" muted playsInline>
                </video>
            </VideoContainer>
            <MoviesContainer style={{paddingTop:"30px"}}>
                <Movies title={"Movies"} Movies={recommandMovies} />
                <Movies title={"Specials"} Movies={disneyMovies} />
                <Movies title={"Originals"} Movies={PixarMovies} />
            </MoviesContainer>
        </>
    )
}
const VideoContainer = styled.div`
    video{
        height: 100%;
        width: 100%;
        max-height: 500px;
        background-color: #192133;
        animation: mymove 3s infinite alternate-reverse;
            @keyframes mymove { 
              0% {background-color:#192133}
              60% {background-color:#1e2841} 
              100% {background-color:#19243d} 
            }
    }
`
const MoviesContainer = styled.div``
export default NationalGeoComp