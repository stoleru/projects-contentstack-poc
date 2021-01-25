import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Col } from 'reactstrap';
import { Link } from "react-router-dom";

function ProjectCard(props) {
    let projectImage = props.media.find(obj => !!obj.cover).cover.image.url;
    let projectDescription = props.description.replace(/<\/?[^>]+(>|$)/g, "");

    return (
        <Col md={4} key={props.uid}>
            <Card>
                <CardImg top width="100%" src={projectImage} alt={props.title} />
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardText>{projectDescription.substr(0, 100)}...</CardText>
                    <Link to={`/projects/${props.uid}`} className="btn btn-primary">More</Link>
                </CardBody>
            </Card>
        </Col>
    );
}

export default ProjectCard;