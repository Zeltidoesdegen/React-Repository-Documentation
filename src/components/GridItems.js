import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//props = variable given, para matawag ko yung files without the need to call it in html
const GridItems = (props) => {
    let information = {
        name: props.name,
        image: props.imgFile,
        desc: props.desc,
    };
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
                    <Button variant="warning">
                        <Link to="/React-Repository-Documentation/SinglePage" state={information}>
                            Go somewhere
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}
 
export default GridItems;