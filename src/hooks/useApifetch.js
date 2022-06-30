import React, { useEffect, useState } from 'react'

let urlBasica = "https://api.themoviedb.org/3/discover/movie?api_key=c79fbac57c4206c43850219a56a537f8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

const useApifetch = () => {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(urlBasica);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      const getData = async () => {
        const datos = await fetch(url);
        const res = await datos.json();
        setData(res.results);
        setLoading(false)
      }
      getData()
      return () => setData([])
    }, [url])

    const handleChange = (e) => setSearch(e.target.value)
    
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if(search.length === 0) return setUrl(urlBasica)
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=c79fbac57c4206c43850219a56a537f8&language=en-US&query=${search}&page=1&include_adult=false`)
    };
    
  return {
    data,
    handleChange,
    search,
    handleSubmit,
    loading
  }
}

export default useApifetch