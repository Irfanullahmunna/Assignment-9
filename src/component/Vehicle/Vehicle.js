import React from 'react';
import { Link } from 'react-router-dom';

const Vehicle = (props) => {
    const {image, vehicle} = props;
    return (
        <div style={{float: 'left', padding: '5px'}} className="col-md-3">
            <div style={{  border: '2px solid gray', borderRadius: '2px', padding: '10px' }} className="text-center">
                <img style={{ maxWidth:'100%', height: '300px', width: '300px'}} src={image} alt="" />
                <Link style={{ textDecoration: 'none', color: 'black', textAlign:'center' }} to={`/book/${vehicle}`}> <p>{vehicle}</p> </Link>
            </div>
        </div>
    );
};

export default Vehicle;