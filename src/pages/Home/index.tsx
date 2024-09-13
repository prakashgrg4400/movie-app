import { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { publicAxios } from "../../api/axiosInstance";
import { MovieCard } from "../../utilis/constant";
import MovieList from "../../components/Home/MovieList";

function Home() {
    const [topMovies, setTopMovies] = useState<MovieCard[]>([]);

    const fetchTopMovies = async () => {
        try {
            const response = await publicAxios.get(
                "/3/movie/top_rated?language=en-US&page=1"
            );
            setTopMovies(response.data.results);
        } catch (error) {
            console.log("Failed to fetch Top Movies !!!", error);
        }
    };

    useEffect(() => {
        fetchTopMovies();
    }, []);

    //!==> to check whether movie is fetched or not.
    // useEffect(()=>{
    //     console.log(topMovies);
    // } , [topMovies]);
    return (
        <div className=" w-[90%] mx-auto">
            <HomeSlider />
            <MovieList topMovies={topMovies} />
        </div>
    );
}

export default Home;
