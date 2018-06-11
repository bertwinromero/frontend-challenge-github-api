import React from 'react';

const UserSearchForm = ({ searchUsers, query, onChange }) => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                    <div className="search-form">
                        <input
                            value={query}
                            onChange={onChange}
                            type="text"
                            className="form-control mb-2"
                            placeholder="Search" />
                    </div>

                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <button
                        onClick={searchUsers}
                        type="button"
                        className="btn btn-default w-100">Search</button>
                </div>
            </div>
        </form>
    );
};

UserSearchForm.propTypes = {
    searchUsers: React.PropTypes.func.isRequired,
    query: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};

export default UserSearchForm;
