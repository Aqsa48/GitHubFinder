// import React from 'react'
// import PropsType from 'prop-types';
// import { Link } from 'react-router-dom';


// const Navbar = ({ icon, title }) => {

//     return (
//         <nav className='navbar bg-primary'>

//             <h1>   <i className={icon} />  {title}</h1>

//             <ul>
//                 <li> <a to='/'> Home </a></li>
//                 <li> <a to='/about'> About </a></li>
//             </ul>
//         </nav>

//     )
// }

// Navbar.defaultProps = {
//     title: 'Gihub Finder',
//     icon: 'fab fa-github',
// };
// Navbar.PropsType = {
//     title: PropsType.string.isRequired,
//     icon: PropsType.string.isRequired,
// }

// export default Navbar


import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (

        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;