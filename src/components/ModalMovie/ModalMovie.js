import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';



function ModalMovie(props) {
    let moviData = props.data;

    const [isLoading, setLoading] = useState(false);

    const sendReq = async (moviData) => {
        setLoading(true);
        const serverURL = `http://localhost:5500/addMovie`;
        fetch(serverURL, {
            method: 'POST',
            body: JSON.stringify(
                moviData
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            if (response.status === 200) {
                console.log("saved");
            } else {
                console.log("not saved");
            }
        }).then((data) => {
            console.log(data);
            // Handle data
        }).catch((err) => {
            console.log(err.message);
        });
        setLoading(false);
    }

    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>{moviData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={`https://image.tmdb.org/t/p/original/${moviData.poster_path}`} width='100%' ></Image>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Add Your Notes</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { sendReq(moviData); props.handleclose() }}>
                        {isLoading ? 'Saving...' : 'Save'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalMovie;