import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import MovieList from "./components/card/movieList/MovieList";
import Movie from "./pages/movieDetail/MovieDetail";
import TVShow from "./pages/TVShowDetail/TVShowDetail";
import SearchPage from "./pages/search/SearchPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/login/RegisterPage";
import TVShowList from "./components/TVcard/TVshowList/TVShowList";
import PeopleDetail from "./pages/peopleDetail/PeopleDetail";

const App = () => {
  
  return ( 
    <div className='App'>
      <Router>
        <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='movie/:id' element={<Movie />}></Route>
            <Route path='tv/:id' element={<TVShow />}></Route>
            <Route path='movies/:type' element={<MovieList />}></Route>
            <Route path='tv' element={<TVShowList />}></Route>
            <Route path='search/:query' element={<SearchPage />}></Route>
            <Route path='person/:id' element={<PeopleDetail />}></Route>
            <Route path='login' element={<LoginPage />}></Route>
            <Route path='register' element={<RegisterPage />}></Route>
            <Route path='/*' element={<h1>Error page</h1>}></Route>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
};

export default App;
