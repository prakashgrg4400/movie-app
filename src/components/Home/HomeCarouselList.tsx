import { CarouselMovie, imagePath } from "../../utilis/constant"

interface HomeCarouselListProps {
    next:number[],
    carouselMovies:CarouselMovie[]
}
function HomeCarouselList({next , carouselMovies} : HomeCarouselListProps) {
  return (
    <div>
        <h1 className='text-xl font-bold text-yellow-500'>Up next</h1>
        {
            next.map(index => {
                return (
                    <img src={imagePath+carouselMovies[index]?.poster_path} className="w-[100px]" alt="" />
                )
            })
        }
    </div>
  )
}

export default HomeCarouselList