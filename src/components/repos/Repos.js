import React from 'react'
import RepoItem from './RepoItem';
import propTypes from 'prop-types'

export const Repos = ({ repos }) => {


    return repos.map((repo => <RepoItem repo={repo} key={repo.id} />))
    // return ('heloo')
}


Repos.propTypes = {
    repos: propTypes.array.isRequired
}



export default Repos