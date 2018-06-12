import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


const Header = () => {
    return (

        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand" to={`/users`}>
                        Oddle Frontend Challenge
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                </div>
            </div>
        </nav>

    );
};

export default Header;