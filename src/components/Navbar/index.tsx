function Navbar() {
    return (
        <nav className="bg-[#121212] py-2">
            <div className="w-[80%] mx-auto flex justify-between items-center">
                <div className="flex space-x-16">
                    <div className="flex flex-col text-yellow-500">
                        <h1 className="text-[18px] leading-4">All About</h1>
                        <h1 className="text-[24px] leading-5 font-semibold">
                            Movies
                        </h1>
                    </div>
                    <button className="text-[18px] text-yellow-500 hover:underline">
                        Explore
                    </button>
                </div>
                <div>
                    <input placeholder="Search" className="w-[500px] h-10 outline-none text-lg bg-black text-[#c2c2c2] px-4 placeholder:text-[#646464] rounded-xl " type="text" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
