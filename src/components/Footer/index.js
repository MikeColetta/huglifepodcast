import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css'

function Footer() {
    return (
        <div>
            <Container className="customFooter">
                © Copyright 2022 - Mike Coletta and Monica Nevi
            </Container>
        </div>
    )
}

export default Footer;