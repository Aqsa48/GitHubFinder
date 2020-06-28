import React, { Component, Fragment } from 'react'
import Spinner from '../layouts/spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)


        // console.log(this.props.singleUserData)
    }

    static PropType = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,

    }

    render() {
        const {
            name,
            avatar_url,
            login,
            html_url,
            company,
            location,
            blog,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            bio,

        } = this.props.singleUserData;

        const { loading, repos } = this.props;

        //  Call Spinner while calling the data of spinner
        if (loading) return <Spinner />

        return <Fragment>
            <Link to='/' className="btn btn-light" > Back To Search   </Link>
            Hireable :{'  '}
            {hireable ? (<i className='fas fa-check text-success' />) : (
                <i className='fas fa-circle text-danger' />
            )
            }
            <div className='card grid-2'>
                <div className='all-center'>
                    <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p> {location}</p>
                </div>
                <div>
                    {bio &&
                        (<Fragment>
                            <h3> Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                        )}
                    <a href={html_url} className="btn btn-dark my-1" > User GitHub</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong> Username : </strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong> Company : </strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong> Website : </strong> {login}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            {/* Ending of card */}



            <div className="card text-center">
                <div className="badge badge-primary"> Followers :{followers} </div>
                <div className="badge badge-success"> Following :{following} </div>
                <div className="badge badge-light"> public Repos :{public_repos} </div>
                <div className="badge badge-dark"> public Gists :{public_gists} </div>
            </div>

            <Repos repos={repos} />


        </Fragment >
    }
}

export default User
