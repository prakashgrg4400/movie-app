import { CarouselMovie, imagePath } from "../../utilis/constant";
import { TbThumbUp } from "react-icons/tb";

interface HomeCarouselListProps {
    next: number[];
    carouselMovies: CarouselMovie[];
}
function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {
    return (
        <div>
            <h1 className="text-xl font-bold text-yellow-500">Up next</h1>
            {next.map((index) => {
                return (
                    <div className="flex gap-3">
                        <img
                            src={imagePath + carouselMovies[index]?.poster_path}
                            className="w-[100px]"
                            alt=""
                        />
                        <div className="leading-5 flex flex-col justify-between py-2">
                            <div>
                                <h1>{carouselMovies[index]?.title}</h1>
                                <h2 className="line-clamp-3 text-md text-zinc-400">
                                    {carouselMovies[index]?.overview}
                                </h2>
                            </div>
                            <div className="flex gap-2 items-center">
                                <TbThumbUp className="text-lg" />
                                <h3 className="text-sm">{carouselMovies[index]?.vote_count}</h3>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default HomeCarouselList;
