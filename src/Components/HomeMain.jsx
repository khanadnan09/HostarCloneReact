import React, { useEffect, useState } from 'react'
import firebase from '../Firebase';
import styled from 'styled-components'
import BrandComp from './BrandComp'
import ImageSlider from './ImageSlider'
import Movies from './Movies'

const HomeMain = () => {

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
            <HomeContainer>
               <ImageSlider/>
               <BrandComp/>
               <Movies title={"Recommended For You"} Movies={recommandMovies}/>
               <Movies title={"Disney+ Originals"} Movies={disneyMovies}/>
               <Movies title={"Pixar Movies"} Movies={PixarMovies}/>
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
    min-height: calc(100vh - 72px);
`
export default HomeMain