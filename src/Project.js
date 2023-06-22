import React from 'react';

const Project = ({projects}) => {
    const projectList = projects.length ? (
        projects.map(project => {
            return (
                <div className="collection-item" key={project.id}>
                    <a href={project.websiteLink}><img className="projectImage" src={require(`${project.imageLink}`)} /></a>
                </div>
            )
        })
    ) : (
        <p>No Projects to currently show</p>
    )
    return (
        //{ projectList }
        projectList
    )
}

export default Project;