import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ModalMovie from './../ModalMovie/ModalMovie'

import { useState } from 'react';




import './Movie.css'

function Movie(props) {
    let movi = props.data;

    const [showFlag, setShowFlag] = useState(false);
    const [moviData, setClickedMovi] = useState({});
    const handleShow = (movi) => {
        setClickedMovi(movi);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }

    return (
        <>
            <Col>
                <Card style={{ width: '18rem', height: "100%" }}>
                    <Button variant="outline-dark" onClick={() => { handleShow(movi) }}>add to favorites</Button>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movi.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{movi.title}</Card.Title>
                        <Card.Text>
                            {movi.overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <ModalMovie showFlag={showFlag} handleclose={handleclose} data={moviData} />

        </>

    );
}

export default Movie;