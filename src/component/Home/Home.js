import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import Header from "../Header/Header";
import fakeData from "../../fakedata.json";

import Vechicle from "../Vehicle/Vehicle";

const Home = () => {
    return (
        <div style={{margin:'10% auto'}} className="container text-center row gy-2">
            {
                fakeData.map(vh => <Vechicle vehicle={vh.vehicle} image={vh.image}></Vechicle>)
            }
        </div>
    );
};

export default Home;