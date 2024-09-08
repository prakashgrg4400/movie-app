import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Details from "./pages/Details";

function App() {
    return (
        <>
            <div >
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/> } />
                        <Route path="/movies" element={<Movies/> } />
                        <Route path="/movieDetails/:id" element={<Details/> } />
                        <Route path="*" element={<Navigate to={"/"} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
