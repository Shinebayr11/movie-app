"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

const GenrePage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const genreName = searchParams.get("name");
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${params.id}&language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      });
  }, [params.id, page]);

  return (
    <div className="max-w-[1280px] mx-auto px-20 py-10">
      <h1 className="text-2xl font-bold mb-8">{genreName} Movies</h1>

      <div className="grid grid-cols-4 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded-md disabled:opacity-40"
        >
          Previous
        </button>

        <p>
          {page} / {totalPages}
        </p>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded-md disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GenrePage;
