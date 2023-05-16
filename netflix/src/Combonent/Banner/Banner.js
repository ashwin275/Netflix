import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../const/const'

function Banner() {

  const [movie,setmovie] = useState({});
  useEffect(()=>{
    const random=Math.floor(Math.random()*20)
   axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    setmovie(response.data.results[random])
   
   })
  },[])

  return (
    <div  style={{backgroundImage:movie?`URL(${imageUrl+movie.backdrop_path})`:''}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:'movie title'}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>

            </div>

            <h1 className='description'>{movie?movie.overview:''}</h1>

        </div>

        <div className='fade'></div>
       


      
    </div>
  )
}

export default Banner
