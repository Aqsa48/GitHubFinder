import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {


    // const { login, avatar_url, html_url } = props.user // code cleaning like everytime you write this.state with states

    return (
        <div className='card text-center'>
            <img
                src={avatar_url}
                alt=''
                className='round-img'
                style={{ width: '60px' }}
            />
            <h3> {login}</h3>
            <div className="btn btn-dark btn-sm my-1">
                <Link to={`/user/${login}`}  > More  </Link>
            </div>

        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,

}


export default UserItem
