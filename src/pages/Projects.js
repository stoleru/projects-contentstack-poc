import React, { useEffect, useState } from 'react';
import { Jumbotron, Row } from 'reactstrap';
import ContentStack from '../services/contentstack';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const [projects, setProjects ] = useState([]);

    useEffect(() => {
        ContentStack.getEntry('projects').then(response => {
            let data = response.data?.entries;
            setProjects(data);
        });
      }, []);

    return (
        <center>
            <Jumbotron>
                <h1>Projects</h1>
                <hr />
                <Row>
                    {projects.map(item => <ProjectCard {...item} />)}
                </Row>
            </Jumbotron>
        </center>
    );
}

export default Projects;