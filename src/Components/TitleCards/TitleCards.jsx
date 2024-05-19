import React, { useEffect } from 'react'
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data.js'
import {Link} from "react-router-dom" ;




const TitleCards = ({title , category}) => {

const [apiData , setApiData] = React.useState([]);

const cardsRef = React.useRef(null);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2I3ZjUxNzU0YzI5Zjk4MmUxNTg5YWEzYmFlNzljNiIsInN1YiI6IjY2NGExMzcxNDAzYjNhNmE1NWYyN2VkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4zSAW3hS6WSi7uXfgUl0ReUXn3Jxplr0znSoDdNWhdg'
  }
};






const handleWheel = (event) => {
  event.preventDefault(); // Prevent default scroll behavior
  cardsRef.current.scrollLeft += event.deltaY ;
}

useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results) ) // set the apiData state here with the response.results data.
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel', handleWheel) ;
},[])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "no title"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card , index) => 
          {
            return (
              <Link className="card" key={index} to = {`/player/${card.id}`}>
                <img src= {`https://image.tmdb.org/t/p/w500`+card.backdrop_path} />
                <p> {card.original_title} </p>
              </Link> )
          })
        }   
      </div>
    </div>
  )
}

export default TitleCards