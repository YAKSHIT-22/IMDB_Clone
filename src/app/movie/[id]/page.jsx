import Image from "next/image";


async function getMovie(movieId){
    const res= await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`) 
    return await res.json();
}

export default async function MoviePage({params}) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 my-2 grid grid-cols-1 lg:grid-cols-2 items-center justify-center max-w-5xl mx-auto xl:max-w-6xl gap-6">
        <div className="grid-cols-1 flex items-center justify-center"> <Image src={`https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
            }`} width={500} height={300} style={{maxWidth:"100%",height:"auto"}} className="rounded-lg" placeholder="blur" blurDataURL="/loading.svg" alt="Movie Poster"></Image></div>
            <div className="p-2 grid-cols-1 flex items-start justify-center gap-2 flex-col">
                <h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
                <p className="text-lg "><span className="font-semibold mr-1">Overview:- </span>{movie.overview}</p>
                <p className="flex items-center justify-center gap-1"><span className="font-semibold">Date Released:</span>{movie.release_date || movie.first_air_date}</p>
                <p className="flex items-center justify-center gap-1"><span className="font-semibold">Rating:</span>{movie.vote_count}</p>
                
            </div>
        </div>
    </div>
  )
}
