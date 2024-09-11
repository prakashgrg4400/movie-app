import { useEffect, useState } from "react";
import { publicAxios } from "../../api/axiosInstance";
import { CarouselMovie } from "../../utilis/constant";
import HomeCarousel from "./HomeCarousel";

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzdhOGQzYjIxZmFmYzcxOWIxZTYwZDIxNjNhZGI2OSIsIm5iZiI6MTcyNTk1NDk4Ni42MTcxLCJzdWIiOiI2NmRmZmEyYzljZmViMjhkNjY2ZGYxNWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kxi95IhtGocQegPHj1kMCLjO48jXrXEhTDNhqYwAHAk

// e77a8d3b21fafc719b1e60d2163adb69
function HomeSlider() {   
   
    const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);

    const fetchUpcomingMovies = async () => {
        try {
            const response = await publicAxios.get(
                "/3/movie/upcoming?language=en-US&page=1"
            );
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
        <div className="relative w-[900px] ">
            <div id="carouselExample" className="carousel slide">

                <HomeCarousel carouselMovies={carouselMovies} />
                
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default HomeSlider;
