import React from 'react';
import ContactForm from '../components/ContactForm';
import {Row, Container} from 'react-bootstrap';


class Contact extends React.Component {

    render() {
        return (
            <div>
                <Container>
                <Row>
                    <h3 className="recentHeading mt-1">
                        Contact Us!
                    </h3>
                </Row>

                <Row style={{ color: '#FAF3DD', justifyContent: 'center' }}>
                    Have a question for the show? Send us an email below or at codexhistorypodcast@gmail.com!
                </Row>
                </Container>
                <ContactForm />
            </div>
        )
    }
}

export default Contact;