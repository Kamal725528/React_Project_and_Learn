import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

function Tag() {

    const [tag, setTag] = useState("Dog");
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);
  
  
    // async function fetchData() {
    //   setLoading(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  
    //   const { data } = await axios.get(url);
    //   const imageSource = data.data.images.downsized_large.url;
    //   setGif(imageSource);
    //   console.log(imageSource);
    //   setLoading(false);
    // }
  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    const { gif, loading, fetchData } = useGif(tag);
  
  
  return (
    <div className="w-11/12 max-w-lg h-auto bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-6 p-6 mt-8 shadow-lg">
      <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>

      {loading ? (<Spinner />) : (<img src={gif} className="max-w-full h-auto rounded-lg shadow-md" />)}

      <input type="text" className="w-full text-lg py-2 rounded-lg text-center bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-3" onChange={(event) => setTag(event.target.value)} value={tag} />

      <button
         onClick={() => fetchData(tag)}
         className="w-full bg-white text-xl py-3 rounded-lg font-bold hover:bg-gray-200 transition-all">
         Generate
     </button>
    </div>
  );
}

export default Tag;