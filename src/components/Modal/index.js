import React from 'react'
import { Link } from "react-router-dom";
import { Button, Modal, Row, Col,Container} from 'react-bootstrap';

function QuitModal(props) {

  const {handleClose,show} = props
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>Do you want to go back to Home Screen?<br/>All your process will be lost</Modal.Body>
      <Container>
        <Row>
          <Col  md={{ span: 6}}><Link to="/">  <Button variant="danger"  size="lg" block>Yes</Button></Link></Col>
          <Col  md={{ span: 6}}><Button variant="success" onClick={handleClose}  size="lg" block>Cancel</Button></Col>
        </Row>
      </Container>
      <Modal.Footer/>
      </Modal>
  )
}
export default QuitModal