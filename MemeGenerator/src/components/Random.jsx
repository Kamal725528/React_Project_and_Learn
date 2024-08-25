import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; // valid in react traditional

const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY; // valid in vite

function Random() {
    
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

    return (
      <div className="w-11/12 max-w-lg h-auto bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-6 p-6 mt-8 shadow-lg">
      <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} className="max-w-full h-auto rounded-lg shadow-md" />}
      <button onClick={() => fetchData()} className="w-full bg-white text-xl py-3 rounded-lg font-bold hover:bg-gray-200 transition-all">
        Generate
      </button>
    </div>    
    );
}

export default Random;