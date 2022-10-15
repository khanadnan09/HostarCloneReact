import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setCardData } from '../ReduxStore/Cradslice'

const Movies = (props) => {
    const dispatch = useDispatch()
    const getMovie = (movie) => {
        return dispatch(setCardData(movie))
    }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8.5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Heading>{props.title}</Heading>
            {
            props.Movies.length ?
             <MovieSlider {...settings}>
            {props.Movies ?
                props.Movies.map((val,index)=>{
                return <CardWraper key={val.id} onClick={()=> getMovie(props.Movies[index])}>
              <Link to="mainmovie"><img src={val.img2} alt="..." /></Link>  
            </CardWraper>
              })
              :""
            }
            <CardWraperEmpty> 
             {/* <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba" alt="..." />  */}
            </CardWraperEmpty>
            </MovieSlider>
            : 
              <LoadingMovies>
                <LoadingCard className='child1'></LoadingCard>
                <LoadingCard className='child2'></LoadingCard>
                <LoadingCard className='child3'></LoadingCard>
                <LoadingCard className='child4'></LoadingCard>
                <LoadingCard className='child5'></LoadingCard>
                <LoadingCard className='child6'></LoadingCard>
                <LoadingCard className='child7'></LoadingCard>
                <LoadingCard className='child8'></LoadingCard>
            </LoadingMovies>
            }

        </>
    )
}

const LoadingMovies = styled.div`
        padding: 0 38px;
        display: flex;
        @media screen and (max-width: 992px){
        padding: 0px 15px;
        }
        @media screen and (max-width: 1024px) {
            .child8 , .child7 , .child6{
            display: none;
          }
        }
        @media screen and (max-width: 400px) {
            .child8 , .child7 , .child6,.child5,.child4{
            display: none;
          }
           }
`
const LoadingCard = styled.div`
        width:100%;
        height: 192px;
        background-color: #192133;
        border-radius: 5px;
        margin: 40px 5px;
        animation: mymove 3s infinite alternate-reverse;
            @keyframes mymove { 
              0% {background-color:#192133}
              60% {background-color:#1e2841} 
              100% {background-color:#19243d} 
            }
        @media screen and (max-width: 510px) {
            height: 155px;
           }
        @media screen and (max-width: 400px) {
            height: 130px;
           }
`

const Heading = styled.div`
    color: #fff;
    margin-bottom: -3px;
    padding: 3px 42px;
    font-size: 20px;
    font-weight: 600;
    z-index: 79;
    @media screen and (max-width: 992px) {
        padding: 3px 15px;
    margin-bottom: -24px;
    font-size: 17px;
           }
`

const MovieSlider = styled(Slider)`
    margin-top: -4px;
    .slick-list {
        padding:0 38px;
        @media screen and (max-width: 992px) {
            padding:0 15px;
           }
    }
    .slick-dots {
      display: none !important;
    }
`
const CardWraper = styled.div`
    transition: 450ms;
    padding: 40px 5px;
    cursor: pointer;
    
    img {
        height: 192px;
        width: 100%;
        border-radius: 5px;
        @media screen and (max-width: 510px) {
            height: 155px;
           }
        @media screen and (max-width: 400px) {
            height: 130px;
           }
    }
    &:hover {
        transform-origin: center !important;
        transform: scale(1.3);
        @media screen and (max-width: 992px) {
            transform: scale(1);
           }
    }
`
const CardWraperEmpty = styled.div``
export default Movies