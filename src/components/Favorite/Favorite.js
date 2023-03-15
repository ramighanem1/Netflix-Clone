import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import UpdateModal from './../UpdateModal/UpdateModal';

function Favorite(props) {

    let movie = props.data;
    const [updateFlag, setUpdateFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});

    const showUpdateModal = (item) => {
        setUpdateFlag(true);
        setClickedMovie(item);
    }

    const handelDelete = async () => {
        const response = await fetch(`${process.env.REACT_APP_serverURL}/DELETE/${movie.id}`, { method: 'DELETE' });
        if (response.ok) {
            props.deletFromArray(movie.id)
        }
    }

    const closeUpdateModal = () => {
        setUpdateFlag(false);
    }


    const takeNewArrFromChild = (arr) => {
        props.takeMove(arr);
    }

    return (
        <>
            <Col key={movie.id}>
                <Card style={{ width: '18rem', height: "100%" }} >
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.posterpath}`} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="success" onClick={() => { showUpdateModal(movie) }}>Update</Button>
                        <Button variant="danger" onClick={() => { handelDelete(movie) }}>Delete</Button>
                    </Card.Footer>
                </Card>
            </Col>

            <UpdateModal updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} item={clickedMovie} takeNewArrFromChild={takeNewArrFromChild} />


        </>
    );
}

export default Favorite;