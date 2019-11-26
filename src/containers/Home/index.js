import React from 'react';
import Welcome from 'components/Welcome';
import Introduction from 'components/Introduction';
import { Container, Row, Col } from 'react-bootstrap'
import { Config } from 'data/config.js';

function Home() {
  return (
    <div>
      <Welcome/>
      <Container>
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
            <Introduction questions={Config.amount} type={Config.type} category={Config.category} difficulty={Config.difficulty}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
