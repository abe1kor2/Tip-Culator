import React from 'react';
import logo from './images/logo.svg'
import './Home.css'
import Card from './Card';


function Home(props) {
    
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
            <Card/>
        </div>
    );
}

export default Home;