import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/movies")
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="text-3xl flex text-center flex-col p-12 text-white">
        <h1>Movies Database</h1>
        <strike className="text-red-600">
          the database has no image url yet
        </strike>
      </div>

      <div className="p-24 flex flex-wrap gap-x-7">
        {movies.map((item, index) => (
          <Card
            key={index}
            Image="https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
            movieName={item.movie || "Unknown Title"}
            movieRating={item.rating || "N/A"}
            imdb={item.imdb_url || "#"}
          />
        ))}
      </div>
    </>
  );
}

export default App;
