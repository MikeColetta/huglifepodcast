import React from 'react';
import Jumbotron from '../components/Jumbotron';
import ContactForm from '../components/ContactForm';


class Contact extends React.Component {

    render() {
    return (
        <div>
            <Jumbotron />
            <ContactForm />
        </div>
    )
    }
}

export default Contact;