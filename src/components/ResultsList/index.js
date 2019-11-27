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
        <td className="desktop">
        {res} 
        </td> 
        <th scope="row" className="desktop">
        <p>{he.decode(item.question)}</p>
        </th>
        <td className="desktop">
        <p> {he.decode(item.correct_answer)}  </p>
        </td>
        <td className="desktop">
        <p> {item.user_choice} </p>
        </td>
        <td className="mobile">
          {res} 
          <p><strong>Question</strong><br/>{he.decode(item.question)}</p>
          <p><strong>Correct Answer</strong><br/>{he.decode(item.correct_answer)}</p>
          <p><strong>Your Choice</strong> <br/> {item.user_choice} </p>
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
              <tr className="results_choices desktop">
                <th scope="col" className="desktop">
                  <p>Result</p>
                </th> 
                <th scope="col"  className="desktop">
                  <p>Question</p>
                </th>
                <th scope="col" className="desktop">
                  <p>Correct Answer</p>
                </th>
                <th  scope="col" className="desktop" >
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