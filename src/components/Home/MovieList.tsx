import { imagePath, MovieCard } from "../../utilis/constant"


interface MovieListProps{
    topMovies:MovieCard[]
}

function MovieList({topMovies}:MovieListProps) {
    console.log(topMovies);
  return (
    <div className="my-14">
        <h1 className="text-3xl font-bold text-yellow-500 mb-2">Top Rated Movies</h1>
        <div className=" row row-cols-6">
            {topMovies.length>0 && topMovies.map((movie , index)=>{
                return (
                    <div className="" key={index}>

                        <div className="relative overflow-hidden" >
                            <img src={imagePath+movie.poster_path} alt="" />
                            <div className="absolute -bottom-6 h-28 w-full _carouselGradient"></div>
                        </div>
                        <div>
                            <h1 className="text-[17px]">{movie.title}</h1>
                            <h1 className="text-[17px]">{movie.title}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MovieList