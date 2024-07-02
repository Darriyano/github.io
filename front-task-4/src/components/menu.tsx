import React, {FC} from 'react';
import './firstpagestyle.css';

const Menu: FC = () => {
    return (
        <nav className="main-menu">
            <ul className="menu">
                <li><a href="#first-page">Home</a></li>
                <li><a href="#second-page">About</a></li>
                <li><a href="#third-page">My skills</a></li>
                <li><a href="#fourth-page">Assignment</a></li>
                <li><a href="#fifth-page">Portfolio</a></li>
                <li><a href="#sixth-page">Contacts</a></li>
            </ul>
        </nav>
    );
};

export default Menu;