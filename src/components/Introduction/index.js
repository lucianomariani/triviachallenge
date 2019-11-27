import React from 'react';
import { Button, Jumbotron} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Introduction(props) {

  const {type, questions} = props;

  let typeLengend = '';
  if (type === 'boolean') {
    typeLengend = ' True or False '
  } else if (type === 'multiple') {
    typeLengend = ' Multiple Choice '
  } 

  return (
    <Jumbotron>
      <h2>You will be presented with  {questions} {typeLengend} questions </h2>
      <p>
        Can You Score 100%?
      </p>
      <p>
        <Link to="/game">
          <Button variant="primary" size="lg">Begin</Button>
        </Link>
      </p>
    </Jumbotron>
    )
}
export default Introduction