import React from 'react'

const RepoItem = (repo) => {
    { console.log(repo.repo.name) }
    return (
        <div className='card'>
            <h3>
                <a href={repo.repo.html_url}> {repo.repo.name} </a>
                {/* <p>{repo.repo.name}</p> */}


            </h3>

        </div>
    )
}

export default RepoItem;
