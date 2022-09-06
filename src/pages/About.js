import React from 'react';
import { Row, Container, Image } from 'react-bootstrap';


class About extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h3 className="recentHeading mt-1">
                            About the HugLife Podcast
                        </h3>
                    </Row>
                    <Row className="p-3" style={{ color: '#FAF3DD' }}>
                        <h5>Monica Nevi and Mike Coletta are comedians originally from Seattle that want you to be positive.
                            Each episode Monica, Mike, and sometimes a special guest positive spin something most people find daunting.
                            Whether it's traffic, air travel, or being forced into an awkward social situation, Monica and Mike will tell you why it's great
                            to be there!
                            Each episode also features lexical embraces (shout outs), good news stories, and a charity we high light at the end of the episode.
                            You're great!</h5>
                    </Row>
                    <Image className='aboutImage' fluid='true' rounded='true' src="https://ik.imagekit.io/4lalrpwz0sy/BadGirls_wcb_KxUKO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662427791179" alt="Codex Podcast Banner"></Image>
                </Container>
            </div >
        )
    }
}

export default About;