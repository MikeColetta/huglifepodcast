import React from "react";
import { Container, Card, Row, Image } from 'react-bootstrap';
import SidebarAd from "../SidebarAd";


function PromoColumn() {
    return (
        <Container className="episodeContainer">
            <h3 className="recentHeading mt-1">Support the Podcast</h3>

            <Card className="episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <Row>

                                <h5 className="card-title">Amazon</h5>
                            </Row>
                            <SidebarAd />
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <Row>
                                <a className="sourceAnchor" href="https://www.patreon.com/HugLifePodcast" target="_blank" rel="noreferrer" >
                                    <h5 className="card-title">Patreon</h5></a>
                            </Row>
                        </div>
                    </Row>
                </div>
            </Card>
        </Container>
    )
}


export default PromoColumn;