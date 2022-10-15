import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../Firebase'
import styled from 'styled-components'
import logo from "../images/logo.svg"
import SearchIcon from "../images/search-icon.svg"
import { setUserLogIn, setUserLogOut } from '../ReduxStore/UserSlice'
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const userData = useSelector((state) => state.user)
    const imgUser = useSelector((state) => state.user.photo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogIn({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let userInfo = result.user
            dispatch(setUserLogIn({
                name: userInfo.displayName,
                email: userInfo.email,
                photo: userInfo.photoURL
            }))
            navigate("/")
        })
    }

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(setUserLogOut({
                name: "",
                email: "",
                photo: ""
            }))
        })
        navigate("/login")
    }
    return (
        <Navbar>
            <Logo src={logo} alt="..." />
            {
                userData.name ? <>
                    <NanMenu>
                        <a href="/">
                            <span>Tv</span>
                        </a>
                        <a href="/">
                            <span>Movies</span>
                        </a>
                        <a href="/">
                            <span>Sports</span>
                        </a>
                        <a href="/" style={{ color: "#fff" }}>
                            <span>Disney+</span>
                        </a>
                        <a href="/">
                            <span>Kids</span>
                        </a>
                    </NanMenu>
                    <Search>
                        <input type="text" placeholder='Search' />
                        <img src={SearchIcon} alt="search" />
                    </Search>
                    <User>
                        <img src={imgUser} alt="..." onClick={signOut} />
                    </User>
                </>
                    :
                    <LogInBtn onClick={() => signIn()}>Log In</LogInBtn>
            }
        </Navbar>
    )
}

const LogInBtn = styled.button`
    background-color: #016dd9;
    color: #fff;
    padding: 6px 17px;
    font-size: 16px;
    border-radius: -8px;
    margin-left: auto;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 992px) {
            margin-right:26px;
           }
`
const Navbar = styled.div`
color:#fff;
display:flex;
align-items:center;
padding: 0 50px;
margin-top: 6px;
min-height: 66px;
@media screen and (max-width: 992px) {
    padding: 0;
        }
`
const Logo = styled.img`
    width: 115px;
    height: 50px;
    padding-bottom: 12px;
    @media screen and (max-width: 992px) {
        margin-right: auto;
        }
`
const NanMenu = styled.div`
   a {
    font-size: 16px;
    font-weight: 500;
      text-decoration:none;
      padding: 20px 15px 20px;
      cursor:pointer;
      color:#c2c2c2cc;
      :hover{
        color: #fff;
      }
   }
   margin-right:auto;
   @media screen and (max-width: 992px) {
     display: none;
    }
`
const Search = styled.div`
border-bottom: 1px solid #c2c2c2cc;
padding: 5px 12px;
display: flex;
align-items: center;
input{
    border: none;
   font-size: 14px;
   color: #fff;
   background-color: #131a27;
   transition:450ms;
   @media screen and (max-width: 992px) {
        width: 100px;
        }
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #c2c2c2cc;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #c2c2c2cc;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color:#c2c2c2cc;
}
:focus-visible {
    outline: none;
}
:focus{
    width: 300px;
    @media screen and (max-width: 992px) {
        width: 100px;
        }

}
@media screen and (max-width: 420px) {
            width: 64px !important;
        }
}
img {
     height: 20px;
  }
`
const User = styled.div`
 img {
    height:40px;
    width:40px;
    border-radius:50%;
    object-fit:cover;
    margin:0 20px;
 }
`
export default NavBar