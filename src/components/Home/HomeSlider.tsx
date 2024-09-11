import { useEffect, useState } from "react";
import { publicAxios } from "../../api/axiosInstance";
import { CarouselMovie } from "../../utilis/constant";
import HomeCarousel from "./HomeCarousel";
import HomeCarouselList from "./HomeCarouselList";

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzdhOGQzYjIxZmFmYzcxOWIxZTYwZDIxNjNhZGI2OSIsIm5iZiI6MTcyNTk1NDk4Ni42MTcxLCJzdWIiOiI2NmRmZmEyYzljZmViMjhkNjY2ZGYxNWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kxi95IhtGocQegPHj1kMCLjO48jXrXEhTDNhqYwAHAk

// e77a8d3b21fafc719b1e60d2163adb69
function HomeSlider() {
    const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);

    const [next , setNext] = useState<number[]>([0,1,2,3]);

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
        <div className="row border-4 border-solid">
            <div className="relative col-8">
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
            <div className="col-4">
                <HomeCarouselList next={next} carouselMovies={carouselMovies} />
            </div>
        </div>
    );
}

export default HomeSlider;
