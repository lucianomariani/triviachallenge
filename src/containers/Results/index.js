import React from 'react'
import Header from 'components/Header'
import ResultsList from 'components/ResultsList'
import Score from 'components/Score'
import { Link } from "react-router-dom";
import { Button, Spinner} from 'react-bootstrap';
import { Config } from 'data/config.js';

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      waiting: 3
    }
  }
 
 
  componentDidMount() {

    this.timerInterval = setInterval(() => {
      if (this.state.waiting > 0) {
      this.setState(({ waiting }) => ({
        waiting: waiting - 1
      }))
      }
    }, 1000)

  }


  render () {
 
    const state = this.props.location.state;

      let cardContent = '';
      if (this.state.waiting > 0) {
        cardContent = <div>
        <Spinner animation="border" variant="light" />
        </div>;
      }else{
        cardContent = <div> 
          <Score score={state.score} total={Config.amount}/>
        <p><Link to="/">
        <Button variant="primary">Play Again</Button>
        </Link>
        </p>
        <ResultsList userChoices={state.userChoices} />
        </div>

      }

    return (
      <div className="results">
        <Header/>
        {cardContent}
       
      </div>
    )
  }

}
export default Results