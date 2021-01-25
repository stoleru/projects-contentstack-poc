import React, { useEffect, useState } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import ContentStack from '../services/contentstack';
import ProjectCard from '../components/ProjectCard';

function Home() {
    const [homepage, setHomepage ] = useState([]);

    useEffect(() => {
        ContentStack.getEntry('homepage', null, 'featured_projects').then(response => {
            let data = response.data?.entries[0];
            setHomepage(data);
        });
      }, []);

    return (
        <center>
            <Jumbotron>
                <h1>{homepage.title}</h1>
                <hr />
                <Row>
                    <Col md={6}>
                        <h3>About us</h3>
                        <p>
                            {homepage.featured_text}
                        </p>
                    </Col>
                    <Col md={6}>
                        <h3>Featured projects</h3>
                        <hr />
                        <Row>
                            {homepage?.featured_projects?.map(item => <ProjectCard {...item}/>)}
                        </Row>
                    </Col>
                </Row>
            </Jumbotron>
        </center>
    );
}

export default Home;