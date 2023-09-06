import {Button} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'

const SinglePage = () => {
    const location = useLocation();
    const data = location.state;
    return (  
        <>  
            <h1 className="text-warning"> {data.name}</h1>
            <div className='card'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={data.image} className='w-100' alt=""></img>
                    </div>
                    <div className='col-6'>
                        <h3>Synopsis:</h3>
                        <p>{data.desc}</p>
                        <Button variant="warning">
                            <Link to="/React-Repository-Documentation/">
                                Go Back
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>

    );
}
 
export default SinglePage;