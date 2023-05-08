import React, { useEffect, useState } from "react";
import TVCards from "../../components/TVcard/TVcard";
import { useParams } from "react-router-dom";

const SimilarTV = () => {
  const [similarList, setSimilarList] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setSimilarList(data.results));
  };

  return (
    <div className='TV--list'>
      <h2 className='TV--title'>Similar TV Shows: </h2>
      <div className='TV--cards'>
      {Array.isArray(similarList) && similarList.length > 0 && similarList.map((tvshow) => (
                <TVCards tvshow={tvshow} />
        ))}
      </div>
    </div>
  );
};

export default SimilarTV;