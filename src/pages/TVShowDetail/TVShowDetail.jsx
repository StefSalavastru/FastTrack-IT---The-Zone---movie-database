import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimilarTV from "./SimilarTV";
import TVCast from "./TVShowCast";
import { Link } from "react-router-dom";


const TVShow = () => {
  const [currentTVShowDetail, setTVShowDetail] = useState();
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
      `https://api.themoviedb.org/3/tv/${id}?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setTVShowDetail(data));
  };

  return (
    <div className='movie'>
      <div className='movie--intro'>
        <img
          className='movie--img'
          src={`https://image.tmdb.org/t/p/original${
            currentTVShowDetail ? currentTVShowDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className='movie--detail'>
        <div className='movie--detailLeft'>
          <div className='movie--posterBox'>
            <img
              className='movie--poster'
              src={`https://image.tmdb.org/t/p/original${
                currentTVShowDetail ? currentTVShowDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className='movie--detailRight'>
          <div className='movie--detailRightTop'>
            <div className='movie--name'>
              {currentTVShowDetail ? currentTVShowDetail.original_name : ""}
            </div>
            <div className='movie--tagline'>
              {currentTVShowDetail ? currentTVShowDetail.tagline : ""}
            </div>
            <div className='movie--rating'>
              {currentTVShowDetail ? currentTVShowDetail.vote_average : ""}{" "}
              <i className='fas fa-star' />
              <span className='movie--voteCount'>
                {currentTVShowDetail
                  ? "(" + currentTVShowDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className='movie--releaseDate'>
              {currentTVShowDetail && currentTVShowDetail.first_air_date
                ? new Date(currentTVShowDetail.first_air_date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )
                : ""} - {currentTVShowDetail && currentTVShowDetail.last_air_date
                    ? new Date(currentTVShowDetail.last_air_date).toLocaleDateString(
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
              {currentTVShowDetail && currentTVShowDetail.genres
                ? currentTVShowDetail.genres.map((genre) => {
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
            <div>{currentTVShowDetail ? currentTVShowDetail.overview : ""}</div>
            <div className='synopsisText' style={{marginTop:'30px'}}>Creators</div>
            <div className='creators'>{currentTVShowDetail && currentTVShowDetail.created_by
                ? currentTVShowDetail.created_by.map((creator) => {
                    return (
                      <>
                        <span>
                          {creator.name}
                        </span>
                      </>
                    );
                  })
                : ""}
              </div>
          </div>
        </div>
      </div>
      <div className='movie--links'>
        <div className='movie--heading'>Useful links:</div>
        {currentTVShowDetail && currentTVShowDetail.homepage && (
          <a
            href={currentTVShowDetail.homepage}
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
        {currentTVShowDetail && currentTVShowDetail.original_name && (
          <a
            href={`https://www.youtube.com/results?search_query=${currentTVShowDetail.original_name+" trailer"}`}
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
      </div>
              <Link
                to={`/tv/${id}`}
                style={{ textDecoration: 'none', color: 'white' }}
              ><TVCast />
                <SimilarTV />
              </Link>
      <div className='movie--heading'>Production companies:</div>
      <div className='movie--production'>
        {currentTVShowDetail &&
          currentTVShowDetail.production_companies &&
          currentTVShowDetail.production_companies.map((company) => {
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
export default TVShow;