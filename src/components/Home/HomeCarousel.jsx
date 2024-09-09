import React from "react";
import { TbThumbUp } from "react-icons/tb";

function HomeCarousel() {
    return (
        <div className="relative">
            <div className="w-[900px] relative">
                <div className=" bg-red-300 aspect-[7/4] block "></div>
                <div className="h-44 absolute w-full bottom-0 left-0 _carouselGradient"></div>
            </div>
            <div className="absolute bottom-0 px-4 flex gap-4  ">
                <div className="w-[160px] aspect-[4/5] bg-blue-500 "></div>
                <div className="flex flex-col gap-1 justify-end">
                    <h1 className="text-4xl text-white">My title</h1>
                    <h2 className="w-[600px] text-xl line-clamp-3 text-zinc-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt facilis iure facere, explicabo similique nihil,
                        cum quas sapiente minima porro labore ratione voluptates
                        repellat pariatur, numquam sequi hic blanditiis. Labore
                        illo obcaecati cumque? Repudiandae, provident dicta
                        vitae quasi aspernatur iste debitis natus laboriosam
                        recusandae possimus doloremque dolores fugiat quo
                        quaerat.
                    </h2>
                    <div className="flex gap-1 text-zinc-400 text-2xl items-center">
                        <TbThumbUp/>
                        <h2 className="text-lg">427</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCarousel;
