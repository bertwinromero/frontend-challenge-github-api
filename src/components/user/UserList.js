import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Pagination from '../common/Pagination';

class UserList extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            users: Object.assign({}, this.props.users),
            max: 24
        };

        this.onPageChange = this.onPageChange.bind(this);

    }


    setMax() {
        if (this.props.users.length > this.state.max) {
            return this.state.max;
        }
        else
            return this.props.users.length;
    }

    getPageCount() {
        if (this.props.users.length > this.state.max) {
            // this.setState({ pageCount: Math.ceil(this.props.users.length / this.state.max) })
            return 2;
        }

        else
            return 0;
    }


    onPageChange(event) {
        console.log(event);
    }


    render() {
        return (
            <div className="user-list-container">
                <div className="row">
                    {this.props.users.slice(0, this.setMax()).map(user =>
                        <div
                            key={user.id}
                            className="col-sm-6 col-md-3 col-lg-3 hover-cursor">
                            <Link to={'/user/' + user.id}>
                                <div className="user-item mt-2">
                                    <img className="user-img mr-2" src={user.avatar_url} alt="user" />
                                    <p className="user-name-text">{user.login}</p>
                                </div>
                            </Link>
                        </div>
                    )}

                </div>
                {
                    (this.props.users.length > 12) &&
                    <Pagination
                        pageCount={this.getPageCount()}
                        onPageChange={this.onPageChange}
                    />
                }
            </div>

        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps)(UserList);