import React from 'react';
import PropTypes from 'prop-types';

function Score(props) {
  return (
      <div className="score">
        You Scored <br/>
       <strong>{props.score}/{props.total}</strong>
      </div>
    )
}

Score.propTypes = {
  score: PropTypes.number,
  total: PropTypes.number,
};
export default Score