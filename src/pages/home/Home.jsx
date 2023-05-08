import React, { useEffect, useState } from 'react';
import './home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/card/movieList/MovieList';
import People from '../../components/people/People';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en'
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className='poster'>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={1}
          interval={6000}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`./movie/${movie.id}`}
              >
                <div className='poster--image'>
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                  />
                </div>
                <div className='poster--image--overlay'>
                  <div className='poster--title'>
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className='poster--runtime'>
                    {movie
                      ? new Date(movie.release_date).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )
                      : ""}
                    <span className='poster--rating'>
                      {movie ? movie.vote_average : ""}
                      <i className='fa fa-star' />
                      {""}
                    </span>
                  </div>
                  <div className='poster--description'>
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
        <MovieList />
        <People />  
      </div>
    </>
  );
};

export default Home;
