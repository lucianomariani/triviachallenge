import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'actions'
import { Config } from 'data/config.js';
import Header from 'components/Header'
import Question from 'components/Question'
import QuitModal from 'components/Modal'
import Timer from 'components/Timer'
import { Button, Spinner} from 'react-bootstrap';


class Game extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        questionNumber: 0,
        showModal: false,
        score: 0,
        userChoices: [],
        timer: Config.timer
      }
    }

    handleShow = () => {
      this.setState({
        show: true
      })
    }
    handleClose = () => {
      this.setState({
        show: false
      })
    }
    doSomethingBeforeUnload = (ev) => {
      // Do something
      this.setState({
        show: true
      })
    }
    setupBeforeUnloadListenerCloseTab = () => {
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            return ev.returnValue = 'Are you sure you want to close?';
        });
    };

    setupBeforeUnloadListenerBrowserBack = () => {
    window.addEventListener('popstate', (event) => {
      if (event.state) {
        this.setState({
          show: true
        })
      }
    }, false);
    };

    componentDidMount() {
      
      this.props.fetchTrivia();
      window.history.pushState({name: "browserBack"}, "on browser back click", window.location.href);
      window.history.pushState({name: "browserBack"}, "on browser back click", window.location.href);
      this.setupBeforeUnloadListenerCloseTab();
      this.setupBeforeUnloadListenerBrowserBack();
    }
   
    componentWillUnmount() {
      clearInterval(this.timerInterval);
    }

    handleNextQuestion = (ans) => {
      let resultOfChoice = false
      let newScore = this.state.score;
      const { questionNumber, score, userChoices} = this.state;
      const correctAnswer = this.props.results[questionNumber].correct_answer;
      const nextQuestionNumber = questionNumber + 1
      
      if (ans === correctAnswer) {
        resultOfChoice = true
        newScore = score + 1
        this.setState({
          score: newScore
        })
      }
      const newUserChoices = userChoices.concat({"result": resultOfChoice ,"question":this.props.results[questionNumber].question, "correct_answer":this.props.results[questionNumber].correct_answer, "user_choice":ans})   
     
      this.setState({
        questionNumber : nextQuestionNumber,
        timer: Config.timer,
        userChoices: newUserChoices
      })
      
      
      if (nextQuestionNumber  === this.props.results.length) {
          clearInterval(this.timerInterval);
          this.props.history.push({pathname: '/results', state: { score: newScore, userChoices: newUserChoices }})
      } 
    }

    render () {

      let cardContent = '';
      if (this.props.loading) {
        cardContent = <div>
        <Spinner animation="border" variant="light" />
        </div>;
      }else{
        cardContent =  <div>
        <Timer seconds={this.state.timer} onEnd={this.handleNextQuestion} />
        <Question 
        questionNumber={this.state.questionNumber} 
        handleNextQuestion={this.handleNextQuestion} 
        result={this.props.results[this.state.questionNumber]}
        />
        <Button variant="secondary" onClick={this.handleShow}  size="sm">
        Give Up
       </Button></div>
      }
    /**/
    return (
      <div className="game">

        <Header/>
        {cardContent}
        <QuitModal handleClose={this.handleClose} show={this.state.show}/>
      </div>
      )
    }
  }



  const mapStateToProps = (state, ownProps) => { 
    return {
      results: state.trivia.results,
      error: state.trivia.error,
      loading: state.trivia.loading
    };
  };
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTrivia: actions.fetchTrivia
  }, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game);