import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.scss';

export const Footer = () => {
    return (
        <div className="main-footer py-3">
            <Container >
                <Row>
                    <Col>
                        <div className="text-center">
                            &copy; Copyright {new Date().getFullYear()} Pizza mania app - All Rights Reserved.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
