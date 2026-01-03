import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function APODPage() {

    const {date} = useParams();
    const [data, setData] = useState()
    
    useEffect(()=>{
        async function fetchAPOD(){
            const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=JY6sZdcFgoY9hEB2l4yUfkNgXkNDW8Il9eg7QUdE&date="+date)
            const fetchedData = await res.json()
            setData(fetchedData)
            console.log(fetchedData)
        }

        fetchAPOD();
    }, [])
  return (
    data && (<div>
        <h1>{data.title}</h1>
        <h3>{data.data}</h3>
        <h3>{data.copyright}</h3>
        <img src={data.hdurl} alt="" style={{maxWidth:'80vw', maxHeight:'80vh'}}/>
    </div>)
  )
}

export default APODPage