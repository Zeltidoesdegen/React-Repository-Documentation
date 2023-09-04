import {Button, Card} from 'react-bootstrap';

//props = variable given, para matawag ko yung files without the need to call it in html
const GridItems = (props) => {
    return (  
        <>
        <div className="col-4">
            <Card>
                <Card.Img variant="top" src={props.imgFile} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    {props.desc}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}
 
export default GridItems;