import React, { useEffect, useState } from 'react'

function APODCard({title, url}){
    return <div style={{backgroundColor:"gray", marginBottom:`20px`}}>
        <img src={url} alt="" style={{height:`300px`}}/>
        <h3>Hello-{title}</h3>
    </div>
}

function APOD() {

    const [data, setData] = useState(null)

    useEffect(()=>{
        async function fetchAPOD(){
            const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=JY6sZdcFgoY9hEB2l4yUfkNgXkNDW8Il9eg7QUdE&start_date=2025-11-01")
            const fetchedData = await res.json()
            setData(fetchedData)
            console.log(fetchedData)
        }

        fetchAPOD();
    }, [])
    return (
        <div>
            {data?.map((ele)=><APODCard {...ele} key={ele.id}/>)}
        </div>
    )
}

export default APOD