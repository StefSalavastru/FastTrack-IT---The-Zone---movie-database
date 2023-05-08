import React, { useEffect, useState } from "react";
import "./TVshowlist.css";
import TVCards from "../TVcard";

const TVShowList = () => {
  const [TVShowList, setTVShowList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setTVShowList(data.results));
  };

  return (
    <div className='TV--list'>
      <h2 className='TV--title'>Top Rated TV Shows</h2>
      <div className='TV--cards'>
      {TVShowList.map((tvshow) => (
          <TVCards tvshow={tvshow} key={tvshow.id}/>
        ))}
      </div>
    </div>
  );
};

export default TVShowList;