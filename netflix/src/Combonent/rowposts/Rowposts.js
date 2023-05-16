import React,{useEffect,useState} from 'react'
import { imageUrl,API_KEY} from '../../const/const'
import axios from 'axios'
import'./rowposts.css'
import Youtube from 'react-youtube'



function Rowposts(props) {

  const [movies,setMovies] =  useState([])
  const [urlid,seturlid] =  useState('')
  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        
        setMovies(response.data.results)
        console.log(response.data.results)
      })
      .catch(err => {
        alert('Network Error');
      });
  }, []);
  


    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };


    const handleMovie = (id) =>{
        console.log(id)

        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
         if (response.data.results.length!==0){
          seturlid(response.data.results[0])
         }
         else{
          console.log('trailer not available')
         }

        })

    }

  return (
    <div className='row'>
        
        <h2>{props.title}</h2>
         <div className="posters">
          {
            movies.map((obj) => 
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'postimage'} src={`${imageUrl+obj.backdrop_path}`} />

            )
          }
            </div>

            { urlid && <Youtube videoId={urlid.key} opts={opts}  />}
    </div>
  )
}

export default Rowposts
