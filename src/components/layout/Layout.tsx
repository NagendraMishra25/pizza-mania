import React from 'react'
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import Container from 'react-bootstrap/Container';

export const Layout = (props: any) => {
    return (
      <>
        <Header />
        <Container fluid="xl" className="content-container">
          {props.children}
        </Container>
        <Footer />
      </>
    );
}
