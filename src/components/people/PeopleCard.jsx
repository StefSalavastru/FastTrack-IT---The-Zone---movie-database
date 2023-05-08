import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';

const PeopleCards = ({ person, role }) => {
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
        to={`/person/${person.id}`}
        style={{ textDecoration: 'none', color: 'white' }}
      >
          <div className='cards'>
            <img
              className='cards--img'
              src={person && person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}`: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'}
            />
            <div className='cards--overlay'>
              <div className='cards--title'>
                {person ? (person.original_name ? person.original_name : person.name) : ""}
              </div>
              <div className='cards--title' style={{color:'#DBA506'}}>
                {role ? role : ""}
              </div>
              <div className='cards--description'>
                {person ? "Popularity score: " + Math.floor(person.popularity) : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default PeopleCards;