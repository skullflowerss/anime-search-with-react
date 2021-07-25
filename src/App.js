import React, {useState, useEffect}  from 'react';
import Loading from './Loading';
import Animes from './Animes';
const url = "https://api.jikan.moe/v3/search/anime?q=evangelion&limit=5"

function App() {

  const [loading, setLoading] = useState(true);
  const [animes, setAnimes] = useState([])
  const fetchAnimes = async () =>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const animesRes = await  response.json()
      const animeFilter = animesRes.['results'].filter(x=> x.type === 'Movie')
      setLoading(false)
      setAnimes(animeFilter)
      console.log(animeFilter)
    }catch(err){
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() =>{
    fetchAnimes()
    }, []
    )

  if(loading){
    return(
      <main>
        <Loading />
      </main>
      )
  }
  return (
    <div className="App">
     <Animes animes={animes}/>
    </div>
  );
}

export default App;
