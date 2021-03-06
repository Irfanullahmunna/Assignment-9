
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { Button } from 'react-bootstrap';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const styles = {
        margin:"20px",
        padding:"10px",
        listStyle:"none",
        display:"inline"
    }
    return (
        <div style={{backgroundColor: 'white', borderBottom:'1px solid gray'}} className="container row p-2 mt-2">
            <div  className="col-md-4 text-center ">
                <h2 style={{textAlign: 'center'}}>CHITTAGONG RIDERS</h2>
            </div>
            <div className="col-md-8 d-flex justify-content-around">
                <div style={{textAlign: 'center'}}>
                    <Link style={{textDecoration:"none", color:"black"}} to="/"><li style={styles}>Home</li></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/"><li style={styles}>Destination</li></Link>
                    <li style={styles}>Blog</li>
                    <li style={styles}>Contact</li>
                    <li style={styles}>{loggedInUser.name}</li>
                    {!loggedInUser.name && < Button as={Link} to="/login/" className="btn btn-danger">Login</Button>}
                </div>
            </div>
        </div>
    );
};

export default Header;