import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';
import UserSearchForm from './UserSearchForm';
import { browserHistory } from 'react-router';
import LoadingDots from '../common/LoadingDots';

class UsersPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            user: Object.assign({}, this.props.user),
            query: ''
        };


        this.searchUsers = this.searchUsers.bind(this);
        this.updateSearchState = this.updateSearchState.bind(this);
    }

    updateSearchState(event) {
        let query = this.state.query;
        query = event.target.value;
        return this.setState({ query: query });
    }

    searchUsers(event) {
        event.preventDefault();
        this.setState({users: []});
        this.props.actions.searchUsers(this.state.query)
            .then(() => {
                // do somthing if success
            }).catch(() => {
                // do something if error
            });
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <UserSearchForm
                    searchUsers={this.searchUsers}
                    query={this.state.query}
                    onChange={this.updateSearchState}
                />
                <hr />
                <h2 className="default-padding-left">Result(s)</h2>

                <UserList
                    users={users}
                />

                <div className="loading-container">
                    {this.props.loading && <LoadingDots />}
                </div>
            </div>
        );
    }
}

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    user: PropTypes.object,
    query: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.users,
        query: state.query,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);