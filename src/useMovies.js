import { useEffect, useState } from "react";

export  function useMovies(query) {
    const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const KEY = "8609d3ff";

    useEffect(() => {
        const controller = new AbortController();
    
        async function fetchMovies() {
          try {
            setIsLoading(true);
            setError("");
            const res = await fetch(
              `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
              { signal: controller.signal }
            );
            console.log(res.ok);
    
            if (!res.ok)
              throw new Error("Something went wrong with fetching movies");
    
            const data = await res.json();
    
            if (data.Response === "False") throw new Error("Movie not found");
            console.log(data);
    
            setError("");
            setMovies(data.Search);
          } catch (error) {
            console.error(error.message);
            if (error.message !== "AbortError") {
              setError(error.message);
            }
          } finally {
            setIsLoading(false);
          }
        }
    
        if (query.length < 3) {
          setError("");
          setMovies([]);
          return;
        }
    
        fetchMovies();
    
        return () => {
          controller.abort()
        }
      }, [query]);

    return {movies, error, isLoading}
}
