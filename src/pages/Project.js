import React, { useEffect, useState } from 'react';
import { Jumbotron, Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import ContentStack from '../services/contentstack';

function Project(props) {
    const [project, setProject ] = useState({});
    const projectId = props.match.params.projectId;

    useEffect(() => {
        ContentStack.getEntry('projects', projectId).then(response => {
            let data = response.data?.entry;
            setProject(data);
        });
      }, [projectId]);

    const video = project.media?.find(obj => !!obj.video).video?.youtube_link;
    return (
        <center>
            <div>
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="/projects">Projects</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">{project.title}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <Jumbotron>
                <h1>{project.title}</h1>
                <hr />
                <div
                    dangerouslySetInnerHTML={{
                        __html: project.description
                    }}></div>
                <hr />
                <Row>
                    <Col md={6}>
                        <img src={project.media?.find(obj => !!obj.cover).cover.image.url} width="350" alt={project.title} />
                    </Col>
                    {video && (
                        <Col md={6}>
                            <iframe title={project.title} width="100%" height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Col>
                        )}
                </Row>
            </Jumbotron>
        </center>
    );
}

export default Project;