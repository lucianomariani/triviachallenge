import React from 'react';
import {Button,  Jumbotron, Row, Col,Container, ProgressBar} from 'react-bootstrap';
import he from 'he'
import shuffle from 'shuffle-array';
import { Config } from 'data/config.js';

class Question extends React.Component {
 

  handleClick = (e) => {
    const { param } = e.target.dataset;
    this.props.handleNextQuestion(param)
  }
  render() {
   
    let answers = ''
    if (this.props.result) {
       const ans = shuffle(this.props.result.incorrect_answers.concat(this.props.result.correct_answer));
       if (this.props.result.type === 'boolean') {
        answers = (
            <>
            <Col md={{ span: 6}}><Button onClick={this.handleClick} data-param="True" variant="primary"  size="lg" block>True</Button></Col>
            <Col md={{ span: 6}}><Button onClick={this.handleClick} data-param="False" variant="primary"  size="lg" block>False</Button></Col>
            </>
            );
        
       }else{
       answers = ans.map((item, i) => {
        return (
          <Col key={i} md={{ span: 6}}><Button onClick={this.handleClick} data-param={he.decode(item)} variant="primary"  size="lg" block>{he.decode(item)}</Button></Col>
            );
        });
      }
    } 

  return (
    this.props.result ? 
    <div className="question_and_options">
      <Container>
      <div>  
          <ProgressBar variant="success" now={(this.props.questionNumber + 1) * 100/Config.amount} label={`${this.props.questionNumber + 1}/${Config.amount}`} /> 
      </div>
      <h3 className="category">{this.props.result.category}</h3>
        <Jumbotron>
          <Row>
            <Col>
              <h2>{he.decode(this.props.result.question)}</h2>
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