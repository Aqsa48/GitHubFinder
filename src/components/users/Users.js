import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/spinner'
import PropsType from 'prop-types';

const Users = ({ user, loading }) => {
    if (loading) {
        return < Spinner />
    } else {
        return (
            <div style={customUserStyle}>
                {/* Bring whole users data from app.js state through props */}

                {user.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}

            </div>
        );
    }
}
Users.PropsType = {
    title: PropsType.array.isRequired,
    icon: PropsType.bool.isRequired,
}
const customUserStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
