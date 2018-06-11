import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


const Header = () => {
    return (

        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
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