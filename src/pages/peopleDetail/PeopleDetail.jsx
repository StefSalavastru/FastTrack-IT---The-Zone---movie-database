import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Credit from './Credits';

const PeopleDetail = () => {

    const [currentPersonDetail, setPersonDetail] = useState();
    const { id } = useParams();
  
    useEffect(() => {
      getData();
      window.scrollTo(0, 0);
    },[id]);
  
    const getData = () => {

      fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
      )
        .then((res) => res.json())
        .then((data) => setPersonDetail(data));
    };
  
    return (
      <div className='movie'>
        <div className='movie--intro'>
          <img
            className='movie--img'
            src={`https://image.tmdb.org/t/p/original${
              currentPersonDetail ? currentPersonDetail.profile_path : ""
            }`}
          />
        </div>
        <div className='movie--detail'>
          <div className='movie--detailLeft'>
            <div className='movie--posterBox'>
              <img
                className='movie--poster'
                src={`https://image.tmdb.org/t/p/original${
                  currentPersonDetail ? currentPersonDetail.profile_path : ""
                }`}
              />
            </div>
          </div>
          <div className='movie--detailRight'>
            <div className='movie--detailRightTop'>
              <div className='movie--name'>
                {currentPersonDetail ? currentPersonDetail.name : ""}
              </div>
              <div className='movie--tagline'>
                {currentPersonDetail ? 'Known for: ' + currentPersonDetail.known_for_department : ""}
              </div>
              <div className='movie--rating'>
                {currentPersonDetail ? currentPersonDetail.popularity : ""}{" "}
                <i className='fas fa-star' />
              </div>
            </div>
            <div className='movie--detailRightBottom'>
              <div className='synopsisText'>Biography</div>
              <div>{currentPersonDetail ? currentPersonDetail.biography : ""}</div>
            </div>
          </div>
        </div>
        <div className='movie--links'>
          <div className='movie--heading'>Useful links:</div>
          {currentPersonDetail && currentPersonDetail.homepage && (
            <a
              href={currentPersonDetail.homepage}
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
          {currentPersonDetail && currentPersonDetail.name && (
            <a
              href={`https://www.youtube.com/results?search_query=${currentPersonDetail.name}`}
              target='_blank'
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className='movie--trailerButton movie--button'>
                  Videos <i className='newTab fas fa-external-link-alt'></i>
                </span>
              </p>
            </a>
          )}
        </div>
        <Credit />
      </div>
    );
  };
export default PeopleDetail;