import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL, TMDB_API_TOKEN } from "../config";
import MovieCard from "./MovieCard";

export const Movie = () => {
  const { data, isLoading } = useQuery(["fetch-movie"], () => {
    return axios.get(`${BASE_URL}/discover/movie`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_TOKEN}`,
      },
    });
  });

  console.log(data?.data);
  if (isLoading) return <h1>Loading....</h1>;
  return (
    <div>
      <div className="flex flex-wrap px-4 sm:px-1 justify-center gap-4">
        {data?.data.results.map((movie) => {
          return <MovieCard {...movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};
