import axios from 'axios';
import React,  { useEffect, useState } from 'react'
import request from '../Request'


const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies [Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log (movie)
        
  return (
    <div className='w-full h-[550px] text-white'>

    </div>
  )
}

export default Main