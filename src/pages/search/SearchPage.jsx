import React, { useEffect, useState } from "react";
import TVCards from "../../components/TVcard/TVcard";
import Cards from "../../components/card/Card";
import { useParams } from "react-router-dom";
import PeopleCards from "../../components/people/PeopleCard";

const SearchPage = () => {

  const {query} = useParams();

  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    search();
  }, [query]);


  const search = () => {

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en&query=${query}`
    )
      .then((res) => res.json())
      .catch(error => alert(error.message))
      .then((data) => setSearchList(data.results));
  };

  return (
    <div className='movie--list'>
      <h2 className='list--title'>SEARCH RESULTS: </h2>
      <div className='list--cards'>
        {searchList.map((item) => (
          item.media_type && item.media_type=='tv' ?
          <TVCards tvshow={item} key={item.id}/>
          : item.media_type=='movie' ?
          <Cards movie={item} key={item.id}/>
          : <PeopleCards person={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;