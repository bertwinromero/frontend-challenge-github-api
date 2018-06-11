import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import LoadingDots from '../common/LoadingDots';
import toastr from 'toastr';

export class UserProfile extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: Object.assign({}, this.props.user)
        };

    }

    componentDidMount() {
        const id = this.props.params.id;
        this.props.actions.searchUserById(id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user.id != nextProps.user.id) {
            this.setState({ user: Object.assign({}, nextProps.user) });
        }
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                {!this.props.loading && <div>
                    <div className="user-profile text-center">
                        <img src={user.avatar_url} />
                        <h3>{user.name}</h3>
                        <p><i>{user.login}</i></p>
                    </div>
                    <div className="repo-and-follow-container">
                        <button className="btn btn-primary" type="button">
                            Repositories <span className="badge">{user.public_repos}</span>
                        </button>
                        <button className="btn btn-info" type="button">
                            Followers <span className="badge">{user.followers}</span>
                        </button>
                        <button className="btn btn-warning" type="button">
                            Following <span className="badge">{user.following}</span>
                        </button>
                    </div>
                    <hr />
                    <div className="user-info">
                        <div className="row">

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">Bio</label>
                                    <div className="ellipsis">
                                        <p className="form-control-static">{user.bio || 'None'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">blog</label>
                                    <div className="ellipsis">
                                        <p className="form-control-static">{user.blog || 'None'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">company</label>
                                    <div className="ellipsis">
                                        <p className="form-control-static">{user.company || 'None'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">email</label>
                                    <div className="ellipsis">
                                        <p className="form-control-static">{user.email || 'None'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">events_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.events_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">followers_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.followers_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">following_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.following_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">gists_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.gists_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">html_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.html_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">organizations_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.organizations_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">public_gists</label>
                                    <div className="ellipsis">
                                        <p className="form-control-static">{user.public_gists}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">received_events_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.received_events_url}</a>
                                    </div>
                                </div>
                            </div>



                        </div>


                        <div className="row">

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">repos_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.repos_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">starred_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.starred_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">subscriptions_url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.subscriptions_url}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">type</label>
                                    <div className="ellipsis">
                                        <p className="form-control-static">{user.type}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label className="control-label">url</label>
                                    <div className="ellipsis">
                                        <a className="form-control-static">{user.url}</a>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>}

                <div className="loading-container">
                    {this.props.loading && <LoadingDots />}
                </div>
            </div>
        );
    }
}

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

UserProfile.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
