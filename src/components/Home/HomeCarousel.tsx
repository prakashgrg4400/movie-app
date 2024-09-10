import { useEffect, useState } from "react";
import { TbThumbUp } from "react-icons/tb";
import { imagePath } from "../../utilis/constant";
import { publicAxios } from "../../api/axiosInstance";

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzdhOGQzYjIxZmFmYzcxOWIxZTYwZDIxNjNhZGI2OSIsIm5iZiI6MTcyNTk1NDk4Ni42MTcxLCJzdWIiOiI2NmRmZmEyYzljZmViMjhkNjY2ZGYxNWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kxi95IhtGocQegPHj1kMCLjO48jXrXEhTDNhqYwAHAk

// e77a8d3b21fafc719b1e60d2163adb69
function HomeCarousel() {
    interface CarouselMovie {
        backdrop_path: string;
        poster_path: string;
        title: string;
        overview: string;
        vote_count: number;
    }

    const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);

    const fetchUpcomingMovies = async () => {
        try {
            const response = await publicAxios.get("/3/movie/upcoming?language=en-US&page=1");
            //  console.log(response.data.results);
            setCarouselMovies(response.data.results);
        } catch (err) {
            console.log("fetching upcoming moveies error , ", err);
        }
    };

    useEffect(() => {
        fetchUpcomingMovies();
    }, []);

    console.log(carouselMovies);

    return (
        <div className="relative">
            <div className="w-[900px] relative">
                {/* <div className=" bg-red-300 aspect-[7/4] block "></div> */}
                <img
                    src={imagePath + carouselMovies[0]?.backdrop_path}
                    className="block w-full aspect-[7/4]"
                    alt=""
                />
                <div className="h-44 absolute w-full bottom-0 left-0 _carouselGradient"></div>
            </div>
            <div className="absolute bottom-0 px-4 flex gap-4  ">
                {/* <div className="w-[160px] aspect-[4/5] bg-blue-500 "></div> */}
                <img src={imagePath+carouselMovies[0]?.poster_path} className="w-[160px] aspect-[4/5] " alt="" />
                <div className="flex flex-col gap-1 justify-end">
                    <h1 className="text-4xl text-white">
                        {carouselMovies[0]?.title}
                    </h1>
                    <h2 className="w-[600px] text-xl line-clamp-3 text-zinc-400">
                        {carouselMovies[0]?.overview}
                    </h2>
                    <div className="flex gap-1 text-zinc-400 text-2xl items-center">
                        <TbThumbUp />
                        <h2 className="text-lg">{carouselMovies[0]?.vote_count}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCarousel;
