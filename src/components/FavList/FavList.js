import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';

import Favorite from '../Favorite/Favorite';


function FavList() {

    const [FavListArr, setFavListArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getMovies`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setFavListArr(data);
    }
    useEffect(() => {
        sendReq();
    }, [])

    const takeMove = (arr) => {

        const updatedMoves = FavListArr.map(move => {
            if (move.id === arr.id) {
                return arr;
            } else {
                return move;
            }
        });

        setFavListArr(updatedMoves);
    }
    const deletFromArray = (id) => {

        const updatedMoves = FavListArr.filter(move => move.id !== id);
        setFavListArr(updatedMoves);

    }

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {FavListArr.map((move) => {
                    return (
                        <Favorite key={move.id.toString()} data={move} takeMove={takeMove} deletFromArray={deletFromArray} />
                    )
                })}
            </Row>

        </>
    );
}

export default FavList;