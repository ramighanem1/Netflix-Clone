import { useEffect, useState } from "react";
import MovieList from '../MovieList/MovieList';


function Home() {

    const [trendingArr, setTrendingArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `http://localhost:5500/trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setTrendingArr(data);
    }
    useEffect(() => {
        sendReq();
    }, [])


    return (
        <>
            <MovieList data={trendingArr} />
        </>
    );
}

export default Home;