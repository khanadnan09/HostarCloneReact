import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMovie from "./Pages/MainMovie";
import Login from "./Pages/Login";
import DisneyMovies from "./Pages/DisneyMovies";
import PixarMovies from "./Pages/PixarMovies";
import MarvelMovise from "./Pages/MarvelMovise";
import StarWarsMovies from "./Pages/StarWarsMovies";
import NationalGeo from "./Pages/NationalGeo";
import MoviePage from "./Pages/MoviePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {["/MainMovie", "DisneyMovies/MainMovie", "PixarMovies/MainMovie", "MarvelMovise/MainMovie", "StarWarMovies/MainMovie", "nat-geo/MainMovie"].map((path, index) => (
            <Route path={path} element={<MainMovie/>} key={index} />
          ))}
          <Route path="login" element={<Login />} />
          <Route path="DisneyMovies" element={<DisneyMovies />} />
          <Route path="PixarMovies" element={<PixarMovies />} />
          <Route path="MarvelMovise" element={<MarvelMovise />} />
          <Route path="StarWarMovies" element={<StarWarsMovies />} />
          <Route path="nat-geo" element={<NationalGeo />} />
          {["/MainMovie/movie", "DisneyMovies/MainMovie/movie", "PixarMovies/MainMovie/movie", "MarvelMovise/MainMovie/movie", "StarWarMovies/MainMovie/movie", "nat-geo/MainMovie/movie"].map((path, index) => (
           <Route path={path} element={<MoviePage/>}  key={index}/>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
