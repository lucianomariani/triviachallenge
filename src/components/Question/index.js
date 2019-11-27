import React from 'react';
import {Button,  Jumbotron, Row, Col,Container, ProgressBar} from 'react-bootstrap';
import he from 'he'

class Question extends React.Component {
  handleClick = (e) => {
    const { param } = e.target.dataset;
    this.props.handleNextQuestion(param)
  }
  render() {
    const {questionNumber, questionsTotal, result } = this.props
    const now = (questionNumber + 1) * 100/questionsTotal;
    let answers = ''
    if (result) {
       if (this.props.result.type === 'boolean') {
        answers = (
          <>
            <Col md={{span: 6}}><Button onClick={this.handleClick} data-param="True" variant="primary" size="lg" block>True</Button></Col>
            <Col md={{span: 6}}><Button onClick={this.handleClick} data-param="False" variant="primary" size="lg" block>False</Button></Col>
          </>
          );
       }else{
       answers = this.props.result.answers.map((item, i) => {
        return (
          <Col key={i} md={{span: 6}}><Button onClick={this.handleClick} data-param={he.decode(item)} variant="primary"  size="lg" block>{he.decode(item)}</Button></Col>
            );
        });
      }
    } 
  return (
    result ? 
    <div className="question_and_options">
      <Container>
      <div>  
        <ProgressBar variant="success" now={now} label={`${questionNumber + 1}/${questionsTotal}`} /> 
      </div>
      <h3 className="category">{result.category}</h3>
        <Jumbotron>
          <Row>
            <Col>
              <h2>{he.decode(result.question)}</h2>
            </Col>
          </Row>
          <Row >
            {answers}
          </Row>
        </Jumbotron>
      </Container>
    </div> : null
    )
  }
}
export default Question