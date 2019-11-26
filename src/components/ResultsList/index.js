import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import image_ok from 'assets/images/ok.png';
import image_wrong from 'assets/images/wrong.png';
import he from 'he'

function ResultsList(props) {

  const answers = props.userChoices.map((item, i) => {
    const res = (item.result) ? <img src={image_ok} alt="ok"/> : <img src={image_wrong} alt="wrong"/>
    return (
      <tr key={i} className="results_choices">
        <td >
        {res} 
        </td> 
        <th scope="row" >
        <p>{he.decode(item.question)}</p>
        </th>
        <td >
        <p> {he.decode(item.correct_answer)}  </p>
        </td>
        <td >
        <p> {item.user_choice} </p>
        </td>
      </tr>
     );
  });


  return (
    <div className="results_list">
     
      <h3>Results Details</h3>
      <Container>
        <Jumbotron>
          <table className="table">
           <thead>  
              <tr className="results_choices">
                <th scope="col">
                  <p>Result</p>
                </th> 
                <th scope="col">
                  <p>Question</p>
                </th>
                <th scope="col">
                  <p>Correct Answer</p>
                </th>
                <th  scope="col">
                  <p>Your Choice</p>
                </th>
              </tr>
            </thead> 
            <tbody>
            {answers}
            </tbody>
            </table>
        </Jumbotron>
      </Container>
    </div>
    )
}
export default ResultsList