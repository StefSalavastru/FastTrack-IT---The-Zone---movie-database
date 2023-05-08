import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';

const TVCards = ({ tvshow }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='cards'>
          <SkeletonTheme color='#202020' highlightColor='#444'>
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/tv/${tvshow.id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <div className='cards'>
            <img
              className='cards--img'
              src={tvshow && tvshow.poster_path ? `https://image.tmdb.org/t/p/original${tvshow.poster_path}`: 'https://static.vecteezy.com/system/resources/previews/012/104/757/original/television-tv-set-tv-show-concept-sign-drawn-in-flat-style-suitable-for-sites-articles-books-apps-editable-stroke-line-icon-of-honeycomb-on-tv-screen-vector.jpg'}
            />
            <div className='cards--overlay'>
              <div className='cards--title'>
                {tvshow ? tvshow.original_name : ""}
              </div>
              <div className='cards--runtime'>
                {tvshow && tvshow.first_air_date
                  ? new Date(tvshow.first_air_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
                <span className='cards--rating'>
                  {tvshow ? tvshow.vote_average : ""}
                  <i className='fas fa-star' />
                </span>
              </div>
              <div className='cards--description'>
                {tvshow ? tvshow.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default TVCards;