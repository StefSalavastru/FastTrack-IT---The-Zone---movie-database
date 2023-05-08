import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'

const Cards = ({ movie }) => {
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
          to={`/movie/${movie.id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <div className='cards'>
            <img
              className='cards--img'
              src={movie && movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}
            />
            <div className='cards--overlay'>
              <div className='cards--title'>
                {movie ? movie.original_title : ""}
              </div>
              <div className='cards--runtime'>
                {movie && movie.release_date
                  ? new Date(movie.release_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
                <span className='cards--rating'>
                  {movie ? movie.vote_average : ""}
                  <i className='fas fa-star' />
                </span>
              </div>
              <div className='cards--description'>
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;
