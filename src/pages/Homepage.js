import React from 'react';
import EpisodesContainer from '../components/EpisodesContainer';
import Sources from '../components/Sources';
import './style.css';
import { Row, Container, Col, Image } from 'react-bootstrap';


class Homepage extends React.Component {

    render() {
        return (
            <div>
                <Container className='bannerContainer'>
                    <Image className='bannerImage' fluid='true' rounded='true' src="https://ik.imagekit.io/4lalrpwz0sy/huglifeBanner_WhbnHwmOk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662427114907" alt="Codex Podcast Banner"></Image>
                </Container>
                <Container>
                    <Row className="mt-3">
                        <Col md={8}>
                            <EpisodesContainer />
                        </Col>
                        <Col md={4}>
                            <Sources />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Homepage;