import React from 'react'
import Anime from './Anime'

const Animes = ({animes}) =>{
    return(
        <section className="animes-holder">
            <h2>The animes you searched</h2>
            <div className="animes-section">
                {animes.map(anime =>{
                    return( 
                        <Anime key={anime['mal_id']} anime={anime}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Animes