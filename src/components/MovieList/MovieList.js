import Row from 'react-bootstrap/Row';
import Movie from './../Movie/Movie'
import './MovieList.css'

function MovieList(props) {
    let data = props.data;

    return (
        <>
        <Row xs={1} md={4} className="g-4">
                {data.map((move) => {
                    return (
                        <Movie key={move.id.toString()} data={move} />
                    )
                })}
            </Row>
          
        </>

    );
}

export default MovieList;