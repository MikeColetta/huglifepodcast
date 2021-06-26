import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SidebarAd from '../components/SidebarAd';
import EpisodesContainer from '../components/EpisodesContainer';
import API from '../utils/API';
import './style.css';
import { Row, Container } from 'react-bootstrap';

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron />
                <Container>
                    <Row>
                        <div className="col-10">
                            <EpisodesContainer />
                        </div>

                        <div className="col-2">
                            <SidebarAd />
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Homepage;