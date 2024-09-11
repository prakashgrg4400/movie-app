import { CarouselMovie, imagePath } from "../../utilis/constant";
import { TbThumbUp } from "react-icons/tb";

interface HomeCarousels {
    carouselMovies: CarouselMovie[];
}

function HomeCarousel({ carouselMovies }: HomeCarousels) {
    return (
        <div className="carousel-inner">
            {carouselMovies.map((movie, ind) => (
                <div className={`carousel-item ${ind === 0 ? "active" : ""}`}>
                    <div className="relative">
                        {/* <div className=" bg-red-300 aspect-[7/4] block "></div> */}
                        <img
                            src={imagePath + movie?.backdrop_path}
                            className="block w-full aspect-[7/4]"
                            alt=""
                        />
                        <div className="h-44 absolute w-full bottom-0 left-0 _carouselGradient"></div>
                    </div>
                    <div className="absolute bottom-0 px-4 flex gap-4  ">
                        {/* <div className="w-[160px] aspect-[4/5] bg-blue-500 "></div> */}
                        <img
                            src={imagePath + movie?.poster_path}
                            className="w-[160px] aspect-[4/5] "
                            alt=""
                        />
                        <div className="flex flex-col gap-1 justify-end">
                            <h1 className="text-4xl text-white">
                                {movie?.title}
                            </h1>
                            <h2 className="w-[600px] text-xl line-clamp-3 text-zinc-400">
                                {movie?.overview}
                            </h2>
                            <div className="flex gap-1 text-zinc-400 text-2xl items-center">
                                <TbThumbUp />
                                <h2 className="text-lg">{movie?.vote_count}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomeCarousel;
