import React, {useState} from 'react'


const Anime = ({anime}) =>{
    
    let title = anime['title']
    let img = anime['image_url']
    let description = anime['synopsis']
    let score = anime['score']
    let airing = anime['start_date']

    const [readMore, setReadMore] = useState(false)


    return ( 
        <div className="card">
            <div className="wrapper" style={{ 
                backgroundImage: `url(${img})`,
                backgroundSize: 'auto',
                backgroundRepeat: 'no-repeat',
            }}
             >
                <div className="data">
                    <div className="content">
                        <h1 className="title">{title}</h1>
                        <p className="text">{ readMore ? description : `${description.substring(0,50)}...` }</p>
                    </div>
                </div>
            </div>
      </div>

    )
}

export default Anime