import React, { useEffect, useState } from "react";
import "./movieDetail.css";
import { useParams } from "react-router-dom";
import SimilarMovie from "./SimilarMovie";
import { Link } from "react-router-dom";
import MovieCast from "./MovieCast";


const Movie = () => {
  const [currentMovieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  },[id]);

  useEffect(() => {
    getRating;
  },[]);

  const getRating = () => {
    prompt('What do you rate this?')
  }

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  };

  return (
    <div className='movie'>
      <div className='movie--intro'>
        <img
          className='movie--img'
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className='movie--detail'>
        <div className='movie--detailLeft'>
          <div className='movie--posterBox'>
            <img
              className='movie--poster'
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className='movie--detailRight'>
          <div className='movie--detailRightTop'>
            <div className='movie--name'>
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className='movie--tagline'>
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className='movie--rating'>
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className='fas fa-star' />
              <span className='movie--voteCount'>
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className='movie--runtime'>
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className='movie--releaseDate'>
              {currentMovieDetail && currentMovieDetail.release_date
                ? new Date(currentMovieDetail.release_date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )
                : ""}
            </div>
            <div className='movie--genres'>
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => {
                    return (
                      <>
                        <span className='movie--genre' id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    );
                  })
                : ""}
            </div>
          </div>
          <div className='movie--detailRightBottom'>
            <div className='synopsisText'>Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className='movie--links'>
        <div className='movie--heading'>Useful links:</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target='_blank'
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className='movie--homeButton movie--button'>
                Homepage <i className='newTab fas fa-external-link-alt'></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://imdb.com/title/" + currentMovieDetail.imdb_id}
            target='_blank'
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className='movie--imdbButton movie--button'>
                IMDB<i className='newTab fas fa-external-link-alt'></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.original_title && (
          <a
            href={`https://www.youtube.com/results?search_query=${currentMovieDetail.original_title + ' trailer'}`}
            target='_blank'
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className='movie--trailerButton movie--button'>
                Trailer <i className='newTab fas fa-external-link-alt'></i>
              </span>
            </p>
          </a>
        )}
        <button className='movie--trailerButton movie--button' onClick={getRating}>Rate <i className='newTab fas fa-star'></i></button>
      </div>
      <Link
                to={`/movie/${id}`}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <MovieCast />
                <SimilarMovie />
              </Link>
      <div className='movie--heading'>Production companies:</div>
      <div className='movie--production'>
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => {
            return (
              <>
                {company.logo_path && (
                  <span className='productionCompanyImage'>
                    <img
                      className='movie--productionCompany'
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                    />
                    <span>{company.name}</span>
                  </span>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};
export default Movie;