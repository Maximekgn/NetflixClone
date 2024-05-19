import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrowicon from "../../assets/back_arrow_icon.png"
import { useParams } from 'react-router-dom'

const Player = () => {

  const [apiData , setApiData] = useState([])
  const {id} = useParams() ; // id is the id of the movie from the movie page. It is passed as a parameter in the url.
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2I3ZjUxNzU0YzI5Zjk4MmUxNTg5YWEzYmFlNzljNiIsInN1YiI6IjY2NGExMzcxNDAzYjNhNmE1NWYyN2VkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4zSAW3hS6WSi7uXfgUl0ReUXn3Jxplr0znSoDdNWhdg'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)   
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  })


  return (
    <div className='player'>
      <img src={backarrowicon}  />
      <iframe width='90%' height={"90%"} src={'https://www.youtube.com/embed/'+apiData.key} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player