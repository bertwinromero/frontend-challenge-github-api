import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Pagination from '../common/Pagination';

const UserList = ({ users }) => {
    function setMax(){
        if(users.length > 12)
            return 12;
        else 
            return users.length;
    }
    
    return (
        <div className="user-list-container">
            <div className="row">
                {users.slice(0, setMax()).map(user =>
                    <div
                        key={user.id}
                        className="col-sm-6 col-md-3 col-lg-3 hover-cursor">
                        <Link to={`/user/${user.id}`}>
                            <div className="user-item mt-2">
                                <img className="user-img mr-2" src={user.avatar_url} alt="user" />
                                <p className="user-name-text">{user.login}</p>
                            </div>
                        </Link>
                    </div>
                )}

            </div>
            {(users.length > 12) && <Pagination/>}
        </div>

    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;