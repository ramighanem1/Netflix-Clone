import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateModal(props) {

    const updateMovie = async (e) => {
        e.preventDefault();
        const obj = {
            title: e.target.title.value,
            poster_path: e.target.posterpath.value,
            overview: e.target.overview.value,
        }
        const serverURl = `${process.env.REACT_APP_serverURL}/UPDATE/${props.item.id}`
        const axiosRes = await axios.put(serverURl, obj);
        props.closeUpdateModal();
        props.takeNewArrFromChild(axiosRes.data[0]);

    }

    return (
        <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateMovie}>
                    <Form.Group className="mb-3">
                        <Form.Label>Image Path</Form.Label>
                        <Form.Control name="posterpath" type="text" defaultValue={props.item.posterpath} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" type="text" defaultValue={props.item.title} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Top Text</Form.Label>
                        <Form.Control name="overview" as="textarea" rows={3} defaultValue={props.item.overview} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeUpdateModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateModal;