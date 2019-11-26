import React from 'react';

function Score(props) {
  return (
      <div className="score">
        You Scored <br/>
       <strong>{props.score}/{props.total}</strong>
      </div>
    )
}
export default Score