import React, {useState} from 'react'


const Anime = ({anime}) =>{
    let title = anime['title']
    let img = anime['image_url']
    let description = anime['synopsis']
    let score = anime['score']
    let airing = anime['start_date']
    return ( 
        <div className="anime-card">
            <div className="anime-title-img">
                <h1 className="title">{title}</h1>
                <img src={img} alt={title} />
            </div>
            <div className="anime-info">
                <h3>Description:</h3>
                <p className="anime-description">
                    {description}
                </p>
                <h4>Score:</h4>
                <p className="anime-score">
                    {score}
                </p>
            </div>
        </div>
    )
}

export default Anime